/* 

    Snack 5 (Bonus) - Raccogli i libri
        -   Usando la l'API http://localhost:3333/books/{id} usa la combinazione 
            di .map() e Promise.all(), per creare una funzione (getBooks) 
            che a partire da un array di id (ids), 
            ritorna una promise che risolve un array di libri (books).
        -   Testala con l’array [2, 13, 7, 21, 19] .
*/

/****************
    COSTANTI
****************/
const ids = [2, 13, 7, 21, 19];

/**************
    FUNZIONE
**************/
async function getBooks(ids) {

    // Trasformo l'array di id in un array di Promise
    // ciascuna delle quali recupera un libro e converte la risposta JSON in un oggetto JavaScript
    const arrayPromise = ids.map(id => 
        fetch(`http://localhost:3333/books/${id}`)
        .then(response => response.json()
    ));
    
    // Ritorna una Promise che risolve un array di libri
    return Promise.all(arrayPromise);
}

// Test della funzione
getBooks(ids)
    .then(data => console.log("Libri:", data))
    .catch(error => console.error("Errore chiamata API:", error))
    .finally(() => console.log("Fine!"));
