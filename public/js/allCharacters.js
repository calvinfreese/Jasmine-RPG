function deleteCharacter() {
    
    //finds the closest <tr>'s data-id attribute value up the DOM tree from the button
    let charToDelete = $(this).closest("tr").attr("data-id");

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