import styled from "styled-components";

export const Container = styled.main`
  margin-top: 45px;
`;

export const WordHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1{
      font-size: ${({ theme }) => theme.typography.headingL.fontSize};
      font-weight: ${({ theme }) => theme.typography.headingL.fontWeight};
      color: ${({ theme }) => theme.color.color.fontMainColor};
  }
    p{
      color: ${({ theme }) => theme.color.color.main};
      font-size: ${({ theme }) => theme.typography.headingS.fontSize};
  }
}
`;
export const SectionBody = styled.div`
margin-top: 40px;

  ul{
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 13px;
    margin-left: 35px;
    margin-bottom: 64px;

    li{
      font-size: ${({ theme }) => theme.typography.bodyM.fontSize};
      color: ${({ theme }) => theme.color.color.fontMainColor};
      line-height: 24px;
    }
  }

  p{
    font-size: ${({ theme }) => theme.typography.headingS.fontSize};
    font-weight: ${({ theme }) => theme.typography.headingS.fontWeight};
    color: #757575;
  }

  button{
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.color.color.main};
    font-size: ${({ theme }) => theme.typography.headingS.fontSize};
    margin-left:22px ;

    &:hover{
      text-decoration: underline;
      line-height: 24px;
      
    }
  }
`;