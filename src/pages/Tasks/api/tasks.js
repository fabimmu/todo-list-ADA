import {api} from '../../../utils/axios'

const mapToArray = (object) => {
  const tasksList = [];

  for (const elem in object) {
    tasksList.push({
      id: elem,
      ...object[elem],
    });
  }

  return tasksList;
};

const getTasks = async ()  => {
  const response = await api.get("/tasks.json");
  return mapToArray(response.data);
};

export { getTasks };