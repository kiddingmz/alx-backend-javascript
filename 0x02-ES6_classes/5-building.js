/* eslint-disable comma-dangle, no-prototype-builtins, no-underscore-dangle,
class-methods-use-this */
export default class Building {
	constructor(sqft) {
		this.sqft = sqft;

		/* A class that extends from this must
		implement the method evacuationWarningMessage */
		const proto = Object.getPrototypeOf(this);
		if (!proto.hasOwnProperty('evacuationWarningMessage')) {
			throw new Error(
				'Class extending Building must override evacuationWarningMessage'
			);
		}
	}

	get sqft() {
		return this._sqft;
	}

	set sqft(value) {
		if (typeof value !== 'number') {
			throw new Error('Sqft must be a number');
		}
		this._sqft = value;
	}

	evacuationWarningMessage() {}
}