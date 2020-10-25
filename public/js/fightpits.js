let API = {
    getCharacter: function(selected, id) {
        
        return $.ajax({
            type: "GET",
            url: "/api/" + selected + "/" + id
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

function hideInput1() {
    $(".input1").hide(400, "swing", function(){
       
        $(".input2").show();
        $(".hide-enemy-select").show();
    });
}

function saveSelectValues(event) {
    event.preventDefault();
    let characterID = $("#char-select").val().trim();
    let enemyID = $("#enemy-select").val().trim();

    console.log(characterID);
    console.log(journeyID);
    $(".enemy-select-form").hide(400, "swing", function(){
        $(".fight").show();
        $(".character-name").attr("data-id", characterID);
        $(".enemy-name").attr("data-id", enemyID);
        API.getCharacter("enemies", enemyID).then(function(enemy){
            $(".enemy-name").text(enemy.name)
            console.log(enemy);
        });
        API.getCharacter("characters", characterID).then(function(character){
            $(".character-name").text(character.name)
            console.log(character);
        });
    }
    );
}

function attackEnemy(){
    let characterID = $("#")
    
    $(".character-name").attr("data-id", characterID);
}
$(".next").on("click", hideInput1);
$(".hide-enemy-select").on("click", saveSelectValues);
$(".attack").on("click", attackEnemy);
$(".flee").on("click", fleeFightpits);
