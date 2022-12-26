export async function load() {
    let book = await fetch("https://www.googleapis.com/books/v1/volumes/RX5EugEACAAJ?key={keyName}")
    return { book: book.json() }
}