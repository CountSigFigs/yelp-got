import styled from '@emotion/styled';

export const Input = styled.input`
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  margin: 2rem 0;
  font-size: 2.4rem;
  line-height: 1.5;
  border-radius: 0.3rem;
  display: block;
  width: 100%;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
`;

export const Button = styled.button`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  padding: 0.5rem 1rem;
  font-size: 2rem;
  line-height: 1.5;
  height: calc(1.5em + 1rem + 8px);
  border-radius: 0.25rem;
  user-select: none;
  &:hover {
    cursor: pointer;
    background-color: #0069d9;
    border-color: #0062cc;
  }
  &:active {
    background-color: #0062cc;
    border-color: #005cbf;
  }
`;

export const TextArea = styled.textarea`
	height: 175px;	
  resize: none; 
  overflow: auto;
  width: 500px;	
	border: none;
	border-radius: 20px;
	outline: none;
  padding: 10px;
	font-size: 1em;
	color: #676767;
	transition: border 0.5s;
	-webkit-transition: border 0.5s;
	-moz-transition: border 0.5s;
	-o-transition: border 0.5s;	
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
`

