import React, { useRef, forwardRef, useImperativeHandle } from "react";
import Button from "../Button";
import Input from "../Input";
import "./todoForm.css";

const TodoForm = forwardRef(
  ({ todo, setTodo, addToTodoList, editIndex }, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      focusInput: () => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
    }));

    return (
      <form>
        <Input
          ref={inputRef}
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
  }
);

export default TodoForm;
