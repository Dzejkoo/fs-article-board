import React from "react";
import styled from 'styled-components'

const PostWrapper = styled.div``

const TitlePost = styled.h2``

const CategoryPost = styled.span``

const ArticlePost = styled.p``

const ButtonPost = styled.button``

export const Post = () => {
  
  return (
    <PostWrapper>
      <TitlePost>Lorem Ipsum</TitlePost>
      <CategoryPost>Tech News</CategoryPost>
      <ArticlePost>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar, justo sed vulputate hendrerit, lacus augue molestie felis, et condimentum ligula diam vitae quam. Suspendisse sodales purus ac bibendum tempus. Vestibulum quis hendrerit massa. Vestibulum ultricies tortor nisi</ArticlePost>
      <ButtonPost>Read more</ButtonPost>
    </PostWrapper>
    
  )
}