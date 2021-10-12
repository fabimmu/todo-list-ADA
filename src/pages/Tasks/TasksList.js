import {getTasks} from './api/tasks';
import { useState } from "react";

const TasksList = () => {
  const [tasks, setTask] = useState([]);

  const obtenerTasks = async () => {
    const response = await getTasks();
    setTask(response);
    console.log(tasks);
  };

  if (!tasks.length) {
    obtenerTasks();
  }

  console.log(tasks);

  return (
    <div className="box is-info mt-4">
          {tasks?.map((task) => {
            return (
                <div>
                <p>{task.task}</p>
                <p>{task.description}</p>
                <p>{task.status}</p>
             </div>
            );
          })}
      
    </div>
  );
};

export { TasksList };