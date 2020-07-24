import React, {useState, useEffect} from 'react';
import {InputForm} from './shared/inputform';
import Kingdoms from './kingdoms';
import {useLazyQuery, gql} from '@apollo/client';

const SEARCH = gql`
    query Search($match: String){
        Great_Houses(order_by: {name: asc}, where: {name: {_ilike: $match}}){
            id,
            name, 
            region,
            sigil,
            reviews {
                rating
            }
        }
    }
`

const KingdomSearch = () => {

    const [inputVal, setInputVal] = useState("");
    const [search, { loading, error, data}] = useLazyQuery(SEARCH);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (loading) return <p style={{color:'white'}}>Loading...</p>
    if (error) return <p style={{color:'white'}}>Error: {error.message}</p>

    return (
        <div>
            <h2 style={{color:'white'}}>Search by one of the seven great kingdoms or click on one below <br /> to add a review and see what others are saying!</h2>
            <InputForm
                inputVal={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onSubmit = {() => search({ variables: { match: `%${inputVal}%` } })}/>
            <Kingdoms newKingdoms={data ? data.Great_Houses : null} />
        </div>
    )
};

export default KingdomSearch;
