//Rabndom PassWord Generator...

document.addEventListener("DOMContentLoaded",()=>{

    const btn = document.querySelector("button");
    const ans = document.querySelector("#ans");
    const result = document.querySelector(".result");
    
    function scaleDown(){
        btn.addEventListener("click",()=>{
         btn.style.scale = `.95`;

         setTimeout(()=>{
            btn.style.scale = `1`;
         },150)
        })
    }
    scaleDown();

    function startSlider(){
     let slider = document.querySelector("#slider");
     slider.addEventListener("input",()=>{
     slider.value = slider.value;
     if(slider.value >26){
        ans.value = `Max Length Allowed: 26 chars`
     }
     else{
     ans.value = `Selected Length:${slider.value}`;
     }
    })
    }
    startSlider();

    btn.addEventListener('click',()=>{
        ans.value = generatePassWord(slider.value);
    })

    result.addEventListener("click",()=>{
        ans.value  = ` `;
    })
})

function generatePassWord(length){

    if(length > 26){
        length = 26;
    }

    let lowerCase = document.querySelector("#lw");
    let UpperCase = document.querySelector("#up");
    let nums = document.querySelector("#nm");
    let symbols = document.querySelector("#sym");
    
    
    const lowerStr = "abcdefghijklmnopqrstuvwxyz";
    const Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "1234567890";
    const Symbols = "@#$%^&*()_+-?./";

    let slectedStr = "";
    let PassWord = "";

    slectedStr += lowerCase.checked?lowerStr:"";
    slectedStr += UpperCase.checked?Upper:"";
    slectedStr += nums.checked?numbers:"";
    slectedStr += symbols.checked?Symbols:"";

    if(length <= 0){
       return `There Sholud be a given Length for The PassWord`;
    }

    if(slectedStr.length === 0){
        return `At least 1 Case Must be Select`;
    }

    if(length > slectedStr.length){
        return `Length is Out of range for the Characters`;
    }

    for(let i =0;i<length;i++){
       randomIndex = Math.floor(Math.random()*slectedStr.length);
       PassWord += slectedStr[randomIndex];
    }

    return `${PassWord}`;
}