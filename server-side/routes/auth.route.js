import express from 'express';
import { signup } from '../controller/auth.controller.js';
const Router = express.Router();


Router.post("/signup",signup);

export default Router;