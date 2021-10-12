import { api } from "../utils";

const mapToArray = (object) => {
  const array = [];

  for (const elem in object) {
    array.push({
      id: elem,
      ...object[elem],
    });
  }

  return array;
};

const getUsers = async ()  => {
  const response = await api.get("/users.json");
  return mapToArray(response.data);
};

export { getUsers };