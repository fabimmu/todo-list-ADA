import { getTasks } from "./api/tasks";
import { useState } from "react";
import {Layout} from "../Dashboard/index"


const TasksList = () => {
  const [tasks, setTask] = useState([]);

  const obtenerTasks = async () => {
    const response = await getTasks();
    setTask(response);
  };

  if (!tasks.length) {
    obtenerTasks();
  }

  return (
    <div>
      {tasks?.map((task) => {
        return (
              <div className="box">
                <p className="title">
                  {task.task}{" "}
                  <span className="tag is-warning">{task.status}</span>
                </p>
                <p className="subtitle">{task.description}</p>
              </div>
              
          
        );
      })}
    </div>
  );
};

export { TasksList };
