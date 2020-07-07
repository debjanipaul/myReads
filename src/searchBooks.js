import React from 'react';
import SearchBooksResults from './searchBooksResults';
import { Link } from 'react-router-dom';

class SearchBooks extends React.Component {
    state = {
        value: ''
    }

    handleChange = e => {
        const newValue = e.target.value
        this.setState({ value: newValue }, () => {
            this.props.search(newValue)
        });
    };

    render() {
        const { books, bookshelves, searchBooks } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" value={this.state.value} placeholder="Search by title or author" onChange={this.handleChange} />
                    </div>
                </div>
                <SearchBooksResults books={books} searchBooks={searchBooks} bookshelves={bookshelves} search={this.props.search} />
            </div>

        )
    }
}
export default SearchBooks;