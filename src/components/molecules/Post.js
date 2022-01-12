import React from "react";
import { PostWrapper, TitlePost, CategoryPost, ArticlePost, AuthorWrapper, AuthorPost, DataPost, ButtonPost} from './Post.styles'



export const Post = ({ articleData: { title, category, content, author, publishData}} ) => {
  
  return (
    <PostWrapper>
      <TitlePost>{ title }</TitlePost>
      <CategoryPost>{category}</CategoryPost>
      <ArticlePost>{content }</ArticlePost>
      <AuthorWrapper>
        <AuthorPost>{author}</AuthorPost>
        <DataPost>{publishData}</DataPost>
      </AuthorWrapper>
      <ButtonPost>Read more</ButtonPost>
    </PostWrapper>
  )
}