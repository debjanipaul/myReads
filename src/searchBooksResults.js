import React from 'react';
import BooksGrid from './booksGrid';

class SearchBooksResults extends React.Component {
    render() {
        const { books, searchBooks, moveBooks } = this.props
        console.log('searchBook', searchBooks)
        const updatedBooks = searchBooks.map(book => {
            books.map(b => {
                if (b.id === book.id) {
                    book.shelf = b.shelf
                }
                return b;
            })
            return book;
        });

        return (
            <div>
                <div className="search-books-results">
                    <div className="books-grid">
                        {updatedBooks.map(book => (
                            <BooksGrid
                                book={book}
                                key={book.id}
                                shelf={book.shelf ? book.shelf : 'none'}
                                moveBooks={moveBooks}
                            />
                        ))}
                    </div>
                </div>
            </div>

        )
    }
}
export default SearchBooksResults;