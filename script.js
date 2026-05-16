let tablinks=document.querySelectorAll(".tab-links");
let tabcontents=document.querySelectorAll(".tab-contents");
let sidemenu=document.getElementById("sidemenu");
function opentab(tabname){
for(tablink of tablinks){
    tablink.classList.remove("active-link");
}

for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}

event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab")
}
    
function openmenu(){
    sidemenu.style.right="0";
}

function closemenu(){
    sidemenu.style.right="-200px";
}





























// let title= document.querySelector('.heading');
 
// let name = `Hi,I'm Bhupal  Sharnagat From India` 
// let worl= "Bhupal";

// let newtext= name.replace(worl,`<span class="highlight" >${worl}</span>`);

//  console.log(newtext)

// let index=1;


//   const typeWriter=()=>{
// let new_title= name.slice(0,index);
// title.innerText= new_title;


// index > name.length ? index =1 : index++;




// setTimeout(()=>typeWriter(), 150)

//   }

//   typeWriter();