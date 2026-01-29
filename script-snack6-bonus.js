/* 

    Hai un array di oggetti che rappresentano dei libri. 
    Ogni libro contiene informazioni come titolo, numero di pagine, 
    autore, disponibilità, prezzo e tag.

    Snack 6 (Bonus) - Ordina i libri
    -   Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
    -   Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
    -   Ordina l’array booksByPrice in base alla disponibilità (prima quelli disponibili), 
        senza creare un nuovo array.
*/

/****************
    COSTANTI
****************/

// Array di oggetti
const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

/**************
    METODI
**************/

// Verifico se c’è almeno un libro disponibile.
const areThereAvailableBooks = books.some( book => book.available === true);
console.log("C'è almeno un  libro disponibile ? ", areThereAvailableBooks);

// Creazione nuovo Array (copia superficiale) con gli elementi di books ordinati in base al prezzo (crescente).
let booksByPrice = [...books];
booksByPrice = booksByPrice.sort( (a,b) => {

    // Eliminino simbolo € dai prezzi e converto in numeri
    const prezzoA = parseFloat(a.price.replace("€", ""));
    const prezzoB = parseFloat(b.price.replace("€", ""));

    return prezzoA - prezzoB;
});
console.log("Array ordinato per prezzo: ", booksByPrice);

// Ordinamento array booksByPrice in base alla disponibilità(prima quelli disponibili)
// true = 1, false = 0 
booksByPrice.sort((a, b) => b.available - a.available);
console.log("Array ordinato per disponibilità: " , booksByPrice);