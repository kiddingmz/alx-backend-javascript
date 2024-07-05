/* eslint-disable no-underscore-dangle, no-prototype-builtins, operator-linebreak */
export default class Car {
	constructor(brand, motor, color) {
		this.brand = brand;
		this.motor = motor;
		this.color = color;
	}

	get brand() {
		return this._brand;
	}

	set brand(value) {
		this._brand = value;
	}

	get motor() {
		return this._motor;
	}

	set motor(value) {
		this._motor = value;
	}

	get color() {
		return this._color;
	}

	set color(value) {
		this._color = value;
	}

	static [Symbol.hasInstance](instance) {
		const proto = Object.getPrototypeOf(instance);
		return (
			proto.hasOwnProperty('brand') &&
			proto.hasOwnProperty('motor') &&
			proto.hasOwnProperty('color')
		);
	}

	// eslint-disable-next-line class-methods-use-this
	cloneCar() {
		return new Car();
	}
}