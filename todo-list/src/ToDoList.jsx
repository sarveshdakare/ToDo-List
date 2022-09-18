import react from "react";
import App from "./App";
const ToDoList = (props) => {
  const deleteItems = () => {};

  return (
    <>
      <div className="todo_list">
        <i className="fa fa-times" aria-hidden="true" onClick={deleteItems} />
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
