import express from "express";
const router = express.Router();

import { register, login, userUpdate } from "../controllers/controllerAuth";

router.post("/register", register);
router.post("/login", login);
router.patch("/user-update", userUpdate);

export default router;
