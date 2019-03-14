import React, { Component } from 'react';
import CreateBook from './containers/CreateBook';
import BookList from './containers/BookList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const stylesApp = {
  marginTop: 40
}

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={ stylesApp }>
          <div className="col-md-6">
            <CreateBook />
          </div>
          <div className="col-md-6">
            <BookList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;