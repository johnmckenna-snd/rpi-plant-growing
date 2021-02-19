import { runPump1, stopPump1, unexportPump1 } from './src/run-pump';
import { getMoistureSensor1 } from './src/get-moisture-level';
import regeneratorRuntime from 'regenerator-runtime';

runPump1();
setTimeout(() => stopPump1(), 4000);
getMoistureSensor1();

process.on('SIGINT', async () => { // for ctrl + c
	await stopPump1();
	await unexportPump1();
	process.exit();
});
