import express from "express";
import { createUser, deleteUser, getUser, getUserById, updateUser } from "../controllers/user.js";

const route = express.Router();

route.get("/user", getUser);
route.get("/user:id", getUserById);
route.post("/user", createUser);
route.get("/user:id", updateUser);
route.get("/user:id", deleteUser);

export default route;