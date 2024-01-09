const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addList(){
    let text;
    if(inputBox.value == ""){
        text = "Pls put in the fields";
    }else{
        text = "List Added";
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "\&#x2716"
        li.appendChild(span);
    }
    document.getElementById("text-field").innerHTML = text;
    inputBox.value = "";
}

document.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        document.getElementById("text-field").innerHTML = "List Removed";
    }
},false)
