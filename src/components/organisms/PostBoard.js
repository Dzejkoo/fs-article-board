import React, {useEffect, useState} from 'react';
import styled from 'styled-components'; 
import { Post } from '../molecules/Post';
import axios from 'axios';

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
`

const PostsWrapper = styled.div`
  max-width: 450px;
  height: auto; 
  display: flex;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 20px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  padding: 30px 40px;
  display: flex;
  flex-direction: column; 
`


export const PostBoard = () => {

  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios.post('https://graphql.datocms.com/', { query: query }, { headers: { authorization: `Bearer ${API_TOKEN}` } })
      .then(({ data: { data } }) => setArticle(data.allArticles))
      .catch(err =>console.log(err))
  }, [])

  return (
    <PostsWrapper>
      {article.map((articleData) => (
        <Post articleData={articleData} />
      ))}
    </PostsWrapper>
  )
}