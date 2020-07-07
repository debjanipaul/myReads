import React from 'react';

class BookShelfChanger extends React.Component {
    state = {
        value: this.props.shelf
    }

    handleChange = e => {
        this.setState({
            value: e.target.value
        })
        this.props.moveBooks(this.props.book, e.target.value)
    }
    render() {
        return (
            <div>
                <select value={this.state.value} onChange={this.handleChange}>
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