let username;
let contact_number;

document.getElementById("submit").onclick = function(){
    username = document.getElementById("logintext").value;
    console.log("username:" + username);
}

document.getElementById("nextbutton").onclick = function(){
    window.location.href = "home.html";
}

function ring(){
    document.getElementById("phone").style.display="block";
}

function copy(){
    contact_number = document.getElementById("num01").textContent;
    console.log("contact number : " + contact_number);
}

function hang(){
    document.getElementById("phone").style.display="none";
}