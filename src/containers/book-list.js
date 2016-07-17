import React, { Component } from 'react';
//container is the one which have direct link to the related redux Component
import { connect } from 'react-redux';//glue between redux and react
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


//export default  (after import connect) no need anymore

class BookList extends Component{// need to involve with the state
  renderlist() {
    return this.props.books.map((book)=>{//combine react views and redux state
      return (
        <li
            key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
            {book.title}
        </li>
      );
    });
  }

  render() {
    //console.log(this.props.asdf);
    return (
      <ul className="list-group col-sm-4">
        {this.renderlist()}
      </ul>
    )
  }
}

function mapStateToProps(state) {//take application state asa an argument
  //whatever is returned will show up as props
  //inside of BookList(the container)
  return {//imp glue here
    books: state.books
    //application state here change, the new books list inside the container will return with a new list of books
  };
}

//anything return  from this function will enb up as props as BookList container
function mapDispatchToProps(dispatch) {
  //when ever select book is called result should be pass to all our reducers
  // receive and  then broadcast to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);//to container, this.props.selectBook
}//selectBook is just a function return a js object, take this return to flow through reducers

//take the map to state function  and  return a container
//export default connect(mapStateToProps)(BookList);
//promot BookList from a component to containerm,
//it need to know about this new dispatch method, selectBook, make it available as a props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//combine a component and a function to produce a container
// will be the props of the component
// redux map the states to the component to pass to the frontend
//a container is a normal react component, which bundle with the application state
//whenever application state changes, the container will re-render as well