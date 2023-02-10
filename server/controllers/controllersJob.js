export const createJobs = async (req, res) => {
  res.status(200).json({ msg: "create jobs" });
};

export const deleteJobs = async (req, res) => {
  res.status(200).json({ msg: "delete jobs" });
};

export const getJobAll = async (req, res) => {
  res.status(200).json({ msg: "get all jobs" });
};

export const jobUpdate = async (req, res) => {
  res.status(200).json({ msg: "update  jobs" });
};
export const showStats = async (req, res) => {
  res.status(200).json({ msg: "show statistics" });
};
