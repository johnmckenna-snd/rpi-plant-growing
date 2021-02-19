import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { runPump1, stopPump1, unexportPump1 } from './src/run-pump';
import { getMoistureSensor1 } from './src/get-moisture-level';
import regeneratorRuntime from 'regenerator-runtime';
import router from './routes/index';

const port = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);

app.get('/health', (req, res) => {
	res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
	res.end('Healthy!');
});

// pump currently calibrated to 1/4 cup per second
runPump1();
setTimeout(() => stopPump1(), 16000);
getMoistureSensor1();

process.on('SIGINT', async () => { // for ctrl + c
	await stopPump1();
	await unexportPump1();
	process.exit();
});

app.listen(port, (e) => {
	if (e) throw Error(`couldn't start server on port: ${port}`);
	console.log(`Hello, and welcome to the TEST AGGREGATROR! Listening on port: ${port}`);
});
