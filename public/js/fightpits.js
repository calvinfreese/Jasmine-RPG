// calls/requests to database
let API = {
    getOne: function(selected, id) {
        
        return $.ajax({
            type: "GET",
            url: "/api/" + selected + "/" + id
        });
    },

    putOne: function(payload,type) {
        return $.ajax({
            method: "PUT",
            url: "/api/"+ type,
            data: payload
        });
    }
}


// class setup
class Entity {
    constructor(id, name, race, strength, health) {
        this.id = id;
        this.name=name;
        this.race=race;
        this.strength=strength;
        this.health=health;
    }

    
    attack(opponent){
        opponent.health -= this.strength;
    }

    isAlive(){
        if(this.health <= 0) {
            alert(`${this.name} has died`);
            return false; 
        } 
        return true;
    }
}


// globals
let characterEntity;
let enemyEntity;


// onclick of 'next' button, show next input
function hideInput1() {
    $(".input1").hide(400, "swing", function(){
       
        $(".input2").show();
        $(".hide-enemy-select").show();
    });
}

// save values of character/enemy selection
function saveSelectValues(event) {

    event.preventDefault();
    let characterID = $("#char-select").val().trim();
    let enemyID = $("#enemy-select").val().trim();


    $(".mission-box").hide(400, "swing", function(){
        $(".fight").show();
        $(".character-name").attr("data-id", characterID);
        $(".enemy-name").attr("data-id", enemyID);

        API.getOne("enemies", enemyID).then(function(enemy){
            $(".enemy-name").text(enemy.name);
            enemyEntity = new Entity(enemy.id, enemy.name, enemy.race, enemy.strength, enemy.health);
            $(".enemy-full").text(enemyEntity.health);
            
            $(".enemy-health").text(enemyEntity.health);

        });

        API.getOne("characters", characterID).then(function(character){
            $(".character-name").text(character.name);
            characterEntity = new Entity(character.id, character.name, character.race, character.strength, character.health);
            $(".character-full").text(characterEntity.health);

            $(".character-health").text(characterEntity.health);
         
        });
    });
}


function attackEnemy(char, enemy){
    char = characterEntity;
    enemy = enemyEntity;

    if(enemy.isAlive() || enemy.health > 0){
        char.attack(enemy)
        enemy.isAlive();
        if(!enemy.isAlive()) {
            endMatch();
            updateDatabaseWithExp(char, enemy);
        } else {
            updateHealthBar(char, enemy);
            enemyAttack(char, enemy);
        }        
    } else if (enemy.health <= 0) {
        endMatch();
        updateDatabaseWithExp(char, enemy);
    } 
    
}

function endMatch() {
    $(".return-adv").show();
    $(".attack").hide();
    $(".flee").hide();
}

function enemyAttack(char, enemy) {
    if(char.isAlive() || char.health > 0) {
        enemy.attack(char);
        char.isAlive();
        if(!char.isAlive()) {
            endMatch();
        } else {
            updateHealthBar(char, enemy);
        }     
    } else {
        endMatch();
    }
}

function updateDatabaseWithExp(char, enemy) {
    strXP = enemy.strength /2;
    healthXP = enemy.strength /2;

    $(".strXP").text(strXP);
    $(".healthXP").text(healthXP);
    console.log("str exp gained", strXP);
    console.log("health exp gained", healthXP);
    addXP(char, strXP, healthXP);
}

function updateHealthBar(char, enemy) {
    $(".character-health").text(char.health);
    $(".enemy-health").text(enemy.health);
}



function addXP(char, strXP, healthXP) {
    char.strength += strXP;
    char.health += healthXP;
       
    API.putOne(char, "characters").then(function(posted){
        console.log("EXP has been granted!");
    });

    $(".return-adv").show();

}


function fleeFightpits(){
    alert("You're Fleeing! No XP gained.");
    window.location.replace("/adventures");
}

$(".next").on("click", hideInput1);
$(".hide-enemy-select").on("click", saveSelectValues);
$(".attack").on("click", attackEnemy);
$(".flee").on("click", fleeFightpits);
