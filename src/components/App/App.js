import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../../assets/styles/Global';
import dark from '../../assets/styles/theme/Colors/dark';
import light from '../../assets/styles/theme/Colors/light';
import typography from '../../assets/styles/theme/typography/typography';
import Header from '../Header';
import WordArea from '../WordArea';
import { Container } from './styles';
import lightButton from '../../assets/images/icon/light_button.svg'
import darkButton from '../../assets/images/icon/dark_button.svg'
import InputBox from '../Input/Input'
import Error from '../Error';

function App() {
  const [word, setWord] = React.useState(false);
  const [themeImg, setThemeImg] = React.useState(lightButton);
  const [colorTheme, setColorTheme] = useState({ color: light });
  const [isDark, setIsDark] = React.useState(true);
  const [typographyTheme, setTypography] = useState('Inter');
  const [input, setInput] = React.useState('house');
  const [audio, setAudio] = React.useState(undefined);
  const theme = { fontFamily: typographyTheme, typography: typography, color: colorTheme };

  React.useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`).then((response) => response.json()).then((json) => json.title === undefined ? setWord(json) : setWord(null));
  }, [input]);

  React.useEffect(() => {
    setAudio(word ? word[0].phonetics[0].audio : undefined);
  }, [word]);

  function handleCLick() {
    setIsDark(!isDark)
    if (isDark) {
      setColorTheme({ color: dark });
      setThemeImg(darkButton)
      console.log(theme);
    } else {
      setColorTheme({ color: light });
      console.log(theme);
      setThemeImg(lightButton)

    }
  }

  function handleTypography(fontFamily) {
    setTypography(fontFamily)
  }

  function handleInput(event) {
    if (event.target.value === '') {
      setInput('test')
    } else {
      setTimeout(() => {
        setInput(event.target.value);

      }, 1000)
    }
  }

  console.log(audio);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header handleTypography={handleTypography} handleTheme={handleCLick} themeImg={themeImg} />
          <InputBox handleInput={handleInput} />
          {word === null ? <Error /> : <WordArea word={word} audio={audio} />}

        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
