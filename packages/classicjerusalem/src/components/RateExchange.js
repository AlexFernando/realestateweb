import React, {useEffect} from 'react';
import { connect, styled } from 'frontity';

function ExchangeRates({ state, actions}) {

  function changeFunc(e) {
    if (e === "1") {
      handleNoRate()
    }

    else if(e === "2") {
      handleUsdEurClick()
    } 

    else if (e==="3") {
      handleUsdIlsClick()
    }
  }

  useEffect( () => {
    actions.theme.updateExchangeRate({currency_pair: 'ILS_ILS', exchange_rate: 1})
  },[])
  

  const handleNoRate = () => {
    actions.theme.updateExchangeRate({currency_pair: 'ILS_ILS', exchange_rate: 1})
  }

  const handleUsdEurClick = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/exchangerate?pair=ILS_USD', {
        headers: {
          'X-Api-Key': 'HXBv+KXBsF4/0Y1m5zx46Q==o44oHdKyfBWCcrwK'  
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      actions.theme.updateExchangeRate(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUsdIlsClick = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/exchangerate?pair=ILS_EUR', {
        headers: {
          'X-Api-Key': 'HXBv+KXBsF4/0Y1m5zx46Q==o44oHdKyfBWCcrwK'  
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      actions.theme.updateExchangeRate(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
    return (
      <ContainerSelector>
        <CoinSelector onChange={e => changeFunc(e.target.value)}>
          <option value="1">ILS</option>
          <option value="2">USD</option>
          <option value="3">EUR</option>
        </CoinSelector>
      </ContainerSelector>

    )


}

export default connect(ExchangeRates);

const ContainerSelector = styled.div`

`

const CoinSelector = styled.select`
    padding: .2rem .5rem;
    background-color: var(--main-color);
    color: var(--golden-color);
`;


