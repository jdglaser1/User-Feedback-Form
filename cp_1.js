// Starting by identifying all of the elements we will use from the html file
const userText = document.getElementById("user-name")
const emailText = document.getElementById("email")
const commentText = document.getElementById("comments")
const countCharacters = document.getElementById("count-characters")


//Step 3 creating event listeners

//counting characters
commentText.addEventListener("input", function() {
    countCharacters.textContent = commentText.value.length
})

 //mouseover tooltip(user section)
 userText.addEventListener("mouseover", function(){ // we  defined the user section as userText above
  document.getElementById("user-name-tip").style.display ="block"
 })
userText.addEventListener("mouseout", function(){
    document.getElementById("user-name-tip").style.display="none"
})


 //creating a feedback display


// Be sure to add event.preventDefault()