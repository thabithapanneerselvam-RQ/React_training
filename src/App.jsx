import './App.css'
import TodoList from "../src/components/Todo"
import Counter from "../src/components/Counter"
import FetchAPI from "../src/components/FetchAPI"
import ListUsers from "../src/components/ListUsers"

function App() {

  return (
    <>
      <TodoList />
      <Counter />
      <FetchAPI />
      <ListUsers />
    </>
  )
}

export default App
