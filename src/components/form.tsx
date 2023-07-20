import { ChangeEvent, useState } from "react";

import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

import { useDispatch } from "react-redux";

import {
  ITodo,
  addTodo,
  updateTodo,
  deleteTodo,
  toggleComplete,
} from "../redux/todoSlice";

const Form = () => {
  const dispatch = useDispatch();

  const todo = useSelector((state: RootState) => state.todo.todos);

  const [input, setInput] = useState("");

  const [editedId, setEditedId] = useState<number | null>(null);

  //inputhandler function

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  //addnewtask function

  const addTask = () => {
    dispatch(addTodo(input));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (editedId) {
      dispatch(
        updateTodo({
          id: editedId,

          title: input,
        })
      );

      setEditedId(null);
    } else {
      addTask();

      setInput("");
    }
  };
  //edit task
  const handleEdit = (todo: ITodo) => {
    setInput(todo.title);

    setEditedId(todo.id);
  };
  //delete task
  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };
  //toggle
  const handleToogle = (id: number) => {
    dispatch(toggleComplete(id));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-96 border-2 mx-auto ">
        <input
          type="text"
          placeholder="Add newTask....."
          onChange={handleInput}
          value={input}
        ></input>

        <button type="submit">Add</button>
      </form>

      <div className="flex flex-col justify-center items-center">
        {todo.map((item: ITodo) => (
          <div key={item.id} className="flex justify-around w-96">
            <ul className="flex list-none ">
              <li>{item.title}</li>

              <li>{item.completed}</li>
            </ul>
            <input
              type="checkbox"
              onChange={() => handleToogle(item.id)}
              checked={item.completed}
            ></input>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
