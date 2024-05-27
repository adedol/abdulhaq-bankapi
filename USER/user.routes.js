import { Router } from "express";
import { signup } from "./user.controller.js";
import { signin } from "./user.controller.js";

export const userRouter = Router();

userRouter.post('/signup', signup);
userRouter.post('/signin', signin)