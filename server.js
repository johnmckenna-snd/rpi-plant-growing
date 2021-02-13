import { runPump, stopPump, unexportPump } from './src/run-pump';

runPump();
setTimeout(() => stopPump(), 20000);

process.on('SIGINT', () => {
	stopPump();
	unexportPump();
});

process.on('exit', () => {
	stopPump();
	unexportPump();
});
