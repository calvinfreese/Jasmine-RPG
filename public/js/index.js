
var $submitBtn = $("#signUpBtn");




// The API object contains methods for each kind of request we'll make
var API = {
  saveCharacter: function(newCharacter) {
    console.log(newCharacter);
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "/api/characters",
      data: JSON.stringify(newCharacter)
    });
  },
  getCharacters: function() {
    return $.ajax({
      url: "/api/characters",
      type: "GET"
    });
  }
};


// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var newCharacter = {
    name: $("#player_name").val().trim(),
    age: $("#player_age").val().trim(),
    race: $("#char_race").val().trim(),
    class: $("#char_class").val().trim()
  };

  if (!(newCharacter)) {
    alert("All fields are required!");
    return;
  }
  
  API.saveCharacter(newCharacter).then(function() {
    console.log(newCharacter, ' added!');
  });

  $("#.player_name").val("");
  $("#.player_age").val("");
  $("#.char_race").val("");
  $("#.char_class").val("");
  
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list

function typing() {
  let options = {
    strings: ["Hello, Adventurer... ^1000", "Shall we begin?"],
    loop: false,
    smartBackspace: true,
    backSpeed: 50,
    typeSpeed: 100,
    showCursor: false
  }
  let typed = new Typed(".type-intro", options);
  
  setTimeout(function(){
    $(".formy").fadeIn(8000);
  }, 5000)
}

typing();

// Add event listeners to the submit and delete buttons
$(".character-form").on("submit", handleFormSubmit);

