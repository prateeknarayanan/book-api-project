module.exports = (sequelize, Sequelize) => {
    const Book = sequelize.define("book", {
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      publishedDate: {
        type: Sequelize.DATEONLY
      },
      publication: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      pages: {
        type: Sequelize.INTEGER
      }
    });
  
    return Book;
  };