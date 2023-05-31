import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";
import Loading from './Loading';

const SearchBarBgSell = ({state, actions, libraries}) => {

       //states of the component
       const [propertyID, setPropertyID] = useState('');
       const [neighborhood, setNeighborhood] = useState('');
       const [bedrooms, setBedrooms] = useState('');
       const [minPrice, setMinPrice] = useState('');
       const [maxPrice, setMaxPrice] = useState('');

       const propertiesForFilter = state.theme.myProperties;

       console.log("properties: ", propertiesForFilter)
   
       const handleSearch = () => {

        console.log("beds: ", bedrooms)
        // Perform search based on the selected filters
        const filteredProperties = propertiesForFilter.filter(property => {
          // Check each filter criteria and return true if the property matches all selected filters
      
          // Filter by Property ID
          if (propertyID && property.acf.details_properties.code_property !== propertyID) {
            return false;
          }
      
          // Filter by Neighborhood
          if (neighborhood && property.acf.details_properties.neighborhood !== neighborhood) {
            return false;
          }
      
          // Filter by Bedrooms
          if (bedrooms && property.acf.details_properties.beds !== bedrooms) {
            return false;
          }
      
          // Filter by Min Price
          if (minPrice && property.acf.details_properties.price_dollars < parseInt(minPrice)) {
            return false;
          }
      
          // Filter by Max Price
          if (maxPrice && property.acf.details_properties.price_dollars > parseInt(maxPrice)) {
            return false;
          }
      
          // All filters match
          return true;
        });
      
        console.log("filtered Properties: ", filteredProperties);
        
      };

    const exchangeRateValue = state.theme.coinExchange.exchange_rate;
    const currencyPair = state.theme.coinExchange.currency_pair;
    
    return ( 
        <SearchTabContent>
            <SearchForm>
                <div>
                    <SearchMultiFilter>
                        <ListFilter>
                            <ItemList>
                                <EnterSearchInput>
                                    <div>
                                        <input type="text" placeholder="Property ID" />
                                    </div>
            
                                </EnterSearchInput>
                            </ItemList>
            
                            <ItemList>
                                <ProperyType>
                                    <div>
                                        <select value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)}>
                                            <option value="" disabled >Neighborhood</option>
                                            <option value="Abu Tor"> Abu Tor</option>
                                            <option value="Arnona"> Arnona</option>
                                            <option value="Baka"> Baka</option>
                                            <option value="Beit Hakerem"> Beit Hakerem</option>
                                            <option value="City Center"> City Center</option>
                                            <option value="The Germany Colony"> The Germany Colony </option>
                                            <option value="Gilo"> Gilo</option>                                                 
                                            <option value="The Greek Colony"> The Greek Colony</option>
                                            <option value="Katamon"> Katamon</option>                                                       
                                            <option value="Kiryat HaYovel"> Kiryat HaYovel</option>                                              
                                            <option value="Kiryat Shmuel"> Kiryat Shmuel</option>    
                                            <option value="Mekor Haim"> Mekor Haim</option>
                                            <option value="Mishkenot Hauma">Mishkenot Hauma</option>
                                            <option value="Nachlaot"> Nachlaot</option>
                                            <option value="The Old City"> The Old City</option>  
                                            <option value="Ramat Eshkol ">Ramat Eshkol</option>         
                                            <option value="Ramot"> Ramot</option>
                                            <option value="Rassco"> Rassco</option>                                                           
                                            <option value="Rehavia"> Rehavia</option>                                                            
                                            <option value="Talbiya"> Talbiya</option>                    
                                            <option value="Talpiyot"> Talpiyot</option>
                                            <option value="Shaarei Hesed"> Shaarei Hesed</option>    
                                            <option value="Yemin Moshe"> Yemin Moshe</option>
                                        </select>
                                    </div>
                                </ProperyType>
                            </ItemList>
            
                            <ItemList>
                                <ProperyType>
                                    <div>
                                        <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
                                            <option value="" disabled>Bedrooms</option>
                                            <option value="1">1 bedroom</option>
                                            <option value="2">2 bedrooms</option>
                                            <option value="3">3 bedrooms</option>
                                            <option value="4">4 bedrooms</option>
                                            <option value="5">5 bedrooms</option>
                                        </select>
                                    </div>
                                </ProperyType>
                            </ItemList>
            
            
                            <ItemPrice>
                                <ProperyType>
                                    <div>
                                        <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                                            <option value="" disabled>{currencyPair === "USD_USD"? "$ " : currencyPair === "USD_EUR"? "€ " : "₪ "}Min. Price</option>
                                            <option value="50000">{parseInt(Number(50000)*Number(exchangeRateValue))}</option>
                                            <option value="100000">{parseInt(Number(100000)*Number(exchangeRateValue))}</option>
                                            <option value="200000">{parseInt(Number(200000)*Number(exchangeRateValue))}</option>
                                            <option value="300000">{parseInt(Number(300000)*Number(exchangeRateValue))}</option>
                                            <option value="400000">{parseInt(Number(400000)*Number(exchangeRateValue))}</option>
                                            <option value="500000">{parseInt(Number(500000)*Number(exchangeRateValue))}</option>
                                            <option value="600000">{parseInt(Number(600000)*Number(exchangeRateValue))}</option>
                                            <option value="700000">{parseInt(Number(700000)*Number(exchangeRateValue))}</option>
                                            <option value="800000">{parseInt(Number(800000)*Number(exchangeRateValue))}</option>
                                            <option value="900000">{parseInt(Number(900000)*Number(exchangeRateValue))}</option>
                                            <option value="1000000">{parseInt(Number(1000000)*Number(exchangeRateValue))}</option>
                                        </select>
                                    </div>
                                </ProperyType>
                            </ItemPrice>
            
                            <ItemPrice>
                                <ProperyType>
                                    <div>
                                        <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                                            <option disabled value="">{currencyPair === "USD_USD"? "$ " : currencyPair === "USD_EUR"? "€ " : "₪ "}Max. Price</option>
                                            <option value="100000">{parseInt(Number(100000)*Number(exchangeRateValue))}</option>
                                            <option value="200000">{parseInt(Number(200000)*Number(exchangeRateValue))}</option>
                                            <option value="300000">{parseInt(Number(300000)*Number(exchangeRateValue))}</option>
                                            <option value="400000">{parseInt(Number(400000)*Number(exchangeRateValue))}</option>
                                            <option value="500000">{parseInt(Number(500000)*Number(exchangeRateValue))}</option>
                                            <option value="600000">{parseInt(Number(600000)*Number(exchangeRateValue))}</option>
                                            <option value="700000">{parseInt(Number(700000)*Number(exchangeRateValue))}</option>
                                            <option value="800000">{parseInt(Number(800000)*Number(exchangeRateValue))}</option>
                                            <option value="900000">{parseInt(Number(900000)*Number(exchangeRateValue))}</option>
                                            <option value="1000000">{parseInt(Number(1000000)*Number(exchangeRateValue))}</option>
                                            <option value="2000000">{parseInt(Number(2000000)*Number(exchangeRateValue))}</option>
                                        </select>
                                    </div>
                                </ProperyType>
                            </ItemPrice>
            
                    
                            <ItemList>
                                <button onClick={handleSearch}>Search</button>
                            </ItemList>

                        </ListFilter>
                    </SearchMultiFilter>
                </div>
            </SearchForm>
        </SearchTabContent>
    );
}


