import styled from 'styled-components';

export const PostsWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 20px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 20px 0 0 20px;
  font-weight: 300;
`;
