const generateUniqueId = () => {
  return Date.now() + Math.random();
};

export default generateUniqueId;
