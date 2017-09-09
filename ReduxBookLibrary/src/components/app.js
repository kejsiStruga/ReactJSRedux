import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import Welcome from './test';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Welcome />
      	<BookList />
      	<BookDetail />
      </div>
    );
  }
}
