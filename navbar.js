function darkMode() {
    let bdVal = document.getElementById("bg").classList.value;
    console.log(bdVal);
    
    if (bdVal === "light") {
        document.getElementById("bg").setAttribute("class", "dark");
        document.getElementById("bg").setAttribute("value", "1");
        document.getElementById("darkLbl").innerHTML= "Light mode";
    } else if (bdVal === "dark") {
        document.getElementById("bg").setAttribute("class", "light");
        document.getElementById("bg").setAttribute("value", "0");
        document.getElementById("darkLbl").innerHTML= "Dark mode";
    } else {
        document.getElementById("bg").setAttribute("class", "dark");
        document.getElementById("bg").setAttribute("value", "1");
        
    }
}

