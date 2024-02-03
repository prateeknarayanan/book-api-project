import React, { Component } from "react";
import BookDataService from "../services/book.service";
import { withRouter } from '../common/with-router';

class Book extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangePublishedDate = this.onChangePublishedDate.bind(this);
    this.onChangePublication = this.onChangePublication.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangePages = this.onChangePages.bind(this);
    this.getBook = this.getBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);

    this.state = {
      currentBook: {
        id: null,
        title: "",
        author: "", 
        publishedDate: "",
        publication: "",
        price: "",
        pages: ""
      },
    };
  }

  componentDidMount() {
    this.getBook(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          title: title
        }
      };
    });
  }

  onChangeAuthor(e) {
    const author = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          author: author
        }
      };
    });
  }

  onChangePublishedDate(e) {
    const publishedDate = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          publishedDate : publishedDate
        }
      };
    });
  }

  onChangePublication(e) {
    const publication = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          publication: publication
        }
      };
    });
  }

  onChangePrice(e) {
    const price = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          price: price
        }
      };
    });
  }

  onChangePages(e) {
    const pages = e.target.value;

    this.setState(function(prevState) {
      return {
        currentBook: {
          ...prevState.currentBook,
          pages: pages
        }
      };
    });
  }

  getBook(id) {
    BookDataService.get(id)
      .then(response => {
        this.setState({
          currentBook: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateBook() {
    BookDataService.update(
      this.state.currentBook.id,
      this.state.currentBook
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The book was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteBook() {    
    BookDataService.delete(this.state.currentBook.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/books');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentBook } = this.state;

    return (
      <div>
        {currentBook ? (
          <div className="edit-form">
            <h4>Book</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentBook.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  value={currentBook.author}
                  onChange={this.onChangeAuthor}
                />
              </div>
              <div className="form-group">
                <label htmlFor="publishedDate">Published Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="publishedDate"
                  value={currentBook.publishedDate}
                  onChange={this.onChangePublishedDate}
                />
              </div>
              <div className="form-group">
                <label htmlFor="publication">Publication</label>
                <input
                  type="text"
                  className="form-control"
                  id="publication"
                  value={currentBook.publication}
                  onChange={this.onChangePublication}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={currentBook.price}
                  onChange={this.onChangePrice}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pages">Pages</label>
                <input
                  type="text"
                  className="form-control"
                  id="pages"
                  value={currentBook.pages}
                  onChange={this.onChangePages}
                />
              </div>
            </form>

            <button
              className="btn btn-danger mr-2"
              onClick={this.deleteBook}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-success"
              onClick={this.updateBook}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Book...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(Book);