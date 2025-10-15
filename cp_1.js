//Step 3 creating event listeners

 const countCharacters = document.getElementById('userName')
 Button.addEventListener('click',() =>{
     console.log(countCharacters.length)
 })


 //mouseover
 const card = document.querySelector("main.emailArea");

card.addEventListener("mouseover", () => {
  card.style.backgroundColor = "#eef6e6";
});

card.addEventListener("mouseout", () => {
  card.style.backgroundColor = "white";
});


// Be sure to add event.preventDefault()