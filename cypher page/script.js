const loCase=['_','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const upCase=['_','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
function cypher(){
    alpha=document.getElementById('cypher-input-box');
    bheta=alpha.innerHTML;
    console.log(alpha)
    console.log(bheta[1])
    if(bheta[1]=='C'){
        word=document.querySelector('#wordToBeCypher').value
        key=document.querySelector('#key').value
        y=key.length;
        z=0
        result=''
        key=key.toLowerCase();
        console.log(word)
        for (let i=0;i<word.length;i++){
            if (z==y){
                z=z-y}
            al=word.charAt(i);
            be=key.charAt(z);
            if(loCase.indexOf(al)!= -1 && loCase.indexOf(be)!=-1){
                console.log(al)
                gm=loCase.indexOf(al);
                del=loCase.indexOf(be);
                chi=gm+del
                if (chi>26){
                    phi=loCase[chi-26];
                    result+=phi
                }
                else{
                    phi=loCase[chi];
                    result+=phi
                }
            }
            else if(upCase.indexOf(al)!=-1 && loCase.indexOf(be)!= -1){
                console.log(al)
                console.log('upper')
                gm=upCase.indexOf(al);
                del=loCase.indexOf(be);
                chi=gm+del
                console.log(chi)
                if (chi>26){
                    phi=upCase[chi-26];
                    console.log(phi)
                    result+=phi
                }
                else{
                    phi=upCase[chi];
                    result+=phi
                }
            }
            else{
                result+=al
            }
            z+=1
            }

        console.log(result)
        document.getElementById('result').value = result;
        }

    else{
        word=document.querySelector('#wordToBeCypher').value
        key=document.querySelector('#key').value
        y=key.length;
        z=0
        result=''
        key=key.toLowerCase();
        console.log(word)
        for (let i=0;i<word.length;i++){
            if (z==y){
                z=z-y}
            al=word.charAt(i);
            be=key.charAt(z);
            if(loCase.indexOf(al)!= -1 && loCase.indexOf(be)!=-1){
                console.log(al)
                gm=loCase.indexOf(al);
                del=loCase.indexOf(be);
                chi=gm-del
                if (chi<1){
                    phi=loCase[chi+26];
                    result+=phi
                }
                else{
                    phi=loCase[chi];
                    result+=phi
                }
            }
            else if(upCase.indexOf(al)!=-1 && loCase.indexOf(be)!= -1){
                console.log(al)
                console.log('upper')
                gm=upCase.indexOf(al);
                del=loCase.indexOf(be);
                chi=gm-del
                console.log(chi)
                if (chi<1){
                    phi=upCase[chi+26];
                    console.log(phi)
                    result+=phi
                }
                else{
                    phi=upCase[chi];
                    result+=phi
                }
            }
            else{
                result+=al
            }
            z+=1
            }

        console.log(result)
        document.getElementById('result').value = result;
        }

    
    }
        
    

document.querySelector('.empty-container').addEventListener('click',function(event){
    var inputs = document.querySelectorAll('#key , #wordToBeCypher');

    inputs.forEach(input => {
        input.addEventListener('keydown', function(event){
            if (event.key === 'Enter'){
                event.preventDefault();
                cypher();
                console.log('4')
    }
    console.log('8')
});
});
})

// var inputs = document.querySelectorAll('#key , #wordToBeCypher');

// inputs.forEach(input => {
//     input.addEventListener('keydown', function(event){
//         if (event.key === 'Enter'){
//             event.preventDefault();
//             cypher();
//             console.log('4')
//     }
//     console.log('8')
// });
// });
function decoder(){
    data=' Decoder <div class="userinput"><input type="text" id="wordToBeCypher" class="input-box" placeholder="Put the word to be decode" autocomplete="off"></div> <div class="userinput"><input type="text" id="key" class="input-box" placeholder="Put the key" autocomplete="off"></div> <button onclick="cypher();" id="cypher-button">Submit</button> <div class="userinput"><input type="text" id="result" autocomplete="off" placeholder="Result" readonly></div>'
    document.getElementById('cypher-input-box').innerHTML=data;
}
function coder(){
    data=' Coder<div class="userinput"><input type="text" id="wordToBeCypher" class="input-box" placeholder="Put the word to be cypher" autocomplete="off"></div><div class="userinput"><input type="text" id="key" class="input-box" placeholder="Put the key" autocomplete="off"></div><button onclick="cypher();" id="cypher-button">Submit</button><div class="userinput"><input type="text" id="result" autocomplete="off" placeholder="Result" readonly></div>'
    document.getElementById('cypher-input-box').innerHTML=data;
}