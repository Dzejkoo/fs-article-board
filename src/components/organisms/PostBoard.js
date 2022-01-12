import React, { useContext } from 'react';
import { PostsWrapper } from './PostBoard.styles';
import { Post } from '../molecules/Post';
import { ArticleContext } from '../../Providers/ArticleProvider';

export const PostBoard = () => {
  const { article, DeleteArticle } = useContext(ArticleContext);

  return (
    <PostsWrapper>
      {article.map((articleData) => (
        <Post articleData={articleData} DeleteArticle={DeleteArticle} />
      ))}
    </PostsWrapper>
  );
};
