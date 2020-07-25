import React from 'react';
import styled from '@emotion/styled';
import {Input, Button, TextArea} from './form';
import { Link } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    margin: 0 auto;
    max-width:500px;
    align-items: center;
    > button {
        margin-left: 1rem;
    }
`;

const Form = styled.div`
    display: flex;
    margin: 0 auto;
    max-width:500px;
    align-items: center;
    > button {
        margin-left: 1rem;
    }
`;

export const InputForm = ({ inputVal, onChange, onSubmit, buttonText}) => {
    return (
      <Container>
        <Input value={inputVal} onChange={onChange} />
        <Button onClick={onSubmit}>{buttonText || "Search"}</Button>
      </Container>
    );
  };

export const AddReview = ({ inputVal, onChange, onSubmit, buttonText}) => {
    return (
      <Form style={{display:'block'}}>
        <TextArea  value={inputVal} onChange={onChange}/>
        <Link to='/'><Button style={{ margin: '25px 0' }}><i className="fas fa-arrow-left" style={{ marginRight: '2px' }}></i>Go Back</Button></Link>
        <Button onClick={onSubmit}>{buttonText || "Search"}</Button>
      </Form>
    );
  };

