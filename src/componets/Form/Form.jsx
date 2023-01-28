import React, { useState } from "react";
import "./form.css";
import { v4 as uuidv4 } from "uuid";

const Form = ({ TodoList, setTodoList }) => {
  const initialFormValue = {
    title: "",
    describe: "",
    id: "",
    done: false,
  };
  const [formValue, setFormValue] = useState(initialFormValue);

  const CreateTodoHandler = (e) => {
    e.preventDefault();
    let newTodo = {
      title: formValue.title,
      describe: formValue.describe,
      id: uuidv4(),
      done: false,
    };
    setTodoList([...TodoList, newTodo]);
  };

  return (
    <form className="form-container" onSubmit={CreateTodoHandler}>
      <div className="input-container">
        <div className="input-form">
          <label> Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) =>
              setFormValue({ ...formValue, title: e.target.value })
            }
          />
        </div>
        <div className="input-form">
          <label>Describe</label>
          <input
            type="text"
            placeholder="Describe"
            onChange={(e) =>
              setFormValue({ ...formValue, describe: e.target.value })
            }
          />
        </div>
      </div>
      <button className="btn-form">Submit</button>
    </form>
  );
};

export default Form;
