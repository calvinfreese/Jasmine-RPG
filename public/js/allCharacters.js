function deleteCharacter() {
    let charToDelete = $(this).parent().attr("data-id");

    $.ajax({
        method: "DELETE",
        url: "/api/characters/" + charToDelete
    })
    .then(getCharacters);
}


function getCharacters(){

    console.log('hello');
    $.ajax({
        method: "GET",
        url: "/api/characters"
    })
    .then(res => {
        window.location.reload();
    });
}




$(".deleteChar").on("click", deleteCharacter);