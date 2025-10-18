// Starting by identifying all of the elements we will use from the html file
const userText = document.getElementById("user-name")
const emailText = document.getElementById("email")
const commentText = document.getElementById("comments")
const countCharacters = document.getElementById("count-characters")
const submit = document.getElementById("submit")
const feedbackDisplay = document.getElementById("feedback-display")



//Step 3 creating event listeners

//counting characters
commentText.addEventListener("input", function() {
    countCharacters.textContent = commentText.value.length
})

 //mouseover tooltip
 //user section
userText.addEventListener("mouseover", function(){ 
  document.getElementById("user-name-tip").style.display ="block"
 })
    userText.addEventListener("mouseout", function(){
    document.getElementById("user-name-tip").style.display="none"
})

//email section
 emailText.addEventListener("mouseover", function(){ 
  document.getElementById("email-tip").style.display ="block"
 })
emailText.addEventListener("mouseout", function(){
    document.getElementById("email-tip").style.display="none"
})

//comments section
 commentText.addEventListener("mouseover", function(){ 
  document.getElementById("comment-tip").style.display ="block"
 })
commentText.addEventListener("mouseout", function(){
    document.getElementById("comment-tip").style.display="none"
})


//preventing submission if fields are empty
//used an if else statement with an alert
submit.addEventListener("click", function(event){
    event.preventDefault()
    if (userText.value ==="" || emailText.value ==="" || commentText.value ===""){
        alert("Enter all required fields")
    }else{
        alert("Submitted")
        // alerts submitted if all entries are valid
        //Appending entries to the feedback display div in the if else statement so that it only apppends if the entries are valid  
        
        // This part creates the new <p> tag for returning feedback
        const feedback = document.createElement("p")
        feedback.textContent ="username: " + userText.value + "     email: " + emailText.value + "     comments: " + commentText.value
       
       //this part appends it to show to the user
        feedbackDisplay.appendChild(feedback)

    }})


