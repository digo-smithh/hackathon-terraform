import * as express from 'express';
import { aiPrompt } from '../controllers/aiController';


const router = express.Router();
 
router.post('/prompt', 
    aiPrompt
);
