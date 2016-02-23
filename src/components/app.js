import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
      <h3>ทดสอบการทำงานของ Redux</h3>
        <BookList />
      </div>

    );
  }
}
