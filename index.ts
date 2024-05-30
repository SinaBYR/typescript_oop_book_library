/*
  Book
		title
		page_number
		author
		edition

	Author
		firstName
		lastName
		age
		sex
 */

class Person {
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

class Book {
	public _title: string
	public _page_number: number
	public _edition: number
	public _author: Author

	constructor(name: string, page_number: number, edition: number = 1, author: Author) {
		this._title = name
		this._page_number = page_number
		this._edition = edition
		this._author = author
	}

	get name() {
		return this._title
	}

	get edition() {
		return this._edition
	}

	get pageNumber() {
		return this._page_number
	}

	get author() {
		return this._author
	}
}

type Sex = 'male' | 'woman'

class Author extends Person {
	private _genre: string[]
	constructor(firstName: string, lastName: string, age: number, sex: Sex, genre: string[]) {
		super(firstName, lastName, age, sex)
		this._genre = genre
	}

	get genre() {
		return this._genre
	}
}


