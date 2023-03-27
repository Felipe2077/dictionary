import styled from "styled-components";

export const Container = styled.main`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.color.color.fontMainColor};
  
  img{
    width: 64px;
    margin-bottom: 44px;
  }

  h3{
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.typography.headingS.fontSize};
    font-weight: 700;
  }
  p{
    font-size: ${({ theme }) => theme.typography.bodyM.fontSize};
    color: ${({ theme }) => theme.color.color.errorColor};
    color: #757575;

  }
`;