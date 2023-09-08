//Import All Routers Here
import { Router } from "express";
import { test } from "../controllers/index";
const router = Router();

router.get("/test", test);

//Import Child Routes Here

export default router;
