import styled from 'styled-components';

export const PostWrapper = styled.div`
  max-width: 550px;
  background-color: ${({ theme }) => theme.colors.mediumGrey};
  padding: 25px;
  border-radius: 20px;
  margin: 20px 20px 20px 50px;
  position: relative;
`;

export const TitlePost = styled.h2`
  margin: 10px 0 5px 0;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const CategoryPost = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  background-color: ${({ theme }) => theme.colors.yellow};
  padding: 2px 5px;
`;

export const ArticlePost = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 7px;
  line-height: 1.3;
`;

export const ButtonPost = styled.button`
  border: none;
  padding: 8px 20px;
  border-radius: 9px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const AuthorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
`;
export const AuthorPost = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-style: italic;
  padding-right: 5px;
`;
export const DataPost = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
`;
