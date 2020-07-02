import React from 'react';

class BookShelfChanger extends React.Component {
    render() {
        const { shelf, moveBooks } = this.props
        return (
            <div>
                <select value={shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>

        )
    }
}
export default BookShelfChanger;