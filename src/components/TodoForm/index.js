import React from "react";
import Button from "../Button";
import Input from "../Input";
import "./bmiCard.css";

const TodoForm = ({
  todo = {},
  setTodo = {},
  addToTodoList = {},
  editIndex = "",
}) => {
  return (
    <form>
      <Input
        id="todo"
        placeholder="todo..."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        autoFocus={true}
      />
      <div className="controlsRow">
        <Button
          name={editIndex === "" ? "Add" : "Update"}
          onClick={(e) => addToTodoList(e)}
        />
      </div>
    </form>
  );
};
export default TodoForm;
