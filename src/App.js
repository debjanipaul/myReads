import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './searchBooks';
import BookList from './bookList';
import * as BooksAPI from './BooksAPI';

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];
class BooksApp extends React.Component {

  state = {
    books: [],
    searchBooks: []
  }

  componentDidMount() {
    const api = "https://reactnd-books-api.udacity.com"

    fetch(`${api}/books`, {
      headers: {
        "authorization": "whatever",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ books: data.books }))
  }

  handleMove = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if (shelf === 'none') {
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id)
      }));
    } else {
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    }
  };

  handleSearch = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      })
    } else {
      this.setState({ searchBooks: [] });
    }
  }

  resetSearch = () => {
    this.setState({ searchBooks: [] });
  }

  render() {
    const { books, searchBooks } = this.state
    return (
      <Router className="app">
        <Route exact path="/" render={() =>
          <BookList
            bookshelves={bookshelves}
            moveBooks={this.handleMove}
            books={books} />}
        />
        <Route path="/search" render={() =>
          <SearchBooks
            books={books}
            searchBooks={searchBooks}
            bookshelves={bookshelves}
            moveBooks={this.handleMove}
            search={this.handleSearch}
            resetSearch={this.resetSearch}
          />} />
      </Router>
    );
  }
}

export default BooksApp;
