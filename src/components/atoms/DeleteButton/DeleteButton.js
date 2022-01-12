import React from 'react';
import styled from 'styled-components';
// import { ReactComponent as DeleteIcon } from './assets/icons/delete-icon.svg';

const DeleteButtonStyled = styled.button`
  background-color: none;
  border: none;
  cursor: pointer;
  padding: 2px 10px;
  border-radius: 5px;
  margin-right: auto;
  position: absolute;
  right: 4%;
  top: 5%;
`;

// const DeleteArticle

export const DeleteButton = (props) => {
  return <DeleteButtonStyled {...props}>x</DeleteButtonStyled>;
};
