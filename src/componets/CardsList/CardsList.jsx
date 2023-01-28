import Card from "../CardTodo/Card";
import "./cardsList.css";

const CardsList = ({ TodoList }) => {
  return (
    <ul className="todoList-container">
      {TodoList.map((item) => {
        return (
            <div>
            <Card key={item.id} TodoItem={item} />
            <div className="line"></div>
            </div>
        )
      })}
    </ul>
  );
};

export default CardsList;
