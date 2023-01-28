import "./card.css";

const Card = ({ TodoItem, setTodoList , TodoList}) => {
  const deleteBtn = (id) => {
    const filteredTodoList = TodoList.filter((item) => {
      return item.id !== id;
    });
    setTodoList(filteredTodoList);
  };

  const doneBtn = (id) => {
    const doneTodo = TodoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: true,
        };
      } else {
        return item;
      }
    });

    setTodoList(doneTodo);
  };

  const underdoneBtn = (id) => {
    const underdoneTodo = TodoList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          done: false,
        };
      } else {
        return item;
      }
    });

    setTodoList(underdoneTodo)
  };

  return (
    <li className="cardTodo-container">
      <div className="todo-content">
        <h2
          style={{
            textDecorationLine: TodoItem.done ? " line-through" : "none",
          }}
        >
          {TodoItem.title}
        </h2>
        <p style={{ color: TodoItem.done ? "#737474" : "#fff" }}>
          {" "}
          {TodoItem.describe}{" "}
        </p>
      </div>
      <div className="card-btn">
        <button className="btn-action" onClick={() => deleteBtn(TodoItem.id)}>
          Delete
        </button>
        <button className="btn-action">Edite</button>
        {TodoItem.done ? (
          <button
            className="btn-action"
            onClick={() => underdoneBtn(TodoItem.id)}
          >
            underdone
          </button>
        ) : (
          <button className="btn-action" onClick={() => doneBtn(TodoItem.id)}>
            Done
          </button>
        )}
      </div>
    </li>
  );
};

export default Card;
