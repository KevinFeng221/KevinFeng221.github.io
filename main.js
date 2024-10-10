
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}

function enlargeImage() {
    const img = document.getElementById("profilePic");
    if (img.classList.contains("enlarged")){
        img.classList.remove("enlarged");
    }else{
        img.classList.add("enlarged");
    }  
    }