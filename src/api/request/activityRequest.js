import axios from "axios";
import { baseUrl } from "../endpoint";
import { getAll, create, getOne, remove, update } from "../activityPath";

export const getAllActivityRequest = () => {
  let resp = null;
  resp = axios({
    method: "GET",
    url: `${baseUrl()}${getAll()}`,
  }).then((response) => {
    return response;
  });
  return resp;
};

export const getOneActivityRequest = (id) => {
  let resp = null;
  resp = axios({
    method: "GET",
    url: `${baseUrl()}${getOne(id)}`,
  }).then((response) => {
    return response;
  });
  return resp;
};

export const createActivityRequest = () => {
  let resp = null;
  resp = axios({
    method: "POST",
    url: `${baseUrl()}${create()}`,
    body: {
      title: "New Activity",
      email: "rolandbril@gmail.com",
    },
  }).then((response) => {
    return response;
  });
  return resp;
};

export const deleteActivityRequest = (id) => {
  let resp = null;
  resp = axios({
    method: "DELETE",
    url: `${baseUrl()}${remove(id)}`,
  }).then((response) => {
    return response;
  });
  return resp;
};

export const updateActivityRequest = (id, title) => {
  let resp = null;
  resp = axios({
    method: "PATCH",
    url: `${baseUrl()}${update(id)}`,
    body: { title: title },
  }).then((response) => {
    return response;
  });
  return resp;
};
