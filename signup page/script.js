
//for inputing the detaileas of the box

//$(document).ready(function () {
 //    $('#sign_up_form').on("submit", function (event) {
     //    event.preventDefault();
   //      console.log('P2');
      //   var formData = $(this).serialize();
        // console.log('P3');
 //
   //      $.ajax({
     //        url: 'process.php', // Ensure this points to your PHP file
       //      type: "post",
         //    data: formData,
           //  dataType: 'json', //i don't know why it is needed?
             //success: function (response) {
               //console.log('P4');
//
  //               if (response.status === 'success') {
    //                  //alert(response.data);
      //                console.log('P5');
        //              console.log(response.data);
          //           //$('#text-form')[0].reset(); // Clear the form
            //     } else {
              //   }
//             },
  //           error: function () {
//
  //           }
    //     });
    // });
// });
function userdetaiiles(){

}


//function for checking if the cheched box is checked or not 
function is_ckecked(){
     let a=document.getElementById("terms_and_conduction");
     if (a.checked){
          // turns blue and  u can click on it
          document.getElementById('button_box').innerHTML='<button id="sign_up_button">Sign Up</button>';
          document.getElementById("sign_up_button").style.backgroundColor='#0067b8';
          //console.log('6');

     }
     else{
          // turns grey and you can't click on it
          document.getElementById('button_box').innerHTML='<button id="sign_up_button" disabled>Sign Up</button>';
          document.getElementById("sign_up_button").style.backgroundColor='grey';
          //console.log('6');
          //console.log('7');
     }
}

var inputs = document.querySelectorAll('#username, #password');

inputs.forEach(input => {
     input.addEventListener('keydown', function(event){
          is_ckecked();
         if (event.key === 'Enter'){
             event.preventDefault();
             is_ckecked();
     }
     // for checking if the checked box is checked or not while entering words
     //console.log('5')
 });
 });
 document.querySelector('#terms_and_conduction').addEventListener('click',function(event){
     //.preventDefault();
             is_ckecked();
     // for checking if the checked box is checked or not
 })

 document.querySelector('#sign_up_button').addEventListener('click',function(event){
     event.preventDefault();

     // for checking if the checked box is checked or not
 })