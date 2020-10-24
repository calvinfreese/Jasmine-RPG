let arr = ['alpha', 'beta', 'charlie', 'delta', 'edward'];


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




function randomizeMissions() {
      
    for (let i = 0; i < arr.length; i++) {
        
    $('.1mission').text(arr[Math.floor(Math.random() * arr.length)]);
    $('.2mission').text(arr[Math.floor(Math.random() * arr.length)]);
    $('.3mission').text(arr[Math.floor(Math.random() * arr.length)]);

    }
}


randomizeMissions();
$(".hide-mission").on("click", startAdventure);
$(".show-mission").on("click", resetAdventure);
