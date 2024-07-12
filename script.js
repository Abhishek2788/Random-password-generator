const alpha="abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialC="!@#$%&";
const combination="abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&0123456789";
const result=document.getElementById("result");

function numGen(n){
    let res="";
    for (let index = 0; index < n; index++) {
        res+=Math.floor((Math.random()*10));
    }
    return res;
}
function randomGen(n,str){
    let res="";
    for (let index = 0; index < n; index++) {
        res+=str.charAt(Math.floor((Math.random()*str.length)));
    }
    return res;
}

document.getElementById("button").addEventListener("click",function(){
    const inputD=parseInt(document.getElementById("input-data").value);
    if (isNaN(inputD) || inputD<=0) {
        result.innerHTML="Please enter a valid password length.."
    }
    else{
        const letter=document.getElementById("r1").checked;
        const number=document.getElementById("r2").checked;
        const specialCharacter=document.getElementById("r3").checked;
        if(letter){
            result.innerHTML=randomGen(inputD,alpha);
            document.getElementById("r1").checked = false;
        }
        else if(number){
            result.innerHTML=numGen(inputD);
            document.getElementById("r2").checked = false;
        }
        else if(specialCharacter){
            result.innerHTML=randomGen(inputD,specialC);
            document.getElementById("r3").checked = false;
        }
        else{
            result.innerHTML=randomGen(inputD,combination);
        }
    }
    
    setTimeout(function(){
        result.innerHTML="";
    },3000);
});
