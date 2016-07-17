import React, { Component } from 'react';
import { connect } from 'react-redux';

//export default
class BookDetail extends Component {
    render() {
        //so need to have a default application for initial state, to avoid error during the starting rendering
        if(!this.props.book) {//starting initial checking
            return <div>Select a book to get started.</div>
        }


        // here the property is not defined when the app first run
        return (
          <div>
              <h3>Details for : </h3>
              <div>Title: {this.props.book.title}</div>
              <div>Pages: {this.props.book.pages}</div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);