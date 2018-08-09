//create text node
// var h = document.createElement('h1')
// var myValue = document.createTextNode("Hello ToDo")
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)

// var value = 5;
// while (value>0) {
//     console.log(value);
//     value--;
    
// }

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);


var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeallbutton = document.getElementById("removeall");
removeallbutton.addEventListener('click',removeall);


var ul = document.getElementById('list');
var li;














function addItem(){
   var input = document.getElementById('input');
   var item = input.value;
   ul=document.getElementById('list');
   var textnode = document.createTextNode(item);

   if(item === ''){
       showError();
       return false;
   }
   else{

    //create li 
      li=document.createElement('li');
    //create checkbox infront tobe placed of li
       var checkbox = document.createElement('input');
       checkbox.type='checkbox';
       checkbox.setAttribute('id','check'); //setting id of the checkbox
    //create label
       var label = document.createElement('label');

       //add the input 
    //    ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textnode);
       li.appendChild(label);
       li.className='visual'
       ul.insertBefore(li,ul.childNodes[0]);

       setTimeout(function(){
        li.className='visual2'
       },2);

      

       input.value=''
   }
}


function removeItem(){
     li = ul.children;
     for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
            
        }
         
     }
}

function removeall(){
    var li = ul.children;
    for (let index = 0; index < li.length; index++) {
        ul.remove(li[index]);
        
    }
}

function showError(){

    var getp = document.createElement('p');
    getp.className='visual1'
    var nxt = document.getElementById('add')
    console.log(getp)
    getp.textContent="Enter Your ToDo"
    var div=document.getElementsByClassName('controls');
    div[0].insertBefore(getp,nxt);
    setTimeout(() => {
    getp.remove();
    },2000);
    

}