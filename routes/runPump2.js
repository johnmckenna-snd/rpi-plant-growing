import express from 'express';
import { runPump2, stopPump2 } from '../src/run-pump';
const router = express.Router();

router.get('/runPump2', async (req, res) => {
	const timeToRun = req.query.seconds;
	const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
	try {
		await runPump2();
		await sleep(timeToRun * 1000);
		await stopPump2();
		res.send(`pump2 Ran for ${timeToRun} seconds`);
	} catch (e) {
		res.send(`pump2 run unsucessful with error ${e}`);
		throw new Error(e);
	}
});

export { router as runPump2 };
