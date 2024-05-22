package com.bookStore.Bookstores.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bookStore.Bookstores.Entity.Books;

@CrossOrigin
@RestController
public class BooksController {
	
	private List<Books> books= new ArrayList<>();
	
	@PostMapping("addBooks")
	public String addBooks(@RequestBody Books book) {
		books.add(book);
		return "book added";
	}
	@GetMapping("getBooks")
	public List<Books> getBooks(){
		return books;
	}
	@DeleteMapping("deleteBook")
	public String removeBook(@RequestParam Integer id) {
		for (Books book : books) {
	        if (book.getBookId() == id) {
	            books.remove(book); // Remove the book with the matching bookId
	            return "book removed";
	        }
	    }
	    return "book not found";
	}
	@PatchMapping("updateBook/{id}")
	public String updateBook(@PathVariable Integer id, @RequestBody Books updatedBook) {
	    for (Books book : books) {
	        if (book.getBookId() == id) {
	            // Update only the specified fields
	            if (updatedBook.getBookName() != null) {
	                book.setBookName(updatedBook.getBookName());
	            }
	            if (updatedBook.getAuthor() != null) {
	                book.setAuthor(updatedBook.getAuthor());
	            }
	            return "book updated";
	        }
	    }
	    return "book not found";
	}

}
