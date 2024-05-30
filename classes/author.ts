import { Person } from "@/classes"
import type { Sex } from "@/types"

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

