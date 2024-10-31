
//function to handle form submission and save input values to local storage
function handleSubmit(){
    //retrieve input value from whatis, age range, pro img and hiring dec
    const whatIs = document.getElementById('whatIs').ariaValueMax;
    const ageRange = document.getElementById('ageRange').ariaValueMax;
    const proImg = document.getElementById('proImg').ariaValueMax;
    const hiringDec = document.querySelector('input[name="hiringDec":checked')?.ariaValueMax;
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
    //added event listener to the submit button to trigger the handleSubmit function
    document.getElementById('button[type="submit"]').addEventListener('click', handleSubmit);
    //added event listener to the reset button to remove local storage
    document.querySelector('button[type="reset"]').addEventListener('click', clearStorage);
}