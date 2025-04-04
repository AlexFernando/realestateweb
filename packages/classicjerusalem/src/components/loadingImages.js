import { useEffect } from "react";
import { styled , css} from "frontity";
import useInView from "@frontity/hooks/use-in-view";
// import { LazyImage } from "@frontity/lazyload";
import Image from "@frontity/components/image";

const Slider = () => {
  const {ref, inView} = useInView();

  useEffect(() => {
    if (inView) {
      // Start the slider animation
    } else {
      // Stop the slider animation
    }
  }, [inView]);

  return (
    <SliderContainer ref={ref}>
      <SliderItem backgroundUrl="https://realestateadmin2025.classicjerusalem.com/wp-content/uploads/2023/03/background4-1536x1002.jpg" />
      <SliderItem backgroundUrl="https://realestateadmin2025.classicjerusalem.com/wp-content/uploads/2023/03/background3-1536x1012.jpg" />
      <SliderItem backgroundUrl="https://realestateadmin2025.classicjerusalem.com/wp-content/uploads/2023/03/background1-1536x1025.jpg" />
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
`;

const SliderItem = ({ backgroundUrl }) => (
  <Image src={backgroundUrl} css={ css`position: "absolute"; top: 0; left: 0; width: "100%"; height: "100%" `} />
);


/* <div
css={css`
  background-image: url(${imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
`}
>
<picture>
  <source media="(min-width: 768px)" srcset={largeImageUrl} />
  <source media="(max-width: 767px)" srcset={smallImageUrl} />
  <img src={fallbackImageUrl} alt={imageAlt} />
</picture>
</div> */