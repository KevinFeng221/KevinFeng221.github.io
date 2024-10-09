let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").ariaValueMax;
    document.getElementById("myH1").textContent = `Hello ${username}`
}