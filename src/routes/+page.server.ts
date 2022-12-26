export async function load() {
    let book = await fetch("https://www.googleapis.com/books/v1/volumes/RX5EugEACAAJ?key=AIzaSyC3P3ZOfr3ExpBg4ncusaW3R20snbUyHo4")
    return { book: book.json() }
}