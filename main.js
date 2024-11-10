
//declares name variable
let name;

//set up an event listener for the button to get the name
document.getElementById("mySubmit").onclick = function(){
    name = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${name}`
}

//creates a bigger image when clicked
function enlargeImage() {
    const img = document.getElementById("profilePic");
    //check if the image is already enlarged and to remove it if it is
    if (img.classList.contains("enlarged")){
        img.classList.remove("enlarged");
    }else{
        //enlarges if it is not
        img.classList.add("enlarged");
    }  
    }
    //highlights the nav menu to yellow when clicked on
    function highlightNav(navMenu){
        ClipboardItem.style.backgroundColor = "yellow";
    }
    //removes the highlighted colour after you clicked on it
    function unhighlightNav(navMenu){
        ClipboardItem.style.backgroundColor ="";
    }
    //sets up event listener for the button to toggle on and off the large text mode
document.getElementById("toggleTextSize").addEventListener("click", function() {
    document.body.classList.toggle("large-text");
    });

    // Toggle background color on button click
document.getElementById("toggleBackground").addEventListener("click", function() {
    // Toggle the class to change background color
    document.body.classList.toggle("blueBackground");
  });

  function showAltText(imageId) {
    const altText = document.getElementById(imageId).alt;
    alert(altText);
}

 
  


      
   

   
      
