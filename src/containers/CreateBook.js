import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions';
import NewBook from '../components/NewBook';

const mapDispatchToProps = dispatch => {
  return {
    onAddBook: book => {
      dispatch(createBook(book));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewBook);