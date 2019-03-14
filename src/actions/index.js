import { ADD_BOOK, DELETE_BOOK, FETCH_BOOK }  from './types';
import axios from 'axios';

const url = 'http://localhost:8000/books';

export const createBook = ({title, author, year}) => {
    const data = {
        Title: title, 
        Author: author,
        Year: year,
    };

    return (dispatch) => {
        return axios.post(url, data)
            .then(response => {
                const id = response.data;
                axios.get(`${url}/${id}`)
                    .then(response => {
                        dispatch(createBookSuccess(response.data))
                    })
                .catch(error => {
                    throw(error);
                });
                
            })
            .catch(error => {
                throw(error);
            });
    }
}

export const createBookSuccess = (data) => {
    return {
        type: ADD_BOOK,
        payload: {
            ID: data.ID, 
            Title: data.Title,
            Author: data.Author,
            Year: data.Year
        }
    }
}

export const deleteBook = id => {
    return (dispatch) => {
        return axios.delete(`${url}/${id}`) 
            .then(response => {                
                dispatch(fetchAllBooks())
            }).catch(error => {
                throw(error);
            });
    };
};

export const fetchBooks = (books) => {
    return {
        type: FETCH_BOOK,
        books
    };
};

export const fetchAllBooks = () => {
    return (dispatch) => {
        return axios.get(url)
            .then(response => {
                dispatch(fetchBooks(response.data))
            }).catch(error => {
                throw(error);
            });
    };
};