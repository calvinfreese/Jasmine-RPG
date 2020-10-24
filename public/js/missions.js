

let arr = ['alpha', 'beta', 'charlie', 'delta', 'edward'];


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

    console.log(characterID);
    console.log(journeyID);

    $(".show-mission").show();

   
}

function resetAdventure() {
    console.log("hi again");
    $(".mission-animation").hide(400, "swing", function(){
        console.log("show mission select");
        animate();
        $(".mission-box").show();
    })
}

function animate() {
    let path = anime.path('.treasureMap path');
    anime({
        targets: "#Capa_1 .travel-box",
        translateX: path('x'),
        translateY: path('y'),
        rotate: path('angle'),
        backgroundColor: '#FFF',
        easing: 'linear',
        duration: 1000,
        loop: true
    });
}




$(".next").on("click", hideInput1);
$(".hide-mission-select").on("click", saveSelectValues);
$(".show-mission").on("click", resetAdventure)
