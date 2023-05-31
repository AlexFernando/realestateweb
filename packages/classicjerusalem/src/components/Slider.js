import React, { useEffect, useState, useRef } from 'react';
import { connect, styled } from 'frontity';

const SliderContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  /* overflow-x: hidden; */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

export const PropertiesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 1rem;
    color: #444;
    font-family: 'Lato';
    margin-top: 2rem;

    @media (max-width: 576px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }

    @media (min-width: 577px) and (max-width: 1024px){
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        margin: 2rem 0;
        padding-left: calc(1.5rem/2);
        padding-right: calc(1.5rem/2);
    }
`

const Slide = ({ children }) => (
  <PropertiesGrid>

    {children}
  </PropertiesGrid>
);

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.button`
  border: none;
  background-color: ${({ active }) => (active ? '#1c2641' : '#ccc')};
  width: 20px;
  height: 20px;
  /* border-radius: 50%; */
  margin: 0 5px;
  cursor: pointer;
  color: #fff;
`;

const Slider = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let count = 6;
      if (width <= 576) {
        count = 2;
      } else if (width>576 && width <= 1024) {
        count = 4;
      } else {
        count = 6;
      }
      const groupedChildren = groupChildren(children, count);
      setGroupedChildren(groupedChildren);
      setActiveSlide(0);
      sliderRef.current.scrollLeft = 0;
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [children]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    sliderRef.current.scrollLeft = index * sliderRef.current.offsetWidth;
  };

  const handleScroll = () => {
    const index = Math.round(sliderRef.current.scrollLeft / sliderRef.current.offsetWidth);
    setActiveSlide(index);
  };

  const groupChildren = (children, count) => {
    const groupedChildren = [];
    let group = [];
    let groupCount = 0;
    React.Children.forEach(children, (child) => {
      group.push(child);
      groupCount += 1;
      if (groupCount === count) {
        groupedChildren.push(group);
        group = [];
        groupCount = 0;
      }
    });
    if (groupCount > 0) {
      groupedChildren.push(group);
    }
    return groupedChildren;
  };

  const [groupedChildren, setGroupedChildren] = useState(() => groupChildren(children, 6));

  return (
    <>
      <SliderContainer ref={sliderRef} onScroll={handleScroll}>
        {groupedChildren.map((group, index) => (
          <div key={index} style={{ flex: '0 0 100%', paddingRight: '10px' }}>
            <Slide>{group}</Slide>
          </div>
        ))}
      </SliderContainer>
      <DotsContainer>
       

        {groupedChildren.map((_, index) => (
          <Dot key={index} active={index === activeSlide} onClick={() => handleSlideChange(index)}> {index+1}</Dot>
        ))}
      </DotsContainer>
    </>
  );
};

export default Slider;
