import React from 'react';
import Bookshelf from './bookShelf';

class Bookcase extends React.Component {
    render() {
        const { bookshelves, books } = this.props;
        return (
            <div className="list-books-content">
                <div>
                    {bookshelves.map(shelf => (
                        <Bookshelf shelf={shelf} books={books} />
                    ))}
                </div>
            </div>
        )
    }

}

export default Bookcase;