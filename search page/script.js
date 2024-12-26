
weak=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
months=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
// Divide Time with a yea
//let years = Math.round(d.getTime() / year);
//let months = Math.round(d.getTime() / month);
//let days = Math.round(d.getTime() / day);
//let hours = Math.round(d.getTime() / hour);

//let months=date[4]+date[5]+date[6];
function Updatetime(){
    const d = new Date();
    let dayofweak=Number(d.getDay())-1;
    date=String(d); 
    days=weak[dayofweak];
    year=String(d.getFullYear());
    hour=String(d.getHours());
    min=String(d.getMinutes());
    today_date=d.getDate();
    month=Number(d.getMonth());
    if (min.length==1){
        time=hour+':0'+ min;
    }
    else{
        time=hour+':'+ min;
    }
    
    date_week=days+' '+ today_date+' '+ months[month]+' '+year


    document.getElementById('time').innerText=time;
    document.getElementById('date').innerText=date_week;

}
setInterval(Updatetime,1000);

document.querySelector('#search_button').addEventListener('click',function(event){
    event.preventDefault();
    qurry=document.getElementById('search_bar').value;
    url='https://www.google.com/search?q='+qurry;
    //window.open(url,'_self');
    window.location.href = url;
    //console.log(url);

   
})
var inputs = document.querySelectorAll('#search_bar');

inputs.forEach(input => {
     input.addEventListener('keydown', function(event){
         if (event.key === 'Enter'){
            event.preventDefault();
            qurry=document.getElementById('search_bar').value;
            url='https://www.google.com/search?q='+qurry;
            //window.open(url,'_self');
            window.location.href = url;
            //console.log(url);
        
     }
     // for checking if the checked box is checked or not while entering words
     //console.log('5')
 });
 });
