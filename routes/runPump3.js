import express from 'express';
import { runPump3, stopPump3 } from '../src/run-pump';
const router = express.Router();

router.get('/runPump3', async (req, res) => {
	const timeToRun = req.query.seconds;
	const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
	try {
		await runPump3();
		await sleep(timeToRun * 1000);
		await stopPump3();
		res.send(`pump3 Ran for ${timeToRun} seconds`);
	} catch (e) {
		res.send(`pump3 run unsucessful with error ${e}`);
		throw new Error(e);
	}
});

export { router as runPump3 };
