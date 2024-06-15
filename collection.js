var productContainer=document.getElementById("products");
var search=document.getElementById("search");
var produtlist=productContainer.querySelectorAll("div");



search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()

    for(count=0;count<produtlist.length;count=count+1)
    {
        var productname=produtlist[count].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0){
            produtlist[count].style.display="none"
        }
        else{
            produtlist[count].style.display="block"
        }
        }
    }
)