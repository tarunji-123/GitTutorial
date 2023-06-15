// document.title = 'my new title';

// var header =document.getElementById('main-header');
// header.style.border = 'solid 2px black';

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
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = "green";

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = "hidden";

// get element by queryselectorAll
// var items = document.querySelectorAll('li');
// items[1].style.color = "yellow";

// for(var i=0; i<items.length; i+=2){
//     items[i].style.color = "green";
// }

//Traversing the dom
var itemList = document.querySelector('#items');
// Parent Element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "grey";

// child nodes
// console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color = "blue";
console.log(itemList.lastChild);// it gives text because of space.

itemList.firstElementChild.style.color = "red";
console.log(itemList.firstChild);

console.log(itemList.nextSibling);
itemList.nextElementSibling.style.backgroundColor = "aqua";

console.log(itemList.previousSibling);
itemList.previousElementSibling.style.backgroundColor= "green";

// create Element
//create a div
var newDiv = document.createElement('div');
newDiv.className = 'hello';// add class name 
newDiv.id = 'hello1'; //add id
newDiv.setAttribute('title','Hello new div created');

var newDivText = document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize = "50px";
container.insertBefore(newDiv,h1);