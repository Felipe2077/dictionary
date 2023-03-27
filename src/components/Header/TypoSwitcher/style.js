import styled from "styled-components";
import arrowLight from '../../../assets/images/icon/arrow_light.png'

export const Container = styled.div`
margin-right: 20px;

  select{
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  cursor: inherit;
  line-height: inherit;
  outline: none;
  padding: 10px 20px;
  font-size: ${({ theme }) => theme.typography.bodyM.fontSize};
   color: ${({ theme }) => theme.color.color.fontMainColor};
   background: url(${arrowLight}) no-repeat right;
  border-radius: 5px;
  }
  *
{
 
  color: black;

}



  
`;