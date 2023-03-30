import React from 'react';
import headerLogo from '../../assets/images/icon/icon_book.svg'
import moonIcon from '../../assets/images/icon/icon_half_moon.svg'
import { Container, Menu, MenuButtons, TypographyItems, Input, SearchArea, HeaderContainer } from './styles';
import TypoSwitcher from './TypoSwitcher';

const Header = ({ handleTypography, handleTheme, themeImg }) => {



  return (
    <HeaderContainer>
      <Container>
        <div>
          <img src={headerLogo} alt="" />
        </div>
        <Menu>
          <TypographyItems>
            <TypoSwitcher handleTypography={handleTypography} />
          </TypographyItems>
          <MenuButtons>
            <button onClick={handleTheme}><img src={themeImg} alt="" /></button>
            <button><img src={moonIcon} alt="" /></button>
          </MenuButtons>
        </Menu>

      </Container>

    </HeaderContainer>

  )
}

export default Header;
