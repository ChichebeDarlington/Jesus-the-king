export const register = async (req, res) => {
  res.status(200).json({ msg: "registered" });
};

export const login = async (req, res) => {
  res.status(200).json({ msg: "login" });
};

export const userUpdate = async (req, res) => {
  res.status(200).json({ msg: "userUpdate" });
};
