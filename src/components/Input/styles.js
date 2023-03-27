import styled from "styled-components";

export const SearchArea = styled.div`
  position:relative;
  padding:0;
  margin:0;

  img{
    position:absolute;
    bottom:24px;
    right: 45px;
    
  }
    `;



export const InputBox = styled.input`
  width: 100%;
  max-width: 736px;
  margin-top: 50px;
  height: 64px;
  padding-left: 40px;
  background: url(searchIcon) no-repeat scroll 7px 7px;
  cursor: pointer;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.color.color.background};
  background-color: ${({ theme }) => theme.color.color.inputBackground};
  transition: border-color 0.2s ease-in;
  outline: none;
  font-size: ${({ theme }) => theme.typography.headingS.fontSize};  
  line-height: ${({ theme }) => theme.typography.headingS.lineHeight};  
  color: ${({ theme }) => theme.color.color.fontMainColor};

  font-weight: 700;

  
    
  &:focus{
    border: 1px solid ${({ theme }) => theme.color.color.main};
  }
  

    
`;