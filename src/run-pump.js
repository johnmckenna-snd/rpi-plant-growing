import { Gpio } from 'onoff';
const pump1 = new Gpio(26, 'out');

export const runPump = () => {
	console.log('runPump', pump1.read());
	pump1.read()
		.then(value => pump1.write(0));
};

export const stopPump = () => {
	pump1.read()
		.then(value => pump1.write(1));
};

export const unexportPump = () => {
	pump1.unexport();
};
