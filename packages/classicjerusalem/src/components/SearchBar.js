import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Loading from './Loading';

const SearchBar = ({state, actions, libraries}) => {

    return ( 
        <MarginTop>
            <SearchTabContent>
                <SearchForm>
                    <div>
                        <SearchMultiFilter>
                            <ListFilter>
                                <ItemList>
                                    <EnterSearchInput>
                                        <div>
                                            <input type="text" placeholder="Enter keyword" />
                                        </div>

                                    </EnterSearchInput>
                                </ItemList>

                                <ItemList>
                                    <ProperyType>
                                        <div>
                                            <select>
                                                <option value>Property Type</option>
                                                <option>Apartment</option>
                                                <option>House</option>
                                                <option>Condo</option>
                                                <option>Bungalows</option>
                                            </select>
                                        </div>
                                    </ProperyType>
                                </ItemList>

                                <ItemList>
                                    <ProperyType>
                                        <div>
                                            <select>
                                                <option value>Bedrooms</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4 or more</option>
                                            </select>
                                        </div>
                                    </ProperyType>
                                </ItemList>


                                <ItemList>
                                    <ProperyType>
                                        <div>
                                            <select>
                                                <option value>Price</option>
                                                <option>1000 - 2000 usd</option>
                                                <option>2000 - 4000 usd</option>
                                                <option>4000 - 8000 usd</option>
                                                <option>8000 usd or more</option>
                                            </select>
                                        </div>
                                    </ProperyType>
                                </ItemList>

                          
                                    <div>
                                        <button>Search</button>
                                    </div>
                                
                            </ListFilter>
                        </SearchMultiFilter>
                    </div>
                </SearchForm>
            </SearchTabContent>
        </MarginTop>
    );
}



const MarginTop = styled.div`
    margin-bottom: 3rem;
    padding: 0 .5rem;
`

const SearchTabContent = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`

const SearchForm = styled.div`
    background-color: #fff;
    border-radius: 8px;
    padding: 30px 20px;
    position: relative;
    z-index: 9;
    background-color: transparent;
    background-image: linear-gradient(180deg, #FFFFFF 0%, #FFFFFFCC 100%);

    &:before {
        background-color: hsla(0,0%,100%,.15);
        border-radius: 8px;
        bottom: -10px;
        content: "";
        left: -10px;
        position: absolute;
        right: -10px;
        top: -10px;
        z-index: -1;
    }
`
const SearchMultiFilter = styled.div`
    /* position: relative; */
    display: flex;
    justify-content: center;
`

const ListFilter = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div {

        @media (max-width: 1200px) {
            width: 100%;
        }
      
        button {
            border-radius: 8px;
            background-color: var(--golden);
            font-size: 16px;
            color: #fff;
            font-weight: 700;
            line-height: 1.2;
            height: 50px;
            width: 215px;
            transition: all .3s ease;
            cursor: pointer;
            border: none;
       

            @media (max-width: 1200px) {
                width: 100%;
            }
        }
    }
`
const ItemList = styled.li`
    display: inline-block;
    line-height: 3;
    margin-right: 30px;
    margin-left: 30px;
    vertical-align: text-top;

    @media (max-width: 1200px) {
        margin-bottom: 1rem;
        width: 40%;
        margin-right: 0;
        margin-left: 0;
    }
`
const EnterSearchInput = styled.div`
    margin-bottom: 0;

    div {
        width: 100%;

        input {
            background-color: #fff;
            border: 1px solid #bcbcbc;
            border-radius: 8px;
            font-size: 14px;
            color: #484848;
            line-height: 1.2;
            height: 50px;
            /* width: 215px;   */
            padding: 0 1rem;
            box-sizing: border-box; 
            width: 100%;

        &:focus {
           outline: none;
        }  
    }
    }

`
const ProperyType = styled.div`

    div {
        width: 100%;
        select {
            background-color: #fff;
            border: 1px solid #bcbcbc;
            border-radius: 8px;
            font-size: 14px;
            color: #777;
            line-height: 1.2;
            height: 50px;
            /* width: 215px; */
            padding: 1rem;
            width: 100%;
            /* box-sizing: border-box; */
  
            &:focus {
                outline: none;
            }  

            &:after {
                margin-right: 2rem;
            }
        }
    }
`


export default connect(SearchBar);