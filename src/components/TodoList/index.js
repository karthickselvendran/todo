import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import "./todoList.css";

const TodoList = ({
  todoList = [],
  deleteTodoItem = {},
  editTodoItem = {},
}) => {
  return (
    <div className="list">
      {todoList?.length ? <span className="listTitle">Todolist</span> : null}
      {todoList?.length
        ? todoList.map((data, i) => {
            return (
              <div className="todoRow">
                <div className="todoItemRow mr5">{`${i + 1}.`}</div>
                <div className="todoItem">{`${data}`}</div>
                <div className="controls">
                  <BiEdit
                    className="btn"
                    onClick={() => editTodoItem(i, data)}
                  />
                  <AiFillDelete
                    className="btn"
                    onClick={() => deleteTodoItem(i)}
                  />
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default TodoList;
