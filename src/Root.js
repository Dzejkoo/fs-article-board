import { createGlobalStyle } from 'styled-components';
import { PostBoard } from './components/organisms/PostBoard';
import { theme } from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import ArticleProvider from './Providers/ArticleProvider';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Poppins:wght@300;400;600&display=swap');

  body{
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <ArticleProvider>
        <GlobalStyle />
        <PostBoard />
      </ArticleProvider>
    </ThemeProvider>
  );
};

export default Root;
