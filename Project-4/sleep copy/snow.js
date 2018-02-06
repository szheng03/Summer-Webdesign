function showsoon() { 
    document.getElementById("soon").style.display = "inline"; 
}

setTimeout("showsoon()", 4000);

function showwhite() { 
    document.getElementById("white").style.display = "inline"; 
}

setTimeout("showwhite()", 8000);


$(document).ready(function() {

    setTimeout(function() {

        $(".soon").fadeOut(5000,"linear");

    },3000);

});



