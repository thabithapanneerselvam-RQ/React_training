import TodoList from "../components/Todo";
import Counter from "../components/Counter";
import FetchAPI from "../components/FetchAPI";
import ListUsers from "../components/ListUsers";
import Forms from "../components/Forms";

function Home() {
  return (
    <>
      <h1 className="home-page">Home Page</h1>
      <TodoList />
      <Counter />
      <FetchAPI />
      <ListUsers />
      <Forms />
    </>
  );
}

export default Home;
