import styled from 'styled-components';

export const PostsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 20px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
`;
