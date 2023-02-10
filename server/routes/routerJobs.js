import express from "express";
const router = express.Router();

import {
  getJobAll,
  deleteJobs,
  showStats,
  jobUpdate,
  createJobs,
} from "../controllers/controllersJob";

router.get("/get-all-jobs", getJobAll);
router.delete("/:id", deleteJobs);
router.patch("/job-update", jobUpdate);
router.get("/stats", showStats);
router.get("/create-jobs", createJobs);

export default router;
