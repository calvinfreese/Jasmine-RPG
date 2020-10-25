
// Post functions for Journey and Enemy 
let API = {
    journeyToDatabase: function(newJourney) {
        
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/journeys",
            data: JSON.stringify(newJourney)
        });
    },
    enemyToDatabase: function(newEnemy) {
        console.log('heeyyy!');
        console.log(newEnemy);
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/enemies",
            data: JSON.stringify(newEnemy)
        });
    }
}


//turns Journey form values into object for database, then triggers the post to the database via API
let addJourney = function(event) {
    event.preventDefault();

    let newJourney = {
        name: $("#journeyText").val().trim(),
        xp: $("#journeyXP").val().trim(),
        item_type: $("#itemType").val().trim(),
        item_name: $("#itemName").val().trim()
    };
    console.log(newJourney);
    if(!(newJourney)) {
        alert("All fields for Journey are required!");
        return;
    }

    API.journeyToDatabase(newJourney).then(function(){
        console.log("Journey added to database.");
    });

    //sets form values back to empty
    $("#journeyText").val("");
    $("#journeyXP").val("");
    $("#itemType").val("");
    $("#itemName").val("");
}

//turns Enemy form values into object for database, then triggers the post to the database via API
let addEnemy = function(event) {
    event.preventDefault();

    let newEnemy = {
        name: $("#enemyName").val().trim(),
        race: $("#enemyRace").val().trim(),
        strength: $("#enemySTR").val().trim(),
        health: $("#enemyHP").val().trim()
    };

    
    if(!(newEnemy)) {
        alert("All fields for Journey are required!");
        return;
    }

    API.enemyToDatabase(newEnemy).then(function(){
        console.log("Enemy added to database.");
    });
    
     //sets form values back to empty
     $("#enemyName").val("");
     $("#enemyRace").val("");
     $("#enemySTR").val("");
     $("#enemyHP").val("");
}








// onclick events
$(".journey-form").on("submit", addJourney);
$(".enemy-form").on("submit", addEnemy);