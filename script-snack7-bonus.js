/* 

    Hai un array di oggetti che rappresentano dei libri. 
    Ogni libro contiene informazioni come titolo, numero di pagine, 
    autore, disponibilità, prezzo e tag.

    Snack 7 (Bonus) - Analizza i tag
    Usa reduce per creare un oggetto (tagCounts) 
    che conta quante volte ogni tag viene usato tra i libri.
*/

/****************
    COSTANTI
****************/

// Array di oggetti che rappresentano dei libri
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

// Creazione oggetto che conta quante volte ogni tag viene usato tra i libri.

// Creo un array bidimensionale
// --> array che contiene 4 array di tag dei singoli libri
const arrayTags = books.map( book => book.tags );
console.log("Array bidimensionale: ", arrayTags);

// Creo array unidimensionale contenente tutti i tag insieme
let uniqueArrayTags = [];
arrayTags.forEach(arrayTag => {
    arrayTag.forEach(tag => uniqueArrayTags.push(tag));
});
console.log("Array unidimensionale: ", uniqueArrayTags);

// Uso reduce per creare un oggetto (inizialmente vuoto) che conta le occorrenze di ogni tag
const tagCounts = uniqueArrayTags.reduce( (obj, currTag) => {

    // Se il tag (key dell'oggetto) già esiste, incremento il valore (tag ritrovato)
    if(obj[currTag]) {
        obj[currTag] = obj[currTag] + 1;
    }
    
    // Altrimenti, creo la chiave e imposto come valore 1 (tag trovato per la prima volta)
    else {
        obj[currTag] = 1;
    }

    // Ritorno l'oggetto creato
    return obj;

}, {}); 
console.log(tagCounts);


/**************************************
    VERSIONE OTTIMIZZATA (Prof Hyur)
***************************************/

// Reduce applicato direttamente all'oggetto books
const tagCountsProf = books.reduce((obj, book) => {

    // Per ogni singolo libro, ciclo l'array tags
    book.tags.forEach( currTag => {

        // Se il tag (key dell'oggetto) già esiste, incremento il valore (tag ritrovato)
        if (obj[currTag]) {
            obj[currTag]++;
        }

        // Altrimenti, creo la chiave e imposto come valore 1 (tag trovato per la prima volta)
        else {
            obj[currTag] = 1;
        }
    })

    // Ritorno l'oggetto creato
    return obj;
}, {});

console.log(tagCountsProf);