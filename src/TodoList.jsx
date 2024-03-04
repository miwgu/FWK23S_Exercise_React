import { useState } from "react"


const TodoList = ({ todos, handleCompleteTodo }) => {
 /*  const [text, setText] = useState(false);
  // First you can see all list after that check "This is completed" If This is completed Buttons text should be "Delete" Otherwise "Complete" 
  const hideText =()=>setText(!text);//false
  

  const toggleComplete = (todoId, completed) => {
    
    handleCompleteTodo(todoId); // Call the handleCompleteTodo function to toggle completion status
    if(completed){
    hideText(); // Hide the text when completing a todo
    }
  };
 */

  return (
    <>
    <ul>
      {todos.map((todo, i) => (
        <>
         <li key={i}>
            <strong>Id:</strong> {todo.id}
          </li>
          <li key={i}>
            <strong>Titel:</strong> {todo.title}
          </li>
          <li key={i}>
            <strong>UserId:</strong> {todo.userId}
          </li>
          <li key={i}>
            {todo.completed ? (
              <span style={{ color: 'green' }}>This is completed</span>
            ) : (
              <span style={{ color: 'red' }}>This is not completed</span>
            )}
            <br />
            {/* I event handlern så skapar vi en anonym funktion, för att hålla koden fri från funktioner utanför return statementet, som körs när användaren klickar på knappen */}
            {/* Den i sin tur tar emot handleCompleteTodo funktionen från destructad props och bidrar med NUVARANDE todo's ID (i denna komponent loopar vi igenom arrayen av todos) */}
            <button onClick={() => handleCompleteTodo(todo.id, todo.completed)}>
            {todo.completed ? "Delete" : "Complete"}
            </button>
          </li>
          <hr />
        </>
      ))}
    </ul>
  
    </>
  )
}
export default TodoList