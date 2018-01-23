function showNext() { 
    document.getElementById("Next").style.display = "inline"; 
}

//this calls the function above, 3000 milliseconds is 3 seconds, adjust here to make it a longer interval
setTimeout("showNext()", 3500);