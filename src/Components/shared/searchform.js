import React from 'react';
import styled from '@emotion/styled';
import {Input, Button} from './form';

const SearchForm = styled.div`
    display: flex;
    margin: 0 auto;
    max-width:650px;
    align-items: center;
    > button {
        margin-left: 1rem;
    }
`;

const Search = ({ inputVal, onChange, onSearch}) => {
    return (
        <SearchForm>
            <Input value={inputVal} onChange={onChange} />
            <Button onClick={onSearch}>Search</Button>
        </SearchForm>
    )
};

export default Search;
