import { Gpio } from 'onoff';
import regeneratorRuntime from 'regenerator-runtime';

const moistureSensor1 = new Gpio(12, 'in')

export const getMoistureSensor1 = async () => {
	try {
		const moistureValue = await moistureSensor1.read();
		console.log('Moisture Value is:', moistureValue);
	} catch (e) {
		throw e;
	}
};
