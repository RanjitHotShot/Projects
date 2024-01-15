const BASE_URL =  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";//   /currencies/usd/inr.json   <--- ORIGINAL
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const dropdowns = document.querySelectorAll(".dropdown select");
const msg = document.querySelector(".msg");
for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = "selected";
      }
      select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
    let currCode=element.value;
    let contryCode=countryList[currCode];
    let newSrc= `https://flagsapi.com/${contryCode}/shiny/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

const btn=document.querySelector("form button");
const originalOpacity=1;
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();// stops page refresh
    updateExchangeRate();
    
});

const updateExchangeRate=async ()=>{
    btn.style.opacity = 0.5; // Set the opacity to the desired value (e.g., 0.5) on click
    setTimeout(() => {
        btn.style.opacity = originalOpacity; // Revert to the original opacity after a delay
    }, 100); // 100 milliseconds delay, adjust as needed
    let amount=document.querySelector(".amount input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amtVal.value="1";
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response=await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};

//  WHEN THE DOCUMENT LOADS 
window.addEventListener("load", () => {
    updateExchangeRate();
});