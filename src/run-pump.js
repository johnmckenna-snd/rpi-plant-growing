import { Gpio } from 'onoff';
const pump1 = new Gpio(26, 'out');

export const runPump1 = () => {
	pump1.read()
		.then(value => pump1.write(0));
};

export const stopPump1 = () => {
	pump1.read()
		.then(value => pump1.write(1));
};

export const unexportPump = () => {
	pump1.unexport();
};
