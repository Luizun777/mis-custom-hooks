import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem('todos') || [])
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleNewTodo = (payload) => {
    dispatch({
      type: '[TODO] Add Todo',
      payload
    })
  }

  const handleRemoveTodo = (payload) => {
    console.log(payload);
    dispatch({
      type: '[TODO] Remove Todo',
      payload
    })
  }

  const handleToggleTodo = (payload) => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload
    })
  }

  return {
    todos,
    todosCount: todos.length,
    pendeingTodosCount: todos.filter(todo => !todo.done).length,
    dispatch,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  }
}
