import express from 'express';
import { runPump1 } from './runPump1';
import { runPump2 } from './runPump2';
import { runPump3 } from './runPump3';

const router = express.Router();

router.use(runPump1);
router.use(runPump2);
router.use(runPump3);

export default router;
