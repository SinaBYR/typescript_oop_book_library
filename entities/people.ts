import { Sex } from "@/types"

export class Person {
	private _firstName: string
	private _lastName: string
	private _age: number
	private _sex: Sex

	constructor(firstName: string, lastName: string, age: number, sex: Sex) {
		this._firstName = firstName
		this._lastName = lastName
		this._age = age
		this._sex = sex
	}

	get firstName() {
		return this._firstName
	}
	set firstName(f) {
		this._firstName = f
	}

	get lastName() {
		return this._lastName
	}
	set lastName(l) {
		this._lastName = l
	}

	get fullName() {
		return this.firstName + ' ' + this._lastName
	}

	get age() {
		return this._age
	}
	set age(a) {
		this._age = a
	}

	get sex() {
		return this._sex
	}
	set sex(s) {
		this._sex = s
	}
}

export class Author extends Person {
	private _genre: string[]

	constructor(firstName: string, lastName: string, age: number, sex: Sex, genre: string[]) {
		super(firstName, lastName, age, sex)
		this._genre = genre
	}

	get genre() {
		return this._genre
	}
}

export class Member extends Person {}

