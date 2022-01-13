import React, { useContext } from 'react';
import { PostsWrapper, Title } from './PostBoard.styles';
import { Post } from '../molecules/Post';
import { ArticleContext } from '../../Providers/ArticleProvider';

export const PostBoard = () => {
  const { article, DeleteArticle, isLoading } = useContext(ArticleContext);

  return (
    <PostsWrapper>
      <Title>{isLoading ? 'Loading...' : `Articles:`}</Title>
      {article.map((articleData) => (
        <Post isLoading={isLoading} articleData={articleData} DeleteArticle={DeleteArticle} />
      ))}
    </PostsWrapper>
  );
};
