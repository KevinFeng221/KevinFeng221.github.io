
//function to handle form submission and save input values to local storage
function handleSubmit(event){
    event.preventDefault();
    //retrieve input value from whatis, age range, pro img and hiring dec
    const whatIs = document.getElementById('whatIs').value;
    const ageRange = document.getElementById('ageRange').value;
    const proImg = document.getElementById('proImg').value;
    const hiringDec = document.querySelector('input[name="hiringDec"]:checked')?.value;
    //retrives input value from checkboxes, selected date, phone number and range slider
    const likeCheckboxes = document.querySelectorAll('input[name="like"]:checked');
    const like = Array.from(likeCheckboxes).map(checkbox => checkbox.value);
    const bday = document.getElementById('bday').value;
    const phone = document.getElementById('phone').value;
    const importance = document.getElementById('importance').value;
    //store each input value in local storage for future uses
    localStorage.setItem('whatIs', whatIs);
    localStorage.setItem('ageRange', ageRange);
    localStorage.setItem('proImg', proImg);
    localStorage.setItem('hiringDec', hiringDec);
    localStorage.setItem('like', JSON.stringify(like)); // Store array as JSON string
    localStorage.setItem('bday', bday);
    localStorage.setItem('phone', phone);
    localStorage.setItem('importance', importance);
    //tells me that the form data is saved in console 
    console.log('Form data saved to local storages');
}

//clears local storage on reset
function clearStorage() {
    localStorage.clear();
    console.log('Local storage cleared');
}
//added event listener to the submit button to trigger the handleSubmit function
document.querySelector('button[type="submit"]').addEventListener('click', handleSubmit);
//added event listener to the reset button to remove local storage
document.querySelector('button[type="reset"]').addEventListener('click', clearStorage);