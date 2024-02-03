import React, { Component } from "react";
import BookDataService from "../services/book.service";

export default class AddBook extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePublishedDate = this.onChangePublishedDate.bind(this);
    this.onChangePublication = this.onChangePublication.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangePages = this.onChangePages.bind(this);
    this.saveBook = this.saveBook.bind(this);
    this.newBook = this.newBook.bind(this);

    this.state = {
      id: null,
      title: "",
      author: "", 
      publishedDate: "",
      publication: "",
      price: "",
      pages: ""
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }

  onChangePublishedDate(e) {
    this.setState({
      publishedDate: e.target.value
    });
  }

  onChangePublication(e) {
    this.setState({
      publication: e.target.value
    });
  }

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  }

  onChangePages(e) {
    this.setState({
      pages: e.target.value
    });
  }

  saveBook() {
    var data = {
      title: this.state.title,
      author: this.state.author,
      publishedDate: this.state.publishedDate,
      publication: this.state.publication,
      price: this.state.price,
      pages: this.state.pages
    };

    BookDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          author: response.data.author,
          publishedDate: response.data.publishedDate,
          publication: response.data.publication,
          price: response.data.price,
          pages: response.data.pages
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newBook() {
    this.setState({
      id: null,
      title: "",
      author: "",
      publishedDate: "",
      publication: "",
      price: "",
      pages: ""
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newBook}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input
                type="text"
                className="form-control"
                id="author"
                required
                value={this.state.author}
                onChange={this.onChangeAuthor}
                name="author"
              />
            </div>

            <div className="form-group">
              <label htmlFor="publishedDate">Published Date</label>
              <input
                type="text"
                className="form-control"
                id="publishedDate"
                required
                value={this.state.publishedDate}
                onChange={this.onChangePublishedDate}
                name="publishedDate"
              />
            </div>

            <div className="form-group">
              <label htmlFor="publication">Publication</label>
              <input
                type="text"
                className="form-control"
                id="publication"
                required
                value={this.state.publication}
                onChange={this.onChangePublication}
                name="publication"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                required
                value={this.state.price}
                onChange={this.onChangePrice}
                name="price"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pages">Pages</label>
              <input
                type="text"
                className="form-control"
                id="pages"
                required
                value={this.state.pages}
                onChange={this.onChangePages}
                name="pages"
              />
            </div>

            <button onClick={this.saveBook} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}