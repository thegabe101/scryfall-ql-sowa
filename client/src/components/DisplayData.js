import React, { useState } from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';

const QUERY_ONE_CARD = gql`
    query getCard($id: String!) {
        id
    }
    `

export const DisplayData = () => {

    const [grabCard, { data: cardData }] = useLazyQuery(QUERY_ONE_CARD);
    const [card, setCard] = useState('');


    return (
        <div>
            <input type="text" placeholder="Search card database here" onChange={(e) => { setCard(e.target.value) }} />
            <button onClick={() => {
                grabCard({
                    variables: {
                        id: card
                    }
                })
            }}>Search cards</button>
            {cardData && (<h1>{cardData.id}</h1>)}
        </div>
    )
}
