let inputText = document.getElementById('inputText')
let addButton = document.getElementById('addButton');
let res = document.getElementById('res');

// This code add a new paragraph 
addButton.addEventListener('click', function(){
   var paragraph = document.createElement('p');
   paragraph.innerText = inputText.value;
   res.appendChild(paragraph);
   inputText.value = '';

   //This code removes the paragraph by double clicking on the element 
   paragraph.addEventListener('dblclick', function(){
       res.removeChild(paragraph);
   })
})