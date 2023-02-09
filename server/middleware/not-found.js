// Handles error when the routes does not exist

const middlewareNotFound = (req, res) => {
  res.status(404).json("Not existing route");
};

export default middlewareNotFound;
