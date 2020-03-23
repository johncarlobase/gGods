// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var gtrTable = require("../models/gtr.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Get all Players
  app.get("/api/all", function(req, res) {
    gtrTable.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Get a specific book
  app.get("/api/:position", function(req, res) {
    gtrTable.findAll({
      where: {
        position: req.params.position
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all books of a specific genre
  app.get("/api/genre/:genre", function(req, res) {
    gtrTable.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all books from a specific author
  app.get("/api/player/:player", function(req, res) {
    gtrTable.findAll({
      where: {
        player: req.params.player
      }
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all "long" books (books 150 pages or more)
  app.get("/api/books/long", function(req, res) {
    gtrTable.findAll({
      where: {
        pages: {
          $gte: 150
        }
      },
      order: [["pages", "DESC"]]
    }).then(function(results) {
      res.json(results);
    });
  });

  // Get all "short" books (books 150 pages or less)
  app.get("/api/books/short", function(req, res) {
    gtrTable.findAll({
      where: {
        pages: {
          $lte: 150
        }
      },
      order: [["pages", "ASC"]]
    }).then(function(results) {
      res.json(results);
    });
  });

  // Add a Player
  app.post("/api/new", function(req, res) {
    console.log("Player Data:");
    console.log(req.body);
    gtrTable.create({
      position: req.body.position,
      player: req.body.player,
      genre: req.body.genre,
      band: req.body.band
    }).then(function(results) {
      res.json(results);
    });
  });

  // Delete a Player
  app.delete("/api/player/:id", function(req, res) {
    console.log("Player ID:");
    console.log(req.params.id);
    gtrTable.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });
};
