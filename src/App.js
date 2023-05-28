import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./components/TodoForm";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const inputRef = useRef();
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const storedTodoList = localStorage.getItem("todoList");
    if (storedTodoList) {
      setTodoList(JSON.parse(storedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

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

  const editTodoItem = (editIndex, editValue) => {
    setEditIndex(editIndex);
    setTodo(editValue);
    inputRef.current.focusInput();
  };

  const deleteTodoItem = (deleteIndex) => {
    //  Method 1 - optimized way
    setTodoList((prevTodoList) =>
      prevTodoList.filter((_, i) => i !== deleteIndex)
    );
    // Method 2
    // let temp = [...todoList];
    // temp.splice(deleteIndex, 1);
    // setTodoList(temp);
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
            ref={inputRef}
            todo={todo}
            setTodo={setTodo}
            addToTodoList={addToTodoList}
            todoList={todoList}
            editIndex={editIndex}
          />
          <TodoList
            todoList={todoList}
            deleteTodoItem={deleteTodoItem}
            editTodoItem={editTodoItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
