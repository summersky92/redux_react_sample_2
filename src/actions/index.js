//action creators
//simple functions to return an action
export function selectBook(book) {
   //console.log('a book is selected:', book.title);
    //selectBook is a action creator, it need to return an action
    //an object must have a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}