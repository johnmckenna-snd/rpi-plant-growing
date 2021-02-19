import express from 'express';

const router = express.Router();

router.get('/runPump1', (req, res) => {
	res.send('pump1 Ran for seconds');
});

export { router as runPump1 };
