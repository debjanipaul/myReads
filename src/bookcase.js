import React from 'react';
import Bookshelf from './bookShelf';

class Bookcase extends React.Component {
    render() {
        const { bookshelves, books, moveBooks } = this.props;
        console.log('bookshelves', bookshelves)
        return (
            <div className="list-books-content">
                <div>
                    {bookshelves.map(shelf => (
                        <Bookshelf shelf={shelf} books={books} key={shelf.key} moveBooks={moveBooks} />
                    ))}
                </div>
            </div>
        )
    }

}

export default Bookcase;