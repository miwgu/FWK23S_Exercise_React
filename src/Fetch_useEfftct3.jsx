import { useState, useEffect } from 'react'
import TodoList from './TodoList'


function Fetch_useEfftct3() {
  // getter = todos, setter = setTodos, initieras som en tom array
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const getData = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => {
          setTodos(data)
        })
    }

    // setTimeout för demo syfte så att vi kan använda ternary operatorn i vår return statement
    setTimeout(() => {
      getData()
    }, 3000)
  }, []) // Körs EN gång när komponenten renderas, tom dependency array

  
  const completeTodo = (todoId, completed) => {
    /* const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    ) */
    if(completed){
    const updatedTodos = todos.filter((todo)=>  todo.id !== todoId);
    // Här SETar vi statet för todos
    setTodos(updatedTodos);
    }else {
      // If not completed, update the completion status of the todo item
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      );
      setTodos(updatedTodos);
    }
  }

  return (
    <>
      {/* Om TODOs arrayen innehåller fler än noll element så ska komponenten TodoList visas, annars fallback text med att det inte är tillgängligt.. eftersom vi gör ett API anrop i vår useEffect hook */}
      {todos.length > 0 ? (
        <TodoList todos={todos} handleCompleteTodo={completeTodo} />
      ) : (
        <div>Todos are not available yet..</div>
      )}
    </>
  )
}

export default Fetch_useEfftct3