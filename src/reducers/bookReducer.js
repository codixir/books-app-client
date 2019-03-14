import { ADD_BOOK, DELETE_BOOK, FETCH_BOOK } from '../actions/types';

const bookReducer = (state = [], action) => {
    switch(action.type) {
        case ADD_BOOK:          
            return [...state, action.payload];
        case DELETE_BOOK:
            return state.filter(book => book._id !== action.payload.id);
        case FETCH_BOOK:
            return action.books;
        default:
            return state;
    }
}

export default bookReducer;