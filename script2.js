let submit = document.querySelector(".submit-two");
let nameInput = document.querySelector(".your_name")
let storyInput = document.querySelector(".story")
let container = document.querySelector(".container")

submit.onclick = function(){
  var q1 = nameInput.value;
  var q2 = storyInput.value;
  console.log(q1, q2)
  container.innerHTML += `<div class='card' style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${q1}</h5>
  
    <p class="card-text">${q2}</p>
  </div>`
  
  }