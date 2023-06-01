import styled from "styled-components";

export const StyledForm = styled.form``;

export const Fieldset = styled.fieldset`
  border: 2px solid grey;
  border-radius: 5px;
  padding: 20px;
  margin: 25px 0;
  background-color: hsl(51, 100%, 80%);
`;

export const Legend = styled.legend`
  border: none;
  background-color: royalblue;
  color: gold;
  padding: 10px;
  border-radius: 5px;
`;

export const Label = styled.label``;

export const TextLabel = styled.span`
  width: 100%;
  max-width: 320px;
  display: inline-block;
  margin-right: 10px;
`;

export const Input = styled.input`
  border: 1px solid royalblue;
  padding: 10px;
  width: 100%;
  max-width: 150px;
  border-radius: 5px;

  &:invalid {
    background-color: hsl(0, 53%, 70%);
  }
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  background-color: royalblue;
  color: gold;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
  background-color: hsl(225, 73%, 65%);
  }

  &:active {
  background-color: hsl(225, 73%, 70%);
  }
`;