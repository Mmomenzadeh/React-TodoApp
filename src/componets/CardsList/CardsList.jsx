import Card from "../CardTodo/Card";
import "./cardsList.css";

const CardsList = ({ TodoList ,setTodoList }) => {
  return (
    <ul className="todoList-container">
      {TodoList.map((item) => {
       
        return (
            <ul key={item.id}>
            <Card  TodoItem={item} setTodoList={setTodoList} TodoList={TodoList} />
            <div className="line"></div>
            </ul>
        )
      })}
    </ul>
  );
};

export default CardsList;
