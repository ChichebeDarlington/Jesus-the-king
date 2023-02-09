const middlewareNotFound = (req, res) => {
  res.status(404).json("Not existing route");
};

export default middlewareNotFound;
