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
    books: []
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
    BooksAPI.update(book, shelf).then(
      () => (this.setState((prevstate) => ({
        books: prevstate.books.filter(b => {
          if (b.id === book.id) {
            return (book.shelf = shelf);
          }
          else {
            return (book);
          }
        })
      })
      )
      ));
  }

  render() {
    const { books } = this.state
    return (
      <Router className="app">
        <Route exact path="/" render={() => <BookList bookshelves={bookshelves} moveBooks={this.handleMove} books={books} />} />
        <Route path="/search" render={() => <SearchBooks books={books} bookshelves={bookshelves} moveBooks={this.handleMove} />} />
      </Router>
    );
  }
}

export default BooksApp;
