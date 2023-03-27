import styled from "styled-components";


export const HeaderContainer = styled.header`
  margin-top: 58px;
`;



export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  button{
    border: none;
    background: ${({ theme }) => theme.color.color.background};
    font-size: ${({ theme }) => theme.typography.bodyM.fontSize};
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 16px;   
    color: ${({ theme }) => theme.color.color.fontMainColor};

  }
`;

export const Menu = styled.menu`
  display: flex;
  align-items: center;  
  `;

export const TypographyItems = styled.div`  
  display: flex;
  align-items: center;
  border-radius: 16px;   

`;

export const MenuButtons = styled.menu`
  display: flex;
  border-left: 1px solid #e9e9e9;
  
`;

