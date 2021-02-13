import { Gpio } from 'onoff';
const pump1 = new Gpio(26, 'out');

export const runPump1 = async () => {
	try {
		await pump1.read();
		await pump1.write(0);
		console.log('Pump 1 Running');
	} catch (e) {
		throw e;
	}
};

export const stopPump1 = () => {
	pump1.read()
		.then(value => pump1.write(1));
};

export const unexportPump1 = () => {
	pump1.unexport();
};
