import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchBooks from './searchBooks';
import BookList from './bookList';

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

  render() {
    const { books } = this.state
    return (
      <Router className="app">
        <Route exact path="/" render={() => <BookList bookshelves={bookshelves} books={books} />} />
        <Route path="/search" render={() => <SearchBooks books={books} bookshelves={bookshelves} />} />
      </Router>
    );
  }
}

export default BooksApp;
