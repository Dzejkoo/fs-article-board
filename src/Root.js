import { createGlobalStyle } from 'styled-components';
import { PostBoard } from './components/organisms/PostBoard';
import { theme } from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@300;400;600&display=swap');

  body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PostBoard />
    </ThemeProvider>
  )
}

export default Root