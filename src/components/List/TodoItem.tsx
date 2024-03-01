import React from 'react';
import styled from 'styled-components';
import { Todo } from './Todos';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

const TodoItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: center;
  margin-top: 10px;
  border: solid gray 1px;
  border-radius: 8px;
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

export default TodoItem;
