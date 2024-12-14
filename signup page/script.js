



function is_ckecked(){
     let a=document.getElementById("terms_and_conduction");
     if (a.checked){
          alert('heskam');
          document.getElementById('#text-form').onsubmit("submit", function (event) {
                   event.preventDefault();
           
                   var formData = $(this).serialize();
           
                   $.ajax({
                       url: 'process.php', // Ensure this points to your PHP file
                       type: "POST",
                       data: formData,
                       dataType: 'json',
                       success: function (response) {
                           if (response.status === 'success') {
                               console.log(response.message);
                               //$('#text-form')[0].reset(); // Clear the form
                           } else {
                               $('#responseMessage').html('<p style="color: red;">' + response.message + '</p>');
                           }
                       },
                       error: function () {
                           $('#responseMessage').html('<p style="color: red;">An error occurred. Please try again.</p>');
                       }
                   });
               });
          console.log('6');

     }
     else{
          alert('jhdasdn');
          console.log('7');
     }
}

var inputs = document.querySelectorAll('#username, #password');

inputs.forEach(input => {
     input.addEventListener('keydown', function(event){
         if (event.key === 'Enter'){
             event.preventDefault();
             is_ckecked();
     }
     console.log('5')
 });
 });
 document.querySelector('#sign_up_button').addEventListener('click',function(event){
     event.preventDefault();
             is_ckecked();
 })