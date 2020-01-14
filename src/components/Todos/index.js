import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { Creators as TodoActions } from '../../store/ducks/todos';

import ToggleImg from '../../assets/img/toggle.png';
import RemoveImg from '../../assets/img/remove.png';
import AddImg from '../../assets/img/add.png';

import {
  Section,
  FormInput,
  TodoInput,
  ButtonTodo,
  List,
  ItemList,
  ButtonList,
} from './styles';

const schema = Yup.object().shape({
  todo: Yup.string()
    .max(65, 'Max 65 characteres')
    .required('Fill in the field'),
});

const Todos = () => {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleSubmit() {
    setInput('');
    dispatch(TodoActions.add(input));
  }

  function handleToggle(id) {
    dispatch(TodoActions.toggle(id));
  }

  function handleRemove(id) {
    dispatch(TodoActions.remove(id));
  }

  return (
    <Section>
      <FormInput schema={schema} onSubmit={handleSubmit}>
        <TodoInput
          type="text"
          name="todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <ButtonTodo type="submit">
          <img src={AddImg} alt="Add" />
        </ButtonTodo>
      </FormInput>

      <List>
        {todos.map((todo) => (
          <ItemList key={todo.id}>
            {todo.complete ? <s>{todo.text}</s> : todo.text}
            <div>
              <ButtonList type="button" onClick={() => handleToggle(todo.id)}>
                <img src={ToggleImg} alt="Toggle" />
              </ButtonList>
              <ButtonList type="button" onClick={() => handleRemove(todo.id)}>
                <img src={RemoveImg} alt="Remove" />
              </ButtonList>
            </div>
          </ItemList>
        ))}
      </List>
    </Section>
  );
};

export default Todos;
