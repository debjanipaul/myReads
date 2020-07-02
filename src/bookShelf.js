import React from 'react';
import BooksGrid from './booksGrid';
import { Link } from 'react-router-dom';

class BookShelf extends React.Component {
    render() {
        const { books, shelf } = this.props;
        const filteredBooks = books.filter(book => {
            return book.shelf === shelf.key
        })
        console.log("filteredBooks", filteredBooks)

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {filteredBooks.map(book => (
                            <BooksGrid book={book} key={book.id} shelf={shelf.key} moveBooks={this.props.handleMove} />
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