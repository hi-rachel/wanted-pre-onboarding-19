import React from 'react';
import styled from 'styled-components';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodosBox = styled.div`
  min-width: 320px;
  width: 500px;
`;

const TodoItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  margin-top: 10px;
  border: solid gray 1px;
  border-radius: 8px;
`;

const TodoInput = styled.input`
  padding: 10px 20px;
  border: solid gray 1px;
  border-radius: 6px;
  width: 72%;
`;

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <TodoItemBox>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
        style={{ marginRight: '10px' }}
      />
      <span
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          overflow: 'hidden',
          wordBreak: 'break-all',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </TodoItemBox>
  );
};

interface TodosProps {
  input: string;
  todos: Todo[];
  onChangeInput: (input: string) => void;
  onInsert: (text: string) => void;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

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
