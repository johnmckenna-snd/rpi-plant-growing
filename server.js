import { runPump1, stopPump1, unexportPump1 } from './src/run-pump';

runPump1();
setTimeout(() => stopPump1(), 2000);

process.on('SIGINT', () => {
	stopPump1();
	unexportPump1();
	process.exit();
});
