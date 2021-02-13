import { runPump, stopPump, unexportPump } from './src/run-pump';

runPump();
setTimeout(() => stopPump(), 20000);

process.on('SIGINT', () => {
	unexportPump();
});

process.on('exit', () => {
	unexportPump();
});
