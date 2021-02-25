let inputText = document.getElementById('inputText')
let addbutton = document.getElementById('addbutton');
let res = document.getElementById('res');

addbutton.addEventListener('click', function(){
   let paragraph = document.createElement('p');
   paragraph.innerText = inputText.value;
   res.appendChild(paragraph);
   inputText.value = '';

   paragraph.addEventListener('click', function(){
       res.removeChild(paragraph);
   })
})