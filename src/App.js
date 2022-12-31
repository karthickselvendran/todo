import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addToTodoList = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      toast.error("Todo should not be empty");
      return;
    }
    if (editIndex === "") {
      setTodoList((prevData) => [...prevData, todo.trim()]);
      toast.success("Todo added to list");
    } else {
      let temp = [...todoList];
      temp.splice(editIndex, 1, todo.trim());
      setTodoList(temp);
      setEditIndex("");
      toast.success("Todo updated to list");
    }
    setTodo("");
  };

  const editBmiDetails = (editIndex, editValue) => {
    setEditIndex(editIndex);
    setTodo(editValue);
  };

  const deleteBmiDetails = (deleteIndex) => {
    let temp = [...todoList];
    temp.splice(deleteIndex, 1);
    setTodoList(temp);
  };

  console.log("todo  :: ", todo);
  console.log("todoList  :: ", todoList);

  return (
    <div>
      <ToastContainer autoClose={2000} />
      <Header title="Todo App" />
      <div className="container">
        <p>
          To-do lists offer a way to increase productivity, you able to remember
          all things, helps prioritise tasks, manage tasks effectively, use time
          wisely and improve time management as well as workflow.
        </p>
        <div className="addContactCard">
          <TodoForm
            todo={todo}
            setTodo={setTodo}
            addToTodoList={addToTodoList}
            todoList={todoList}
            editIndex={editIndex}
          />
          <TodoList
            todoList={todoList}
            deleteBmiDetails={deleteBmiDetails}
            editBmiDetails={editBmiDetails}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
