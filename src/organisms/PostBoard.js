import React from 'react';
import styled from 'styled-components'; 
import { Post } from '../molecules/Post';

const PostsWrapper = styled.div`
  max-width: 450px;
  height: auto; 
  display: flex;
  background-color: #dadada;
`


export const PostBoard = () => {
  return (
    <PostsWrapper>
      <Post />
    </PostsWrapper>
  )
}