import React, {useState} from 'react';
import InputForm from './shared/inputform';
import Kingdoms from './kingdoms';
import {useLazyQuery, gql} from '@apollo/client';

const SEARCH = gql`
    query Search($match: String){
        Great_Houses(order_by: {name: asc}, where: {name: {_ilike: $match}}){
            id,
            name, 
            region,
            sigil
        }
    }
`

const KingdomSearch = () => {

    const [inputVal, setInputVal] = useState("");
    const [search, { loading, error, data}] = useLazyQuery(SEARCH);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    
    return (
        <div>
            <h2 style={{color:'white'}}>Add a Review and See What Others Are Saying!</h2>
            <InputForm
                inputVal={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onSubmit = {() => search({ variables: { match: `%${inputVal}%` } })}/>
            <Kingdoms newKingdoms={data ? data.Great_Houses : null} />
        </div>
    )
};

export default KingdomSearch;
