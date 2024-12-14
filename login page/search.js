
function userdetaiiles() {
    
    username =document.querySelector('#input-box-username').value;
    password =document.querySelector('#input-box-password').value;
    console.log(username);
    console.log(password);
    if (username =='2035' && password =='9343'){
        location.replace('../password page/index.html')
   }
   else{
        location.reload()
   }
}



var inputs = document.querySelectorAll('#input-box-username, #input-box-password');

inputs.forEach(input => {
    input.addEventListener('keydown', function(event){
        if (event.key === 'Enter'){
            event.preventDefault();
            userdetaiiles();
    }
});
});