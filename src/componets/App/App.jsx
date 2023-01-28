import { useState } from "react";
import CardsList from "../CardsList/CardsList";
import Form from "../Form/Form";
import "./App.css";

const App = () => {
  const [TodoList, setTodoList] = useState([]);



  return (
    <div className="container">
      <h1>My Todo </h1>
      <Form TodoList={TodoList} setTodoList={setTodoList} />
      <CardsList TodoList={TodoList}  setTodoList={setTodoList}  />
    </div>
  );
};

export default App;
