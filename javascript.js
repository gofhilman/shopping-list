const addedItem = document.querySelector('#item');
const addingButton = document.querySelector('button');
const itemList = document.querySelector('ul');

function addItem() {
    let newItem = addedItem.value;
    addedItem.value = '';
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listButton = document.createElement('button');
    listItem.appendChild(listText);
    listItem.appendChild(listButton);
    listText.textContent = newItem;
    listButton.textContent = 'Delete';
    itemList.appendChild(listItem);
    listButton.addEventListener('click', () => itemList.removeChild(listItem));
    addedItem.focus();
}


addingButton.addEventListener('click',addItem);