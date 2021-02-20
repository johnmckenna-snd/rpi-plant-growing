import express from 'express';
import { runPump1, stopPump1 } from '../src/run-pump';
const router = express.Router();

router.get('/runPump1', async (req, res) => {
	const timeToRun = req.query.seconds;
	const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
	try {
		await runPump1();
		await sleep(timeToRun * 1000);
		await stopPump1();
		res.send(`pump1 Ran for ${timeToRun} seconds`);
	} catch (e) {
		res.send(`pump run unsucessful with error ${e}`);
		throw new Error(e);
	}
});

export { router as runPump1 };
