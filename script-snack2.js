/* 
    Hai un array di oggetti che rappresentano dei libri. 
    Ogni libro contiene informazioni come titolo, numero di pagine, 
    autore, disponibilità, prezzo e tag.

    Snack 2 - Il primo libro scontato
        -   Creare un array (availableBooks) che contiene tutti i libri disponibili.
        -   Crea un array (discountedBooks) con gli availableBooks, 
            ciascuno con il prezzo scontato del 20% 
            (mantieni lo stesso formato e arrotonda al centesimo)
        -   Salva in una variabile (fullPricedBook) il primo elemento 
            di discountedBooks che ha un prezzo intero (senza centesimi).
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

// Creazione array che contiene tutti i libri disponibili.

const availableBooks = books.filter( book => book.available);
console.log("Libri disponibili: ", availableBooks);

// Creazione array con libri scontati del 20%

    const discountedBooks = availableBooks.map( availableBook => {

        const numericPrice = parseFloat(availableBook.price.slice(0, -1));                          // Elimino simbolo € dal prezzo e converto la stringa in numero 
        const discountedPrice = (numericPrice - ((numericPrice * 20) / 100)).toFixed(2) + "€";      // Applico sconto del 20% al prezzo e aggiungo simbolo €

        return { 
            ...availableBook, 
            price: discountedPrice 
        };
    });

    console.log("Libri scontati: ", discountedBooks);


// Salvataggio del primo elemento di discountedBooks che ha un prezzo intero

const fullPricedBook = discountedBooks.find( discountedBook => {

    const numericPrice = parseFloat(discountedBook.price.slice(0, -1));                             // Elimino simbolo € dal prezzo e converto la stringa in numero
    return Number.isInteger(numericPrice);                                                          // Controllo se il numero è intero e lo ritorno
})

console.log("Libro con prezzo intero: ", fullPricedBook);
