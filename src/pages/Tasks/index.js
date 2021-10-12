import React, { useState } from "react";
import {postTask} from './api';
import { TasksList } from "./TasksList";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postTask({task, description, status});
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            {" "}
            Enter a new task:
            <input
              className="input"
              id="task"
              type="task"
              name="task"
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            {" "}
            Description:
            <input
              className="input"
              id="description"
              type="description"
              name="description"
              placeholder="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </p>
        </div>
        <div className="field">
        <p className="control has-icons-left">
          Status:
          <select name="status" id="status" onChange={(e) => {
            setStatus(e.target.value)}}>
            <option value="select" selected disabled>Choose one</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          </select>
        </p>
      </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">Add new task + </button>
          </p>
        </div>
      </form>
      <TasksList/>
    </div>
  );
};

export { Tasks };
