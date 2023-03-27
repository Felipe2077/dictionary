import styled from "styled-components";

export const Section = styled.div`
   margin-top: 40px;
    font-style: italic;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.color.fontMainColor};


  div{
    width: 656px;
    height: 1px;
    background-color: #e9e9e9;
    margin-left: 20px;
  }

`;