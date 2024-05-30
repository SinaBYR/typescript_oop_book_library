/*
  Book
		name
		page_number
		author
		edition
 */

class Book {
	public _name: string
	public _page_number: number
	public _edition: number

	constructor(name: string, page_number: number, edition: number = 1) {
		this._name = name
		this._page_number = page_number
		this._edition = edition
	}

	get name() {
		return this._name
	}

	get edition() {
		return this._edition
	}

	get pageNumber() {
		return this._page_number
	}
}

