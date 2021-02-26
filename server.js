import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { stopPump1, stopPump2, stopPump3, unexportPumps } from './src/run-pump';
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

// need to get state of relays right
stopPump1();
stopPump2();
stopPump3();

getMoistureSensor1();

process.on('SIGINT', async () => { // for ctrl + c
	await stopPump1();
	await stopPump2();
	await stopPump3();
	await unexportPumps();
	process.exit();
});

app.listen(port, (e) => {
	if (e) throw Error(`couldn't start server on port: ${port}`);
	console.log(`Hello, and welcome to some wholesome Raspberry Pi Plant Growing! Listening on port: ${port}`);
});
