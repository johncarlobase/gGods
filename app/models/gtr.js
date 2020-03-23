// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var gtrTable = sequelize.define("gtrTable", {
  position: Sequelize.INTEGER,
  player: Sequelize.STRING,
  genre: Sequelize.STRING,
  band: Sequelize.STRING
});

// Syncs with DB
gtrTable.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = gtrTable;
