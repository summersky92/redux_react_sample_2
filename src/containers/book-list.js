import React, { Component } from 'react';
//container is the one which have direct link to the related redux Component
export default class BookList extends Component{
  renderlist() {
    return this.props.books.map((book)=>{//combine react views and redux state
      return (
        <li key={book.title} className="list-group-item"> {book.title} </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderlist();}
      </ul>
    )
  }
}
