document.querySelector('#home-button').addEventListener('click',function(event){  
    if (event.metaKey || event.ctrlKey){
        event.preventDefault();
        window.open('../home.html','_blank');
        }
    else{
        window.location.href='../home.html'
        }
    });
