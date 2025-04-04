import React, {useState, useEffect} from 'react';
import { connect, styled, css, Global, loadable } from "frontity";

const SearchBarHomeMobile = ({state, actions, libraries, active, handleResults, setSearchTerm, setArrResult, handleOpenCloseSearch = {handleOpenCloseSearch}}) => {

    //states of the component
    const [propertyID, setPropertyID] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [bedrooms, setBedrooms] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    //General states 
    const exchangeRateValue = state.theme.coinExchange.exchange_rate;
    const currencyPair = state.theme.coinExchange.currency_pair;

    const propertiesForFilter = state.theme.myProperties;

    const DotsPrice = require('./helpers/DotsPrice');

    DotsPrice.formatPrice

    const handleSearch = () => {

        // Perform search based on the selected filters
        const filteredProperties = propertiesForFilter.filter(property => {
          // Check each filter criteria and return true if the property matches all selected filters
      
          // Filter by Property ID
          if (propertyID && property.acf.details_properties.code_property !== propertyID) {
            return false;
          }

          // Filter by Property Type
          if (propertyType || propertyType !== "All")  {
            if(propertyType === "Short Term Rentals" && !property.categories.includes(9) ) {
                return false;
            }

            else if(propertyType === "Long Term Rentals Furnished" && !property.categories.includes(10) ) {
                return false;
            }

            else if(propertyType === "Long Term Rentals Unfurnished" && !property.categories.includes(11) ) {
                return false;
            }

            else if(propertyType === "Long Term Rentals Unfurnished" && !property.categories.includes(11) ) {
                return false;
            }

            else if(propertyType === "For Sale" && !property.categories.includes(3) ) {
                return false;
            }

            else if(propertyType === "Pesach and Succot Rentals" && !property.categories.includes(12) ) {
                return false;
            }

            else if(propertyType === "New Development" && !property.categories.includes(7) ) {
                return false;
            }
          }

          // Filter by Neighborhood
          if (neighborhood && property.acf.details_properties.neighborhood.toLowerCase() !== neighborhood.toLowerCase()) {
            return false;
          }
      
          // Filter by Bedrooms
          if (bedrooms || bedrooms !== "All") {

            if (bedrooms === "Up to 3" && property.acf.details_properties.beds > 3) {
                return false;
            } else if (bedrooms === "3-5" && (property.acf.details_properties.beds < 3 || property.acf.details_properties.beds > 5)) {
                return false;
            } else if (bedrooms === "5" && property.acf.details_properties.beds < 5) {
                return false;
            }
          }
      
          // Filter by Min Price
          if (minPrice && property.acf.details_properties.price_shekels < parseInt(minPrice)) {
            return false;
          }
      
          // Filter by Max Price
          if (maxPrice && property.acf.details_properties.price_shekels > parseInt(maxPrice)) {
            return false;
          }
      
          // All filters match
          return true;
        });

        handleResults(filteredProperties);

        const searchTerm = {"propertyID": propertyID , "propertyType": propertyType ,"neighborhood": neighborhood, "bedrooms": bedrooms, "minPrice": minPrice, "maxPrice": maxPrice};
    
        setSearchTerm(searchTerm);
    };

    const handleClearResult = () => {
        setArrResult([])
        setSearchTerm({})
        setPropertyID('')
        setPropertyType('')
        setNeighborhood('')
        setBedrooms('')
        setMinPrice('')
        setMaxPrice('')
    }
    
    return ( 
    
        <SearchTabContent>
               
            <SearchForm>
            <CloseSearchButton onClick={handleOpenCloseSearch}>X</CloseSearchButton>
                <div>
                    <SearchMultiFilter>
                        <ListFilter>
                            <ItemList>
                                <EnterSearchInput>
                                    <div>
                                        <input type="text" placeholder="Property ID"   placeholder="Property ID" value={propertyID} onChange={(e) => setPropertyID(e.target.value)}/>
                                    </div>
            
                                </EnterSearchInput>
                            </ItemList>

                            <ItemList>
                                <ProperyType>
                                    <div>
                                        <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                                            <option value="" disabled >Type</option>
                                            <option value="All">All</option>
                                            <option value="Short Term Rentals">Short Term Rentals</option>                                            
                                            <option value="Long Term Rentals Furnished">Long Term Rentals Furnished</option>
                                            <option value="Long Term Rentals Unfurnished">Long Term Rentals Unfurnished</option>
                                            <option value="For Sale">For Sale</option>
                                            <option value="Pesach and Succot Rentals">Pesach and Succot Rentals</option>
                                            <option value="New Development">New Development</option>
                                        </select>
                                    </div>
                                </ProperyType>
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
                                            <option value="" disabled >Bedrooms</option>
                                            <option value="All">All</option>
                                            <option value="Up to 3">Up to 3</option>
                                            <option value="3-5">3-5 rooms</option>
                                            <option value="5">5 rooms+</option>
                                        </select>
                                    </div>
                                </ProperyType>
                            </ItemList>
            
            
                            <ItemPrice>
                                <ProperyType>
                                    <div>
                                        
                                            {propertyType === "For Sale" || propertyType === "New Development" ? 
                                                <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                                                    <option disabled value="">{currencyPair === "USD_USD"? "$ " : currencyPair === "USD_EUR"? "€ " : "₪ "}Min. Price</option>
                                                    <option value="500000">{DotsPrice.formatPrice(parseInt(Number(500000)*Number(exchangeRateValue)))}</option>
                                                    <option value="2000000">{DotsPrice.formatPrice(parseInt(Number(2000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="4000000">{DotsPrice.formatPrice(parseInt(Number(4000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="6000000">{DotsPrice.formatPrice(parseInt(Number(6000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="8000000">{DotsPrice.formatPrice(parseInt(Number(8000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="10000000">{DotsPrice.formatPrice(parseInt(Number(10000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="12000000">{DotsPrice.formatPrice(parseInt(Number(12000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="14000000">{DotsPrice.formatPrice(parseInt(Number(14000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="16000000">{DotsPrice.formatPrice(parseInt(Number(16000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="18000000">{DotsPrice.formatPrice(parseInt(Number(18000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="20000000">{DotsPrice.formatPrice(parseInt(Number(20000000)*Number(exchangeRateValue)))}</option>
                                                </select>

                                                : propertyType === "All" ? 
                                                <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                                                    <option disabled value="">{currencyPair === "USD_USD"? "$ " : currencyPair === "USD_EUR"? "€ " : "₪ "}Min. Price</option>
                                                    <option value="3000">{DotsPrice.formatPrice(parseInt(Number(3000)*Number(exchangeRateValue)))}</option>
                                                    <option value="10000">{DotsPrice.formatPrice(parseInt(Number(10000)*Number(exchangeRateValue)))}</option>
                                                    <option value="4000000">{DotsPrice.formatPrice(parseInt(Number(4000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="6000000">{DotsPrice.formatPrice(parseInt(Number(6000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="8000000">{DotsPrice.formatPrice(parseInt(Number(8000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="10000000">{DotsPrice.formatPrice(parseInt(Number(10000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="12000000">{DotsPrice.formatPrice(parseInt(Number(12000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="14000000">{DotsPrice.formatPrice(parseInt(Number(14000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="16000000">{DotsPrice.formatPrice(parseInt(Number(16000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="18000000">{DotsPrice.formatPrice(parseInt(Number(18000000)*Number(exchangeRateValue)))}</option>
                                                    <option value="20000000">{DotsPrice.formatPrice(parseInt(Number(20000000)*Number(exchangeRateValue)))}</option>
                                                </select>
                                            
                                            : 

                                                <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                                                    <option disabled value="">{currencyPair === "USD_USD"? "$ " : currencyPair === "USD_EUR"? "€ " : "₪ "}Min. Price</option>
                                                    <option value="3000">{DotsPrice.formatPrice(parseInt(Number(3000)*Number(exchangeRateValue)))}</option>
                                                    <option value="4000">{DotsPrice.formatPrice(parseInt(Number(4000)*Number(exchangeRateValue)))}</option>
                                                    <option value="6000">{DotsPrice.formatPrice(parseInt(Number(6000)*Number(exchangeRateValue)))}</option>
                                                    <option value="8000">{DotsPrice.formatPrice(parseInt(Number(8000)*Number(exchangeRateValue)))}</option>
                                                    <option value="10000">{DotsPrice.formatPrice(parseInt(Number(10000)*Number(exchangeRateValue)))}</option>
                                                    <option value="12000">{DotsPrice.formatPrice(parseInt(Number(12000)*Number(exchangeRateValue)))}</option>
                                                    <option value="14000">{DotsPrice.formatPrice(parseInt(Number(14000)*Number(exchangeRateValue)))}</option>
                                                    <option value="16000">{DotsPrice.formatPrice(parseInt(Number(16000)*Number(exchangeRateValue)))}</option>
                                                    <option value="18000">{DotsPrice.formatPrice(parseInt(Number(18000)*Number(exchangeRateValue)))}</option>
                                                    <option value="20000">{DotsPrice.formatPrice(parseInt(Number(20000)*Number(exchangeRateValue)))}</option>
                                                </select>
                                            
                                            }
                                    </div>
                                </ProperyType>
                            </ItemPrice>
            
                            <ItemPrice>
                                <ProperyType>
                                    <div>
                                        {propertyType === "For Sale" || propertyType === "New Development" ? 
                                            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                                                <option disabled value="">{currencyPair === "USD_USD"? "$ " : currencyPair === "USD_EUR"? "€ " : "₪ "}Max. Price</option>
                                                <option value="10000000">{DotsPrice.formatPrice(parseInt(Number(10000000)*Number(exchangeRateValue)))}</option>
                                                <option value="12000000">{DotsPrice.formatPrice(parseInt(Number(12000000)*Number(exchangeRateValue)))}</option>
                                                <option value="14000000">{DotsPrice.formatPrice(parseInt(Number(14000000)*Number(exchangeRateValue)))}</option>
                                                <option value="16000000">{DotsPrice.formatPrice(parseInt(Number(16000000)*Number(exchangeRateValue)))}</option>
                                                <option value="18000000">{DotsPrice.formatPrice(parseInt(Number(18000000)*Number(exchangeRateValue)))}</option>
                                                <option value="20000000">{DotsPrice.formatPrice(parseInt(Number(20000000)*Number(exchangeRateValue)))}</option>
                                                <option value="22000000">{DotsPrice.formatPrice(parseInt(Number(22000000)*Number(exchangeRateValue)))}</option>
                                                <option value="24000000">{DotsPrice.formatPrice(parseInt(Number(24000000)*Number(exchangeRateValue)))}</option>
                                                <option value="26000000">{DotsPrice.formatPrice(parseInt(Number(26000000)*Number(exchangeRateValue)))}</option>
                                                <option value="28000000">{DotsPrice.formatPrice(parseInt(Number(28000000)*Number(exchangeRateValue)))}</option>
                                                <option value="30000000">{DotsPrice.formatPrice(parseInt(Number(30000000)*Number(exchangeRateValue)))}</option>
                                            </select>

                                        : propertyType === "All" ? 
                                            <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                                                <option disabled value="">{currencyPair === "USD_USD"? "$ " : currencyPair === "USD_EUR"? "€ " : "₪ "}Min. Price</option>
                                                <option value="10000">{DotsPrice.formatPrice(parseInt(Number(10000)*Number(exchangeRateValue)))}</option>
                                                <option value="30000">{DotsPrice.formatPrice(parseInt(Number(30000)*Number(exchangeRateValue)))}</option>
                                                <option value="4000000">{DotsPrice.formatPrice(parseInt(Number(4000000)*Number(exchangeRateValue)))}</option>
                                                <option value="6000000">{DotsPrice.formatPrice(parseInt(Number(6000000)*Number(exchangeRateValue)))}</option>
                                                <option value="8000000">{DotsPrice.formatPrice(parseInt(Number(8000000)*Number(exchangeRateValue)))}</option>
                                                <option value="10000000">{DotsPrice.formatPrice(parseInt(Number(10000000)*Number(exchangeRateValue)))}</option>
                                                <option value="12000000">{DotsPrice.formatPrice(parseInt(Number(12000000)*Number(exchangeRateValue)))}</option>
                                                <option value="14000000">{DotsPrice.formatPrice(parseInt(Number(14000000)*Number(exchangeRateValue)))}</option>
                                                <option value="16000000">{DotsPrice.formatPrice(parseInt(Number(16000000)*Number(exchangeRateValue)))}</option>
                                                <option value="18000000">{DotsPrice.formatPrice(parseInt(Number(18000000)*Number(exchangeRateValue)))}</option>
                                                <option value="20000000">{DotsPrice.formatPrice(parseInt(Number(20000000)*Number(exchangeRateValue)))}</option>
                                            </select>

                                        :
                                            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                                                <option disabled value="">{currencyPair === "USD_USD"? "$ " : currencyPair === "USD_EUR"? "€ " : "₪ "}Max. Price</option>
                                                <option value="10000">{DotsPrice.formatPrice(parseInt(Number(10000)*Number(exchangeRateValue)))}</option>
                                                <option value="12000">{DotsPrice.formatPrice(parseInt(Number(12000)*Number(exchangeRateValue)))}</option>
                                                <option value="14000">{DotsPrice.formatPrice(parseInt(Number(14000)*Number(exchangeRateValue)))}</option>
                                                <option value="16000">{DotsPrice.formatPrice(parseInt(Number(16000)*Number(exchangeRateValue)))}</option>
                                                <option value="18000">{DotsPrice.formatPrice(parseInt(Number(18000)*Number(exchangeRateValue)))}</option>
                                                <option value="20000">{DotsPrice.formatPrice(parseInt(Number(20000)*Number(exchangeRateValue)))}</option>
                                                <option value="22000">{DotsPrice.formatPrice(parseInt(Number(22000)*Number(exchangeRateValue)))}</option>
                                                <option value="24000">{DotsPrice.formatPrice(parseInt(Number(24000)*Number(exchangeRateValue)))}</option>
                                                <option value="26000">{DotsPrice.formatPrice(parseInt(Number(26000)*Number(exchangeRateValue)))}</option>
                                                <option value="28000">{DotsPrice.formatPrice(parseInt(Number(28000)*Number(exchangeRateValue)))}</option>
                                                <option value="30000">{DotsPrice.formatPrice(parseInt(Number(30000)*Number(exchangeRateValue)))}</option>
                                            </select>
                                    }
                                    </div>
                                </ProperyType>
                            </ItemPrice>
            
                    
                            <ItemList>
                                <button onClick={handleSearch}>Search</button>
                            </ItemList>

                        
                            <ItemList>
                                <button onClick={handleClearResult}> Clear All </button>
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

    @media (min-width: 1200px) {
        display: none;
    }
`

export const CloseSearchButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;

  &:hover {
    color: var(--golden-icons)
  }
`;

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
   
    width: 9vw;
    /**new lines added */

    @media (max-width: 1200px) {
        margin-bottom: 1rem;
        width: 40%;
        margin-right: 0;
        margin-left: 0;

        /* &:nth-of-type(5){
            width: 100%;
        } */
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

        /* &:nth-of-type(5){
            width: 100%;
        } */
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

const ButtonClear = styled.button`
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

export default connect(SearchBarHomeMobile);

