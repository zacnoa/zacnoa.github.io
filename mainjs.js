
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


