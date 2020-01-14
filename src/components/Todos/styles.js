import styled from 'styled-components';

import { Form, Input } from '@rocketseat/unform';
// import colors from '../../styles/colors';

export const Section = styled.section`
  width: 800px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 4px;
  margin-top: 90px;
`;

export const FormInput = styled(Form)`
  width: 100%;
  display: flex;
`;

export const TodoInput = styled(Input)`
  width: 700px;
  height: 40px;
  font-size: 18px;
  padding: 8px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 5px;
`;

export const ButtonTodo = styled.button`
  background-color: white;
  padding-top: 2px;
  margin-left: 5px;
  border: 0;
  display: inline-block;
  img {
    width: 30px;
    cursor: pointer;
    &:active {
      width: 28px;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ItemList = styled.li`
  line-height: 50px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonList = styled.button`
  border: 0;
  background: #fff;
  margin-top: 15px;
  margin-left: 10px;
  img {
    width: 30px;
    cursor: pointer;
  }
  &:active {
    transform: translateY(2px);
  }
`;
