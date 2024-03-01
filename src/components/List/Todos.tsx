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
  margin-top: 10px;
`;

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly={true}
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>Delete</button>
    </div>
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
    onInsert(input);
    onChangeInput('');
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChangeInput(e.target.value);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
      <TodosBox>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </TodosBox>
    </div>
  );
};

export default Todos;
