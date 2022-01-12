import React from 'react';
import { PostWrapper, TitlePost, CategoryPost, ArticlePost, AuthorWrapper, AuthorPost, DataPost, ButtonPost } from './Post.styles';
import { DeleteButton } from '../atoms/DeleteButton/DeleteButton';

export const Post = ({ DeleteArticle, articleData: { title, category, content, author, publishData } }) => {
  return (
    <PostWrapper>
      <DeleteButton onClick={() => DeleteArticle(title)} />
      <TitlePost>{title}</TitlePost>
      <CategoryPost>{category}</CategoryPost>
      <ArticlePost>{content}</ArticlePost>
      <AuthorWrapper>
        <AuthorPost>{author}</AuthorPost>
        <DataPost>{publishData}</DataPost>
      </AuthorWrapper>
      <ButtonPost>Read more</ButtonPost>
    </PostWrapper>
  );
};
