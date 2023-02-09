// Handles error within/inside the existing routes

const errorHandlingMiddleware = (err, req, res, next) => {
  console.log(err);
  return res.status(500).json({ msg: "Error occured,try again later" });
};

export default errorHandlingMiddleware;
