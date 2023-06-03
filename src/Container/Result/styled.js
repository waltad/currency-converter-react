import styled from "styled-components";

export const StyledResult = styled.p`
  border: none;
  border-radius: 5px;
  padding: 20px;
  margin: 25px 0;
  background-color: ${({theme}) => theme.resultColor};
  text-align: center;
`;