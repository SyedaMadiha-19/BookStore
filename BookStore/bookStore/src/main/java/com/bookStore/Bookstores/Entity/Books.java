package com.bookStore.Bookstores.Entity;

public class Books {
	private int bookId;
	private String bookName;
	private String author;
	private long publishYear;
	public Books() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Books(int bookId, String bookName, String author, long publishYear) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.author = author;
		this.publishYear = publishYear;
	}
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public String getBookName() {
		return bookName;
	}
	public void setBookName(String bookName) {
		this.bookName = bookName;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public long getPublishYear() {
		return publishYear;
	}
	public void setPublishYear(long publishYear) {
		this.publishYear = publishYear;
	}
}
