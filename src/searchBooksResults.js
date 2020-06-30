import React from 'react';
// import Bookcase from './bookcase';
import BooksGrid from './booksGrid';

class SearchBooksResults extends React.Component {
    render() {
        const { books } = this.props
        return (
            <div>
                <div className="search-books-results">

                </div>
                <div className="books-grid">
                    {books.map(book => (
                        <BooksGrid book={book} key={book.id} />
                    ))}
                </div>
            </div>

        )
    }
}
export default SearchBooksResults;