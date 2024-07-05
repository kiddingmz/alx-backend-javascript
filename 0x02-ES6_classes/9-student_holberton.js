/* eslint-disable no-underscore-dangle */
export default class StudentHolberton {
	constructor(firstName, lastName, holbertonClass) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._holbertonClass = holbertonClass;
	}

	get fullName() {
		return `${this._firstName} ${this._lastName}`;
	}

	get holbertonClass() {
		return this.holbertonClass;
	}

	get fullStudentDescription() {
		const self = this;
		return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
	}
}