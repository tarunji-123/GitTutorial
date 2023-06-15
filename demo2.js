document.title = 'my new title';

var header =document.getElementById('main-header');
header.style.border = 'solid 2px black';

// var title = document.getElementsByClassName('title');

// title[0].style.fontWeight = 'bold';

// title[0].style.color = 'green';

// Get element by class name

var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = "green";

for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = "bold";
}