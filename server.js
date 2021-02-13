import { runPump1, stopPump1, unexportPump1 } from './src/run-pump';

runPump1();
setTimeout(() => stopPump1(), 20000);
unexportPump1();

process.on('SIGINT', () => {
	stopPump1();
	unexportPump1();
});
