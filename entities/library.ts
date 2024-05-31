import { Author } from "@/classes"

export class Book {
	public _title: string
	public _author: Author
	public _isbn?: string
	public _page_number?: number
	public _edition?: number
	public _genre?: string[]

	constructor(title: string, author: Author, isbn?: string, page_number?: number, edition?: number, genre?: string[]) {
		this._title = title
		this._author = author
		this._isbn = isbn
		this._page_number = page_number
		this._edition = edition || 1
		this._genre = genre
	}

	get title() {
		return this._title
	}

	get isbn() {
		return this._isbn
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

export class Shelf {
	private _name: string
	private _books: Book[]

	constructor(name: string, books: Book[]) {
		this._name = name
		this._books = books
	}

	get name() {
		return this._name
	}

	get books() {
		return this._books
	}

	addBook(book: Book) {
		this._books.push(book)
	}

	// it removes the specified book by isbn
	removeBook(book: Book) {
		const newBooks = this._books.filter(b => b.isbn !== book.isbn)
		this._books = newBooks
		return newBooks
	}

	removeBookByTitle(title: string) {
		const newBooks = this._books.filter(b => b.title !== title)
		this._books = newBooks
		return newBooks
	}

	removeBookByIsbn(isbn: string) {
		const newBooks = this._books.filter(b => b.isbn !== isbn)
		this._books = newBooks
		return newBooks
	}

	findBookByTitle(title: string) {
		return this._books.find(b => b.title === title)
	}

	findBookByIsbn(isbn: string) {
		return this._books.find(b => b._isbn === isbn)
	}
}

