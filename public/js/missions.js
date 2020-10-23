function startAdventure() {
    console.log("hi");
    $(".mission-box").hide(1000,"swing",function(){
        console.log('hidden');
        $(".mission-animation").show();
    });
    
}

function resetAdventure() {
    console.log("hi again");
    $(".mission-animation").hide(400, "swing", function(){
        console.log("show mission select");
        $(".mission-box").show();
    })
}

$(".hide-mission").on("click", startAdventure);
$(".show-mission").on("click", resetAdventure);