

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
    .then(data => {
        // Log the data to verify it
        console.log(data);
        
        // Select the element where you want to display the books
        const listOfBooks = document.getElementById("listOfBooks");

        // Loop through the array of books and create HTML elements for each book
        data.forEach(book => {
            // Create a div element to hold the book details
            const bookDiv = document.createElement('div');

            // Set the innerHTML of the div to display the book details
            bookDiv.innerHTML = `
                <p><strong>Book ID:</strong> ${book.bookId}
                <strong>Title:</strong> ${book.bookName}
                <strong>Author:</strong> ${book.author}
                <strong>Published Year:</strong> ${book.publishYear}</p> <hr/><br>
            `;

            // Append the bookDiv to the listOfBooks element
            listOfBooks.appendChild(bookDiv);
        });
    })
    .catch(error => console.error('Error:', error));
}


    
    


// Function to delete a book by ID
function deleteBook() {
    let id = prompt("enter the id of book u want to delete")
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
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        var bookId = document.getElementById('bookId').value;
        var bookName = document.getElementById('bookName').value;
        var author = document.getElementById('author').value;
        var publishYear = document.getElementById('publishYear').value;

        // Create an object with form values
        var book = {
            bookId: bookId,
            bookName: bookName,
            author: author,
            publishYear: publishYear
        };
        addBook(book)
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myFormToUpdate').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        var bookId = document.getElementById('bookId').value;
        var bookName = document.getElementById('bookName').value;
        var author = document.getElementById('author').value;

        // Create an object with form values
        var book = {
            bookName: bookName,
            author: author
        };
        updateBook(bookId,book)
    });
});



        