import React from 'react';
import BookShelfChanger from './bookShelfChanger'

class BooksGrid extends React.Component {
    render() {
        const { book, shelf, moveBooks } = this.props
        return (
            <div >
                <li>
                    <div className="book">
                        <div className="book-top">
                            {/* <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div> */}
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : '' }}></div>
                            <div className="book-shelf-changer">
                                <BookShelfChanger book={book} shelf={shelf} moveBooks={moveBooks} />
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                    </div>
                </li>
            </div>

        )
    }
}
export default BooksGrid;