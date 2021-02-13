import { runPump1, stopPump1, unexportPump1 } from './src/run-pump';
import regeneratorRuntime from 'regenerator-runtime';

runPump1();
setTimeout(() => stopPump1(), 2000);

process.on('SIGINT', async () => {
	await stopPump1();
	await unexportPump1();
	process.exit();
});
