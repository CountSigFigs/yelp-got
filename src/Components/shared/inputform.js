import React from 'react';
import styled from '@emotion/styled';
import {Input, Button} from './form';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    max-width:650px;
    align-items: center;
    > button {
        margin-left: 1rem;
    }
`;

const InputForm = ({ inputVal, onChange, onSubmit, buttonText}) => {
    return (
        <Container>
            <Input value={inputVal} onChange={onChange} />
            <Button onClick={onSubmit}>{buttonText || "Search"}</Button>
        </Container>
    )
};

export default InputForm;