
var block = document.querySelector("#wrap");
var element = document.querySelector("#jury");
element.addEventListener("click", function(e){

    if(block.classList.contains('none'))
    {
        block.classList.remove('none');
    }else{

        block.classList.add('none');
    }
    


})

function hover(event) {
    
       if(!event.currentTarget.firstChild.classList.contains("filled"))
       {
        event.currentTarget.firstChild.classList.add("filled")
        event.currentTarget.lastChild.classList.add("afill");
       }
        
    
  }

  function noHover(event) {
    if(event.currentTarget.firstChild.classList.contains("filled"))
       {
        event.currentTarget.firstChild.classList.remove("filled")
        event.currentTarget.lastChild.classList.remove("afill");
        document.querySelector(".svgfill").classList.remove("filled");
        document.querySelector(".links a").classList.remove("afill");
    
       }
  }

var table_link = document.getElementsByClassName("links");
for(var i= 0; i<table_link.length; i++)
{
    table_link[i].addEventListener("mouseover", hover);
    table_link[i].addEventListener("mouseout", noHover);
}