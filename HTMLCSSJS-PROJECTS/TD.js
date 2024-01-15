let btn = document.querySelector("button");
let originalOpacity = 1;
// window.getComputedStyle(btn).opacity;

btn.addEventListener("click", () => {
    btn.style.opacity = 0.5; // Set the opacity to the desired value (e.g., 0.5) on click
    setTimeout(() => {
        btn.style.opacity = originalOpacity; // Revert to the original opacity after a delay
    }, 100); // 100 milliseconds delay, adjust as needed
});

const inputB=document.getElementById("inputBox");
const listcontainer=document.getElementById("list-container");
function addTask(){
    if(inputB.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputB.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputB.value="";
    saveData();
}
btn.addEventListener("click", addTask);// or we could write in the button onclick="addTask()"

listcontainer,addEventListener("click",function(e){// instead of making function outside we created it in the event listner only
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);//false: The third parameter, useCapture, is a boolean value that determines whether the event should be captured during the capturing phase or the bubbling phase. When false, it indicates that the event will be handled during the bubbling phase. This is the most common scenario.



// STORAGE OF THE WEBSITE

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
};

function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
};
showTask();