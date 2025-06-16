
let projects=document.getElementById("projects");
let project_button=document.getElementById("project-button");

project_button.addEventListener("mouseover",function()
{
    this.style.backgroundPosition="left";
});

project_button.addEventListener("mouseleave", function(){
    this.style.backgroundPosition="right"
})

projects.addEventListener("mouseover",function(){

    project_button.style.backgroundPosition="left";
});
projects.addEventListener("mouseleave",function(){
    project_button.style.backgroundPosition="right";

});


let button1=document.getElementById("read-more1");
let button2=document.getElementById("read-more2");
let button3=document.getElementById("read-more3");
let bubble1=document.getElementById("bubble1");
let bubble2=document.getElementById("bubble2");
let bubble3=document.getElementById("bubble3");



button1.addEventListener("click",function(){ 
    bubble1.classList.toggle("bubble-transform");
    bubble1.querySelector(".content").classList.toggle("content-transform")
    if(button1.firstChild.textContent=="Read More")
    {
        button1.firstChild.textContent="Close";
    }
    else{
        button1.firstChild.textContent="Read More";
    }
})
button2.addEventListener("click",function(){ 
    bubble2.classList.toggle("bubble-transform");
    bubble2.querySelector(".content").classList.toggle("content-transform")
    if(button2.firstChild.textContent=="Read More")
    {
        button2.firstChild.textContent="Close";
    }
    else{
        button2.firstChild.textContent="Read More";
    }
})
button3.addEventListener("click",function(){ 
    bubble3.classList.toggle("bubble-transform");
    bubble3.querySelector(".content").classList.toggle("content-transform")
    if(button3.firstChild.textContent=="Read More")
    {
        button3.firstChild.textContent="Close";
    }
    else{
        button3.firstChild.textContent="Read More";
    }
})