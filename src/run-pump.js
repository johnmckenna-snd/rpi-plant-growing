import { Gpio } from 'onoff';
import regeneratorRuntime from 'regenerator-runtime';

const pump1 = new Gpio(26, 'out');
const pump2 = new Gpio(20, 'out');
const pump3 = new Gpio(21, 'out');

export const runPump1 = async () => {
	try {
		const pump1Value = await pump1.read();
		console.log('Pump 1 Current Value', pump1Value);
		await pump1.write(0);
		console.log('Pump 1 Running');
	} catch (e) {
		throw e;
	}
};

export const stopPump1 = async () => {
	try {
		const pump1Value = await pump1.read();
		console.log('Pump 1 Current Value', pump1Value);
		await pump1.write(1);
		console.log('Pump 1 Stopped');
	} catch (e) {
		throw e;
	}
};

export const runPump2 = async () => {
	try {
		const pump2Value = await pump2.read();
		console.log('Pump 2 Current Value', pump2Value);
		await pump2.write(0);
		console.log('Pump 2 Running');
	} catch (e) {
		throw e;
	}
};

export const stopPump2 = async () => {
	try {
		const pump2Value = await pump2.read();
		console.log('Pump 2 Current Value', pump2Value);
		await pump2.write(1);
		console.log('Pump 2 Stopped');
	} catch (e) {
		throw e;
	}
};

export const runPump3 = async () => {
	try {
		const pump3Value = await pump3.read();
		console.log('Pump 3 Current Value', pump3Value);
		await pump3.write(0);
		console.log('Pump 3 Running');
	} catch (e) {
		throw e;
	}
};

export const stopPump3 = async () => {
	try {
		const pump3Value = await pump3.read();
		console.log('Pump 3 Current Value', pump3Value);
		await pump3.write(1);
		console.log('Pump 3 Stopped');
	} catch (e) {
		throw e;
	}
};

export const unexportPumps = async () => {
	try {
		pump1.unexport();
		pump2.unexport();
		pump3.unexport();
	} catch (e) {
		stopPump1();
		throw e;
	}
};
