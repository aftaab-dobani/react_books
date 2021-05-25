import React, { Component } from "react";
import Search from "../Search/Search";
import Booklist from "../Booklist/Booklist";
import request from 'superagent';


class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ''
    };
  }

  searchBook = (e) => {
      e.preventDefault();
      request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.searchField })
        .then((data) => {
            console.log(data);
            this.setState({ books: [...data.body.items]})
        })

  }

  handleSearch = (e) => {
      this.setState({ searchField: e.target.value })
  }

  render() {
    return (
      <div>
        <Search searchBook={this.searchBook} handleSearch={this.handleSearch}/>
        {/* <Booklist books={this.state.books}/> */}
      </div>
    );
  }
}

export default Books;
