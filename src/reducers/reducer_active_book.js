// state argument is not application state, only the state
//here is the state return back by the current pass in state changes
//the reducer is responsible for
export default function (state = null, action) {//when the first time app boots up, there is no initial application state(real state)
    //so the first action may do not have the case match up.
    //which lead to book-details.js the this.prop.books to be null
    //state += 1; example
    //reducer able to change the application state overtime through the change of action

    switch(action.type) {//switch here to map the pass of data
        case 'BOOK_SELECTED':
            return action.payload;// need to return a fresh object
            //data flow here
            // send back in the format to be the global application state=>
            // then send back to all different containers=>re-renders the ui
    }

    return state;//do not care about action then  can just return to pass the state
}