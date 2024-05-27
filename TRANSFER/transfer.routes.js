import { Router } from "express";
import { createTransferController } from "./transfer.controller.js";
import { auth } from "../middlewares/auth.js";

export const transferRouter = Router()
transferRouter.post("/:walletId",auth,createTransferController)