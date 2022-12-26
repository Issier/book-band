import { BOOK_API_KEY } from "$env/static/private";

export async function load() {
    let book = await fetch(`https://www.googleapis.com/books/v1/volumes/RX5EugEACAAJ?key=${BOOK_API_KEY}`)
    return { book: book.json() }
}