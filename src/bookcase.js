import React from 'react';
import Bookshelf from './bookShelf';

class Bookcase extends React.Component {
    render() {
        const { bookshelves, books } = this.props;
        console.log('bookshelves', bookshelves)
        return (
            <div className="list-books-content">
                <div>
                    {bookshelves.map(shelf => (
                        <Bookshelf shelf={shelf} books={books} key={shelf.key} moveBooks={this.props.handleMove} />
                    ))}
                </div>
            </div>
        )
    }

}

export default Bookcase;