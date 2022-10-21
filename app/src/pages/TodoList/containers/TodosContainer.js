import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";

import { todosSelector } from "../selectors";
import TodoReadMode from "../components/TodoReadMode";
import TodoEditMode from "../components/TodoEditMode/index";
import { COMPLETE_TODO, CREATE_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions";


const TodoListContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(todosSelector);

  const [form, handleFormChange, handleFormReset] = useForm({ todoText: '' });


  const handleTodoCreate = useCallback((event) => {
    event.preventDefault(); 

    const trimmedValue = form.todoText.trim();
    if (trimmedValue.length > 3) {
        dispatch(CREATE_TODO(form.todoText))
    }
    handleFormReset(); 

  }, [form.todoText]);

  const handleTodoModeToggle = useCallback((id) => {
      dispatch(TOGGLE_TODO(id));
    },[]);

  const handleSave = useCallback(
    ({ id, updateText }) => {
      if (updateText.trim().length > 3) {
        dispatch(EDIT_TODO({ id, updateText }));
      }
    },
    []
  );

  const handleComplete = useCallback(
    (id) => {
      dispatch(COMPLETE_TODO(id));
    },
    []
  );

  const handleRemove = useCallback(
    (id) => {
      dispatch(REMOVE_TODO(id));
    },
    []
  );

  return (
    <>
    <h1>Todo List</h1>
      <form onSubmit={handleTodoCreate}>
        <input
          value={form.todoText}
          onChange={handleFormChange}
          name="todoText"
        />
        <button role='submit'>Create Todo</button>
      </form>

      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.isEditMode ? (
              <TodoEditMode
                id={todo.id}
                text={todo.text}
                handleDiscard={handleTodoModeToggle}
                handleSave={handleSave}
              />
            ) : (
              <TodoReadMode
                id={todo.id}
                text={todo.text}
                handleEdit={handleTodoModeToggle}
                isCompleted={todo.isCompleted}
                handleComplete={handleComplete}
                handleRemove={handleRemove}
              />
            )}
          </li>
        ))}
      </ol>
    </>
  );
};

export default TodoListContainer;