const SearchTabContent = styled.div`
    margin-top: 0px;
    display: flex;
    justify-content: center;
`

const SearchForm = styled.div`
    /* background-color: #fff; */
    border-radius: 8px;
    padding: 30px 20px;
    position: relative;
    z-index: 0;
    box-shadow: 0px 0px 10px 0px rgb(255 255 255 / 85%);
    /* background-color: #0c0c0c; */
    background-color: transparent;
    /* background-color: var(--main-color); */
    background-image: linear-gradient(180deg, #3e4c66 0%, #1c2641 20%);
    /* background-image: linear-gradient(180deg, #FFFFFF 0%, #FFFFFFCC 100%); */
    border-style: .5px solid #3e4c66;
     
    @media (min-width: 1025px) and (max-width: 1367px) {
        padding: 15px 10px;
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
      
    button {
        border-radius: 8px;
        background-color: var(--golden-color);
        font-size: 14px;
        font-size: clamp(.8rem, calc(0.40rem + 0.54vw), 1.20rem);
        font-family: 'Lato', sans-serif;
        color: #fff;
        font-weight: 700;
        line-height: 1.2;
        height: 50px;
        width: 215px;
        /**add new lines styles */
        width: 10vw;
        height: 5vh;
        /**new lines added */
        transition: all .3s ease;
        cursor: pointer;
        border: none;
    
        @media (max-width: 1200px) {
            width: 100%;
        }
    }
    
    @media (min-width: 1200px) and (max-width: 1367px) {
        justify-content: center;
    }
`
const ItemList = styled.li`
    display: inline-block;
    line-height: 3;
    margin-right: 20px;
    margin-left: 20px;
    vertical-align: text-top;
    /**add new lines styles */
   
    width: 10vw;
    /**new lines added */

    @media (max-width: 1200px) {
        margin-bottom: 1rem;
        width: 40%;
        margin-right: 0;
        margin-left: 0;

        &:nth-of-type(5){
            width: 100%;
        }
    }
`

