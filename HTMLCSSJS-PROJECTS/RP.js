let bt=document.querySelector("#btn");
let originalOpacity=1;
const passBox=document.getElementById("password");
const length= 12;// password length
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbol="@#$%^&*(){}[]~/|=-+_-";
const allChars=upperCase+lowerCase+number+symbol;
bt.addEventListener("click",()=>{
    bt.style.opacity=0.5;
    setTimeout(() => {
        bt.style.opacity=originalOpacity;
    }, 200);
    createPass();
});

function createPass() {
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }

    passBox.value=password;
}
function copyPass() {
    passBox.select();
    // document.execCommand("copy"); Older way
    navigator.clipboard.writeText(passBox.value)
    
}