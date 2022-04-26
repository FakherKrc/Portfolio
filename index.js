

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