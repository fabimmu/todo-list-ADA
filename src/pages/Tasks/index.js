import React, { useState } from "react";
import {postTask} from './api';
import {Layout} from "../Dashboard/index"
import { TasksList } from "..";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    postTask({task, description, status, startDate, endDate});
  };
  return (
    <Layout>
    <div className="my-6 mx-6 has-background-light">
      <form action="" onSubmit={handleSubmit}>
      <div className="columns m-2">
      <div className="column">
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
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </p>
        </div>
        <div className="field">
        <p className="control has-icons-left">
          Status:
          <div className="select is-normal ml-3">
          <select className="is-hovered" name="status" id="status" onChange={(e) => {
            setStatus(e.target.value)}}>
            <option value="select" selected disabled>Choose one</option>
          <option value="completed">Completed</option>
          <option value="inprogress">In progress</option>
          <option value="postponed">Postponed</option>
          <option value="pending">Pending</option>
          <option value="cancelled">Cancelled</option>
          </select>
          </div>
        </p>
      </div>
        </div>
        <div className="column vcentered">
      <div className="field">
      <p className="control has-icons-left">
        Start Date:
        <input className="input is-normal" type="date" name="startDate" id="startDate" onChange={(e) => {
          setStartDate(e.target.value)}}/>
      </p>
    </div>
    <div className="field">
    <p className="control has-icons-left">
      End Date:
      <input className="input is-normal" type="date" name="endDate" id="endDate" onChange={(e) => {
        setEndDate(e.target.value)}}/>
    </p>
  </div>
</div>
        
        </div>
        <div className="field m-2">
          <p className="control">
            <button className="button is-success m-2">Add new task + </button>
          </p>
        </div>
      </form>
    </div>
    <div className="m-6">
    <TasksList />
    </div>
    
    </Layout>
  );
};

export { Tasks };
