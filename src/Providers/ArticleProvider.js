import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const ArticleContext = React.createContext({
  DeleteArticle: () => { },
  article: [],
});

const API_TOKEN = 'fded6f48870ebe73d8cc4fe490a14c';

const query = `
      {
        allArticles{
          title
          category
          content
          author
          publishData
        }
      }
`;

const ArticleProvider = ({ children }) => {
  const [article, setArticle] = useState([]);
  const [isLoading, setLoading] = useState([]);

  useEffect(() => {
    axios
      .post('https://graphql.datocms.com/', { query: query }, { headers: { authorization: `Bearer ${API_TOKEN}` } })
      .then(({ data: { data } }) => {
        setLoading(false);
        setArticle(data.allArticles);
      })
      .catch((err) => console.log(err));
  }, []);

  const DeleteArticle = (title) => {
    const filtredArticle = article.filter((article) => article.title !== title);
    setArticle(filtredArticle);
  };

  return <ArticleContext.Provider value={{ DeleteArticle, article, isLoading }}>{children}</ArticleContext.Provider>;
};

export default ArticleProvider;
