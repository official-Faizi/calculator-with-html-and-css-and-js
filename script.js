let str='';
let button=document.querySelectorAll('.btn');
let input=document.getElementById('myinput');


Array.from(button).forEach((button)=>{
button.addEventListener('click',(e)=>{
if(e.target.innerHTML=="="){
    str=eval(str);
    
    input.value=str;

}

else if(e.target.innerHTML=="c"){
    str='';
    // str+=e.target.innerHTML;
    input.value=str;
}


else{
    console.log(e.target);
    str+=e.target.innerHTML;
    input.value=str;

}



})
})
