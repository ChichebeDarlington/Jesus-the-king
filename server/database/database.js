import mongoose from "mongoose";

const dataBase = (url) => {
  return mongoose.connect(url);
};

export default dataBase;
