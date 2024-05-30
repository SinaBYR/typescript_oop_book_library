/*
  Book
		title
		page_number
		author
		edition
		genre
 */

import { Author } from "./author"

export class Book {
	public _title: string
	public _page_number: number
	public _edition: number
	public _author: Author
	public _genre: string[]

	constructor(name: string, page_number: number, edition: number = 1, author: Author, genre: string[]) {
		this._title = name
		this._page_number = page_number
		this._edition = edition
		this._author = author
		this._genre = genre
	}

	get title() {
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

	get genre() {
		return this._genre
	}
}

