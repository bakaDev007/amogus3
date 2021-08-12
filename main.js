var input=document.querySelector("#stick");
var name;
var button=document.querySelector("button")
button.onclick=function(){
         console.log("bok");
                name=input.value;
                sessionStorage.setItem("name", name);
}