import React from 'react';
import SearchBooksResults from './searchBooksResults';
import { Link } from 'react-router-dom';

class SearchBooks extends React.Component {

    render() {

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <SearchBooksResults />
            </div>

        )
    }
}
export default SearchBooks;