import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook } from '../actions';

const BookList = ({ books, onDelete }) => {
    if (!books.length) {
        return (
            <div>
                No Books 
            </div>
        )
    }

    return (
        <div>
     
            {books.map(book => {
                return (
                    <Book 
                        book={book}
                        onDelete={onDelete}
                        key={book.ID}
                    />
                )          
            })}
        </div>
    );
}

const mapSateToProps = state => {
    return {
        books: state.books 
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteBook(id));
        }
    };
};

export default connect(
    mapSateToProps, 
    mapDispatchToProps 
) (BookList);