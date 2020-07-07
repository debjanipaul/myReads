import React from 'react';
import Bookcase from './bookcase';

class BookList extends React.Component {
    render() {
        const { books, bookshelves, moveBooks } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Bookcase books={books} bookshelves={bookshelves} moveBooks={moveBooks} />
            </div>
        )
    }

}
export default BookList;