const ItemPrice = styled.li`
    display: inline-block;
    line-height: 3;
    margin-right: 10px;
    margin-left: 10px;
    vertical-align: text-top;
    /**add new lines styles */
   
    width: 8vw;
    /**new lines added */

    @media (max-width: 1200px) {
        margin-bottom: 1rem;
        width: 40%;
        margin-right: 0;
        margin-left: 0;

        &:nth-of-type(5){
            width: 100%;
        }
    }
`

const EnterSearchInput = styled.div`
    
    margin-bottom: 0;

    div {
        
        width: 100%;
            /**add new lines styles */
  
    /**new lines added */

        input {
            background-color: #fff;
            border: 1px solid #bcbcbc;
            border-radius: 8px;
            font-size: clamp(.8rem, calc(0.40rem + 0.54vw), 1rem);
            font-family: 'Lato', sans-serif;
            color: #484848;
            line-height: 1.2;
            height: 50px;
            /* width: 215px;   */
            padding: 0 1rem;
            box-sizing: border-box; 
            width: 100%;

            /**new style line added */
            /* font-size: .8vw; */
            height: 5vh;
            /**end style added */

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
            background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='DimGray' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
            background-position: calc(100% - 0.75rem) center !important;
            -moz-appearance:none !important;
            -webkit-appearance: none !important; 
            appearance: none !important;
            padding-right: 2rem !important;
            background-color: #fff;
            border: 1px solid #bcbcbc;
            border-radius: 8px;
            font-size: 14px;
            font-size: clamp(.83rem, calc(0.40rem + 0.54vw), 1rem);
            font-family: 'Lato', sans-serif;
            color: #484848;
            line-height: 1.2;
            height: 50px;
            /* width: 215px; */
            padding: 1vh 1vw;
            width: 100%;
            /**add new lines styles */
            height: 5vh;
            /* font-size: .8vw; */
            align-self: center;
            /**new lines added */

            &:focus {
                outline: none;
            }  

            &:after {
                margin-right: 2rem;
            }

        }
    }
`
const PriceType = styled.div`
    div {
        width: 50%;

        select {
            background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='DimGray' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
            background-position: calc(100% - 0.75rem) center !important;
            -moz-appearance:none !important;
            -webkit-appearance: none !important; 
            appearance: none !important;
            padding-right: 2rem !important;
            background-color: #fff;
            border: 1px solid #bcbcbc;
            border-radius: 8px;
            font-size: 14px;
            font-size: clamp(.83rem, calc(0.40rem + 0.54vw), 1rem);
            font-family: 'Lato', sans-serif;
            color: #484848;
            line-height: 1.2;
            height: 50px;
            /* width: 215px; */
            padding: 1vh 1vw;
            width: 100%;
            /**add new lines styles */
            height: 5vh;
            /* font-size: .8vw; */
            align-self: center;
            /**new lines added */

            &:focus {
                outline: none;
            }  

            &:after {
                margin-right: 2rem;
            }

      
        }
    }
`

export default connect(SearchBarBgSell);

