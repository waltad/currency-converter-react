import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: 2px solid ${({theme}) => theme.borderColor};
  border-radius: 5px;
  padding: 20px;
  margin: 25px 0;
  background-color: ${({theme}) => theme.formColor};
`;

export const Loading = styled.h2`
  border: 2px solid ${({theme}) => theme.borderColor};
  border-radius: 5px;
  padding: 20px;
  background-color: ${({theme}) => theme.formColor};
  text-align: center;
`;

export const Error = styled(Loading)`
  color: red;
`;

export const InfoAboutRates = styled.p`
  margin: 30px 0 0 0;
  font-family:'Courier New', Courier, monospace;
  font-size: small;
  text-align: center;
`;

export const Legend = styled.legend`
  border: none;
  background-color: ${({theme}) => theme.firstColor};
  color: ${({theme}) => theme.secondColor};
  padding: 10px;
  border-radius: 5px;
`;

export const TextLabel = styled.span`
  width: 100%;
  max-width: 320px;
  display: inline-block;
  margin-right: 10px;
`;

export const Input = styled.input`
  border: 1px solid ${({theme}) => theme.firstColor};
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
  background-color: ${({theme}) => theme.firstColor};
  color: gold;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(140%);
  }
`;