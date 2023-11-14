
export const formatDate = (date) => {

  return date.toLocaleDateString().split('.').join('/')
};
