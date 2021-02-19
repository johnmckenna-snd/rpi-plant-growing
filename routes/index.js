import express from 'express';
import { runPump1 } from './runPump1';

const router = express.Router();

router.use(runPump1);

export default router;
