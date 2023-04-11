const form = document.getElementById('form')
const userName = document.getElementById('name')
const mobile = document.getElementById('mobile')
const email = document.getElementById('email')
const collegeName = document.getElementById('college')
const collegeID = document.getElementById('collegeid')
const year = document.getElementById('year')
const tEvents = document.getElementById('t-events')
const ntEvents = document.getElementById('nt-events')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs()
{
    const usernameValue = userName.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const collegeNameValue = collegeName.value.trim();
    const collegeIDValue = collegeID.value.trim();
    const yearValue = year.value;
    const tEventsValue = tEvents.value;
    const ntEventsValue = ntEvents.value;
    
    var unameCheck = /^[a-zA-Z ]+$/;
    var mobileCheck = /^[6789][0-9]{9}$/;
    var emailCheck = /^[a-zA-Z0-9_\-\.]+[@][a-z]+[\.][a-z]{2,3}$/;
    var collegeCheck = /^[a-zA-Z ,&]+$/;
    var collegeidCheck = /^[a-zA-Z0-9-]+$/;

    if(usernameValue === '' || usernameValue == null){
        setErrorFor(userName, 'Name field cannot be blank');
    }
    else if(!unameCheck.test(usernameValue)){
        setErrorFor(userName, 'Enter only Alphabets');
    }
    else
    {
        setSuccessFor(userName);
    }

    if(mobileValue === '' || mobileValue == null){
        setErrorFor(mobile, 'Mobile field cannot be blank');
    }
    else if(!mobileCheck.test(mobileValue)){
        setErrorFor(mobile, 'Enter valid mobile number');
    }
    else{
        setSuccessFor(mobile);
    }

    if(emailValue === '' || emailValue == null){
        setErrorFor(email, 'Email field cannot be blank');
    }
    else if(!emailCheck.test(emailValue)){
        setErrorFor(email, 'Enter Your valid Email');
    }
    else{
        setSuccessFor(email);
    }

    if(collegeNameValue === '' || collegeNameValue == null){
        setErrorFor(collegeName, 'College name field cannot be blank');
    }
    else if(!collegeCheck.test(collegeNameValue)){
        setErrorFor(collegeName, 'Enter your College Name correctly');
    }
    else{
        setSuccessFor(collegeName);
    }

    if(collegeIDValue === '' || collegeIDValue == null){
        setErrorFor(collegeID, 'College ID field cannot be blank');
    }
    else if(!collegeidCheck.test(collegeIDValue)){
        setErrorFor(collegeID, 'Invalid College ID');
    }
    else{
        setSuccessFor(collegeID);
    }
    
    if(yearValue === '-1'){
        setErrorFor(year, 'Choose your Year');
    }
    else{
        setSuccessFor(year);
    }
    
    if(tEventsValue === '-1'){
        setErrorFor(tEvents, 'Choose any one Technical Events');
    }
    else{
        setSuccessFor(tEvents);
    }

    if(ntEventsValue === '-1'){
        setErrorFor(ntEvents, 'Choose any one Non-Technical Events');
    }
    else{
        setSuccessFor(ntEvents);
    }
    
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
