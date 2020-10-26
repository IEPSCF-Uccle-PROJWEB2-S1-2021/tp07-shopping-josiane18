<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My Shopping list</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="script.js" defer></script>

  </head>
  <body>
    <h1 id="myHeading"> Shopping list </h1>

    <div class="list">
      <label for="item">Enter a new item:</label>
      <input type="text" name="item" id="item" />
      <button>Add item</button>

        <ul><input type="text">
          <p> <li> Egg <input type="reset" value "Delete"</li> </p>


          <p> <li> Milk <input type="reset" value "Delete"</li> </p>

          <p> <li> Bread <input type="reset" value "Delete"</li> </p>

          <p> <li> humous <input type="reset" value "Delete"</li> </p>

        </ul>


      </div>
  </body>
</html>
    //DIV TOGGLE
const toggleButton = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');

//User INPUT
const userInput = document.querySelector('.userInput');
const button = document.querySelector('button.description');
const p = document.querySelector('p.description');
let listItem = document.querySelectorAll('li');

//ADD ITEM
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');



//list items
const listItems = document.getElementsByTagName('li');


toggleButton.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    listDiv.style.display = 'block';
    toggleButton.textContent = 'Delete';
   } else {
    listDiv.style.display = 'Delete';
    toggleButton.textContent = 'Delete';
   }
});


button.addEventListener('click', () => {
  lastPickedColor = userInput.value;
  listItem = document.querySelectorAll('li');
   for(let i = 0; i < listItem.length; i++) {
    listItem[i].style.color = lastPickedColor;
    }
  p.innerHTML = 'The list colour is: ' + userInput.value;
});


addItemButton.addEventListener('click', () => {
  let list = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  let appendedItem = list.appendChild(li);
  li.style.color = lastPickedColor; // so it will add li with last picked color
  for(let i = 0; i < appendedItem.length; i++) {
    appendedItem[i].style.color = lastPickedColor;
    }
  addItemInput.value = '';
});



removeItemButton.addEventListener('click', () =; {
  let.list = document.querySelector('ul');
  let li = document.querySelector('li:last-child');
  list.removeChild(li);;
});


listDiv.addEventListener('mouseover', (event) => {
  if(event.target.tagName == 'Li') {
  event.target.style.textTransform = 'uppercase';
  }
});

listDiv.addEventListener('mouseout', (event) => {
  if(event.target.tagName == 'LI') {
  event.target.style.textTransform = 'lowercase';

});
</div>
</body>
</html>

</body>
</html>
