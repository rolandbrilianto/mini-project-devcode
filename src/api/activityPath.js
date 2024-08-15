let mainPath = "/activity-groups";

export const getAll = () => {
  return mainPath;
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
