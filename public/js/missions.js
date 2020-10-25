
let API = {
    getAll: function(type){
       return $.ajax({
            method: "GET",
            url: "/api/" + type
        });
    },
    getOne: function(type, id) {
        return $.ajax({
            method: "GET",
            url: "/api/" + type + "/" + id
        });
    },
    postAll: function(payload, type) {
        return $.ajax({
            method: "PUT",
            url:"/api/" + type,
            data: payload
        })
    },
    putOne: function(payload,type) {
        return $.ajax({
            method: "PUT",
            url: "/api/"+ type,
            data: payload
        });
    }
    
}

function hideInput1() {
    $(".input1").hide(400, "swing", function(){
       
        $(".input2").show();
        $(".hide-mission-select").show();
    });
}


function saveSelectValues(event) {
    event.preventDefault();
    let characterID = $("#char-select").val().trim();
    let journeyID = $("#journey-select").val().trim();
    let updatedCharacter = {};

    // get journey object from ID
    API.getOne("journeys", journeyID).then(function(journey){
        // store values to hidden div/spans
        console.log(journey);
        $(".complete-item").text(journey.item_name);
        $(".journey-item-name").text(journey.item_name);
        $(".journey-item-type").text(journey.item_type);
        $(".journey-xp").text(journey.xp);

        // get character object from ID
        API.getOne("characters", characterID).then(function(character){
            $(".complete-char").text(character.name);
            
            // outline object with data
            updatedCharacter = {
                id: character.id,
                name: character.name,
                age: character.age,
                race: character.race,
                class: character.class
            }

            // depending on journey item type, a character property is updated
            if (journey.item_type == "weapon") {
                updatedCharacter.strength = character.strength += journey.xp;
                console.log("str updated");
                console.log(updatedCharacter);
                $(".xpType").text("strength");
            } else if (journey.item_type == "spell") {
                updatedCharacter.magic = character.magic += journey.xp;
                console.log("str updated");
                console.log(updatedCharacter);
                $(".xpType").text("magic");
            } else if (journey.item_type == "armor") {
                updatedCharacter.health = character.health += journey.xp;
                console.log("str updated");
                console.log(updatedCharacter);
                $(".xpType").text("health");
            } else {
                console.log("No item type selected.");
            }

            // send updated character object with added xp to database
            API.putOne(updatedCharacter, "characters").then(function(data) {
                console.log("successfully posted");
                $(".complete-char").text(data.name);
            });

        });
    
    });

    $(".mission-box").hide(400, "swing", function(){
        $(".animation").show();

        // to empty form
        $("#char-select").val("");
        $("#journey-select").val("");

        animate();
    });
    
}
// on animate completion, redirect to new page.
function animate() {
    let path = anime.path(".svg-test path");
    anime({
        targets: ".boxy",
        translateX: path("x"),
        translateY: path("y"),
        rotate: path("angle"),
        easing: 'linear',
        duration: 8000
    });
      
    setTimeout(function() {
        $(".animation").hide(400, "linear", function(){
            $(".return-from-journey").show();
            $(".complete-h5")
        })
    }, 8000);
}
    

    
    
$(".next").on("click", hideInput1);
$(".hide-mission-select").on("click", saveSelectValues);
// $(".show-mission").on("click", resetAdventure)
