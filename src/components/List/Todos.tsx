import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodosProps {
  input: string;
  todos: Todo[];
  onChangeInput: (input: string) => void;
  onInsert: (text: string) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodosBox = styled.div`
  min-width: 320px;
  width: 500px;
`;

const TodoInput = styled.input`
  padding: 10px 20px;
  border: solid gray 1px;
  border-radius: 6px;
  width: 72%;
`;

const Todos: React.FC<TodosProps> = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === '') {
      alert('Please enter your task.');
      return;
    }
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeInput(e.target.value);
  return (
    <TodosBox>
      <form onSubmit={onSubmit}>
        <TodoInput value={input} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
      <>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </>
    </TodosBox>
  );
};

export default Todos;
