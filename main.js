// Function to add a book
function addBook(book) {
    fetch('http://localhost:8080/addBooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// Function to get all books
function getBooks() {
    fetch('http://localhost:8080/getBooks')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// Function to delete a book by ID
function deleteBook(id) {
    fetch(`http://localhost:8080/deleteBook?id=${id}`, {
        method: 'DELETE',
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

// Function to update a book by ID
function updateBook(id, updatedBook) {
    fetch(`http://localhost:8080/updateBook/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBook),
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function addThisBook(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const bookId = document.getElementById('bookId').value;
    const author = document.getElementById('author').value;
    const bookName = document.getElementById('bookName').value;
    const publishYear = document.getElementById('publishYear').value;

    const book = { bookId, bookName, author, publishYear };
    console.log(book); // Log the book object to the console

    // You can further process the book object here, such as storing it in localStorage or sending it to a server
} 

        