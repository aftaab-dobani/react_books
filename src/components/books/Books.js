import React, { Component } from "react";
import Search from "../Search/Search";
import request from 'superagent';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ''
    };
  }

  searchBook = () => {
      request
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.searchField })
        .then((data) => {
            console.log(data);
        })

  }

  handleSearch = (e) => {
      this.setState({ searchField: e.target.value })
  }

  render() {
    return (
      <div>
        <Search handleSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default Books;
