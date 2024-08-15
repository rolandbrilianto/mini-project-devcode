import axios from "axios";
import { baseUrl } from "../endpoint";
import { getAll, create, getOne, remove, update } from "../todoPath";

export const createTodoRequest = (id, priority, title) => {
  let resp = null;
  resp = axios({
    method: "POST",
    url: `${baseUrl()}${create()}`,
    body: {
      title: title,
      activity_group_id: id,
      priority: priority,
    },
  }).then((response) => {
    return response;
  });
  return resp;
};

export const getAllTodoRequest = (id) => {
  let resp = null;
  resp = axios({
    method: "GET",
    url: `${baseUrl()}${getAll(id)}`,
    params: { activity_group_id: id },
  }).then((response) => {
    return response.data;
  });
  return resp;
};

export const getOneTodoRequest = (id) => {
  let resp = null;
  resp = axios({
    method: "GET",
    url: `${baseUrl()}${getOne(id)}`,
  }).then((response) => {
    return response.data;
  });
  return resp;
};

export const deleteTodoRequest = (id) => {
  let resp = null;
  resp = axios({
    method: "DELETE",
    url: `${baseUrl()}${remove(id)}`,
  }).then((response) => {
    return response;
  });
  return resp;
};

export const updateTodoRequest = (id, priority, is_active) => {
  let resp = null;
  resp = axios({
    method: "PATCH",
    url: `${baseUrl()}${update(id)}`,
    body: {
      is_active: is_active,
      priority: priority,
    },
  }).then((response) => {
    return response;
  });
  return resp;
};
