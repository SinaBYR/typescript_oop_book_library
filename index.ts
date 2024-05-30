/*
  Book
		name
		page_number
		author
		edition
 */

class Book {
	public name: string
	public page_number: number
	public edition: number

	constructor(name: string, page_number: number, edition: number = 1) {
		this.name = name
		this.page_number = page_number
		this.edition = edition
	}

	get getName() {
		return this.name
	}

	get getEdition() {
		return this.edition
	}

	get getPageNumber() {
		return this.page_number
	}
}

