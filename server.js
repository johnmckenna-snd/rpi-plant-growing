import { runPump, stopPump, unexportPump } from './src/run-pump';

runPump();
setTimeout(() => stopPump(), 20000);
unexportPump();

process.on('SIGINT', () => {
	unexportPump();
});

process.on('exit', () => {
	unexportPump();
});
