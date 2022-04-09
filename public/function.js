const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');
const trashIcon = document.getElementById('trash');

input.addEventListener('keydown', function(event){
    if(event.key === 'Enter')
        addItem();
})

function addItem(){
    var itemList = document.createElement('div');
    var itemButton = document.createElement('div');
    var checkIcon = document.createElement('i');
    var trashIcon = document.createElement('i');

    // parentDiv.className = 'item';
    itemList.className = 'md:col-span-5 mt-2 p-4 text-lg rounded flex justify-between font-semibold capitalize border-b border-1'
    itemList.innerHTML = '<div>'+input.value+'</div>';
    itemList.style.backgroundColor = 'white';

    checkIcon.className = 'fa-solid fa-square-check p-2';
    checkIcon.style.color = 'lightgray';
    checkIcon.onclick = 'checkBox()'
    checkIcon.addEventListener('click', function(){
            checkIcon.style.color = 'limegreen';
            itemList.className = 'md:col-span-5 mt-2 p-4 text-lg rounded flex justify-between font-semibold capitalize border-b border-1 line-through'
    })
    
    itemButton.appendChild(checkIcon);

    trashIcon.className = 'fa-solid fa-trash-can p-2';
    trashIcon.style.color = 'lightgray';
    trashIcon.addEventListener('click', function(){
        itemList.remove();
    })

    itemButton.appendChild(trashIcon);
    itemList.appendChild(itemButton);
    toDoItems.appendChild(itemList);
    input.value = '';

}
console.log('asdasdasd')


