import { PostBoard } from './components/organisms/PostBoard';
import { theme } from './assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import ArticleProvider from './Providers/ArticleProvider';
import { GlobalStyle } from './assets/styles/globalStyle';


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
