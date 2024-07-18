import express, { Router } from "express";
import {Login,Signup,Logout} from "../controller/auth.controller.js"

const router = express.Router();

router.post("/signup", Signup);

router.post("/login", Login);

router.post("/logout", Logout);

export default router;
