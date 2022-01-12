import styled from 'styled-components'; 


export const PostsWrapper = styled.div`
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
