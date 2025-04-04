// File: /packages/my-first-theme/src/components/error.js
import React from "react"
import {styled} from "frontity";
import {TextNoPropertiesFound} from './Rent'

const Error = () => {
  return (
    <MarginError>
    
        <TextNoPropertiesFound>
            <h2>We're sorry</h2>
            <p>There's not an entrance here yet</p>
            <p>We will be adding some important information soon!</p>
        </TextNoPropertiesFound>
 


    </MarginError>
  )
}

export default Error

export const MarginError = styled.div`
    margin: 15rem auto;
`