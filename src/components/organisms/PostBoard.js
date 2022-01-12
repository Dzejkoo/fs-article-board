import React, {useEffect, useState} from 'react';
import { PostsWrapper} from './PostBoard.styles'
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