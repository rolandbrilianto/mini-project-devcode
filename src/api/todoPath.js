let mainPath = "/todo-items";

export const getAll = (id) => {
  return `${mainPath}?activity_group_id=${id}`;
};

export const getOne = (id) => {
  return `${mainPath}/${id}`;
};

export const create = () => {
  return `${mainPath}`;
};

export const remove = (id) => {
  return `${mainPath}/${id}`;
};

export const update = (id) => {
  return `${mainPath}/${id}`;
};
