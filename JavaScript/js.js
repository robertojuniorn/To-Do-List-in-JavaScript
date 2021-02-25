let inputText = document.getElementById('inputText')
let addbutton = document.getElementById('addbutton');
let res = document.getElementById('res');

// This code add a new paragraph 
addbutton.addEventListener('click', function(){
   let paragraph = document.createElement('p');
   paragraph.innerText = inputText.value;
   res.appendChild(paragraph);
   inputText.value = '';

   //This code removes the paragraph by double clicking on the element 
   paragraph.addEventListener('click', function(){
       res.removeChild(paragraph);
   })
})