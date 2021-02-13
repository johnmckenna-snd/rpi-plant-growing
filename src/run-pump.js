import { Gpio } from 'onoff';
import regeneratorRuntime from 'regenerator-runtime';

const pump1 = new Gpio(26, 'out');

export const runPump1 = async () => {
	try {
		const pump1Value = await pump1.read();
		console.log(pump1Value);
		const result = await pump1.write(0);
		console.log('Pump 1 Running', result);
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
