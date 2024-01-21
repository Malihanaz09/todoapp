let list = document.getElementById("addList")

console.log(list)
function addItem() {
    let todoList = document.getElementById('todoList');
    
    // CREATE LI TAG
    let li = document.createElement('li');
    let liText = document.createTextNode(todoList.value);
    li.appendChild(liText);
    list.appendChild(li)

    // CREATE DELETE BUTTON
    let deltBtn = document.createElement('button')
    let deltBtnText = document.createTextNode("Delete")
    deltBtn.setAttribute('onclick','deltitem(this)')
    deltBtn.appendChild(deltBtnText)

    li.appendChild(deltBtn)
    
    //CREATE EDIT BUTTON
    let editBtn = document.createElement('button')
    let editBtnText = document.createTextNode("Edit")
    editBtn.setAttribute('onclick','editItem(this)')
    editBtn.appendChild(editBtnText)

    li.appendChild(editBtn)
    todoList.value = "";
}

 //CREATE ANY ONE ITEM DELETE BUTTOM
function deltitem(e){
   e.parentNode.remove()
}
//CREATE EDIT BUTTOM
function editItem(e){
    let val = e.parentNode.firstChild.nodeValue;
    let editValue = prompt("Enter edit value", val)
    e.parentNode.firstChild.nodeValue = editValue;
}

// CREATE ALL ITEMS DELETE BUTTON
function deltAll(){
    list.innerHTML = ""
}