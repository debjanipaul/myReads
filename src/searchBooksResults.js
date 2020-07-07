import React from 'react';
import BooksGrid from './booksGrid';

class SearchBooksResults extends React.Component {
    render() {
        const { books, searchBooks } = this.props
        console.log('searchBook', searchBooks)
        return (
            <div>
                <div className="search-books-results">

                </div>
                <div className="books-grid">
                    {searchBooks.map(book => (
                        <BooksGrid book={book} key={book.id} shelf={book.shelf} />
                    ))}
                </div>
            </div>

        )
    }
}
export default SearchBooksResults;