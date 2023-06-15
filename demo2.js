document.title = 'my new title';

var header =document.getElementById('main-header');
header.style.border = 'solid 2px black';

// var title = document.getElementsByClassName('title');
// title[0].style.fontWeight = 'bold';
// title[0].style.color = 'green';

// Get element by class name
// var items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = "green";

// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight = "bold";
// }

// get element by tagname
// var tagname = document.getElementsByTagName('li');
// for(var i=0; i<tagname.length; i++){
//     tagname[i].style.color = "blue"; // all the li items will be affected 
// }

// get element by query selector
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = "green";

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = "hidden";

// get element by queryselectorAll
var items = document.querySelectorAll('li');
items[1].style.color = "yellow";

for(var i=0; i<items.length; i+=2){
    items[i].style.color = "green";
}