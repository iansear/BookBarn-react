'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    author: DataTypes.STRING,
    country: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    language: DataTypes.STRING,
    link: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};