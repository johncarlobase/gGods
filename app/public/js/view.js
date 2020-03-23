// When user hits the search-btn
$("#search-btn").on("click", function(event) {
  event.preventDefault();

  // Save the book they typed into the book-search input
  var positionSearched = $("#book-search").val().trim();

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/position/" + positionSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    rendergtrTable(data);

  });

});

// When user hits the author-search-btn
$("#author-search-btn").on("click", function() {

  // Save the author they typed into the author-search input
  var playerSearched = $("#author-search").val().trim();

  // Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/player/" + playerSearched, function(data) {

    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    rendergtrTable(data);

  });

});

// When user hits the genre-search-btn
$("#genre-search-btn").on("click", function() {

  // Save the book they typed into the genre-search input
  var genreSearched = $("#genre-search").val().trim();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/genre/" + genreSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    rendergtrTable(data);

  });

});

function rendergtrTable(data) {
  if (data.length !== 0) {

    $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].position + "</h2>");
      div.append("<p>Player: " + data[i].player + "</p>");
      div.append("<p>Genre: " + data[i].genre + "</p>");
      div.append("<p>Band: " + data[i].band + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE PLAYER</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {

      $.ajax({
        method: "DELETE",
        url: "/api/player/" + $(this).attr("data-id")
      })
        // On success, run the following code
        .then(function() {
          console.log("Deleted Successfully!");
        });

      $(this).closest("div").remove();

    });

  }
}
