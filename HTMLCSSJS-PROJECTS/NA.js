let bt=document.querySelector("#btn1");
const notesContainer=document.querySelector(".notes-Container");
let notes=document.querySelectorAll(".input-box");
let originalOpacity=1;
// localStorage.clear();

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");

};
showNotes();
function updateStorage() {
localStorage.setItem("notes",notesContainer.innerHTML);  
};

bt.addEventListener("click",()=>{
    // <!-- <p contenteditable="true" class="input-box">
    //             <img src="NotesAppProject/delete.png" alt="del">
    //         </p> -->
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="NotesAppProject/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    
    bt.style.opacity=0.5;
    setTimeout(() => {
        bt.style.opacity=originalOpacity;
    }, 200);

});
notesContainer.addEventListener("click",function(e){    
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();// nodes-container
        updateStorage() ;
    }
    else if(e.target.tagName==="p"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{
            nt.onkeyup=function(){
                updateStorage();
            }
        });
    }
});

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});