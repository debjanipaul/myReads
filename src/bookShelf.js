import React from 'react';
import BooksGrid from './booksGrid';
import { Link } from 'react-router-dom';

class BookShelf extends React.Component {
    render() {
        const { books, shelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol>
                        {books.map(book => (
                            <BooksGrid book={book} />
                        ))}
                    </ol>
                </div>

                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}
export default BookShelf;