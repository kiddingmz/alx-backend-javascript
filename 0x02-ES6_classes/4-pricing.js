import Currency from './3-currency';

/* eslint-disable no-underscore-dangle */
export default class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(value) {
		if (typeof value !== 'number') {
			throw new TypeError('Amount must be a number');
		}
		this._amount = value;
	}

	get currency() {
		return this._currency;
	}

	set currency(value) {
		if (!(value instanceof Currency)) {
			throw new TypeError('Currency must be a currency');
		}
		this._currency = value;
	}

	displayFullPrice() {
		return `${this.amount} ${this.currency.name} (${this.currency.code})`;
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}