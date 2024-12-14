
function loadhtml(id,url){
    fetch(url)
    .then(response => response.text())
    .then(data=>{
        document.getElementById(id).innerHTML=data;
    console.log('2');
    });

}
document.addEventListener('DOMContentLoaded',()=>{
    loadhtml('header','../common/header.html');
    console.log('1');
    
});
// document.querySelector('#home-button').addEventListener('click',function(event){  
//     if (event.metaKey || event.ctrlKey){
//         event.preventDefault();
//         window.open('../home.html','_blank');
//         }
//     else{
//         window.location.href='../home.html'
//         }
//     });
