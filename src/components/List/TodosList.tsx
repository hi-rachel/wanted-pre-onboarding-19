import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import {
  changeInput,
  insert,
  toggle,
  remove,
} from '../../store/todos/todosSlice';
import Todos from './Todos';

function TodosList() {
  const { input, todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onChangeInput = (input: string) => dispatch(changeInput(input));
  const onInsert = (text: string) => dispatch(insert(text));
  const onToggle = (id: number) => dispatch(toggle(id));
  const onRemove = (id: number) => dispatch(remove(id));

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
}

export default TodosList;
