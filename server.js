import { runPump, stopPump, unexportPump } from './src/run-pump';

runPump();
setTimeout(() => stopPump(), 5000);
unexportPump();

process.on('exit', () => {
	unexportPump();
});
