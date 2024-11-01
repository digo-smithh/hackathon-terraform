// src/routes/promptRouter.ts

import { Router } from "express";
import { handlePrompt } from "../controllers/aiController";

const router = Router();

router.post("/prompt", handlePrompt);

export default router;
