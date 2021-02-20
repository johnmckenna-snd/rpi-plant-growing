import { Gpio } from 'onoff';
import regeneratorRuntime from 'regenerator-runtime';

const pump1 = new Gpio(26, 'out');
const pump2 = new Gpio(20, 'out');
const pump3 = new Gpio(21, 'out');

export const runPump1 = async () => {
	try {
		const pump1Value = await pump1.read();
		console.log('Pump1 Current Value', pump1Value);
		await pump1.write(0);
		console.log('Pump 1 Running');
	} catch (e) {
		throw e;
	}
};

export const stopPump1 = async () => {
	try {
		const pump1Value = await pump1.read();
		console.log('Pump1 Current Value', pump1Value);
		await pump1.write(1);
		console.log('Pump 1 Stopped');
	} catch (e) {
		throw e;
	}
	pump1.read()
		.then(value => pump1.write(1));
};

export const unexportPump1 = async () => {
	try {
		pump1.unexport();
	} catch (e) {
		stopPump1();
		throw e;
	}
};
