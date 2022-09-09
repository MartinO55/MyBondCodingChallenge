//JS function to show/hide each line as needed. All the lines are already on the page, this just prevents the user being overwhelmed, and makes loading really smooth (cause there is no loading)
function clickThroughStory(current,destination) //so we want this function to fade out the text we are hovering over and fade in the next line, and once its gone, its gone
{
    targetToShow = document.querySelector(destination)//finds the target/next p in sequence as told by the html from inferno
    targetToHide = document.querySelector(current)
 
    if (targetToShow != null) {//checks there is another line first
        targetToShow.style.display = 'block' //just changes the CSS style 
        targetToHide.style.display = 'none'
    } else{//goes back to the index page and leaves an error message
        window.location.href ="Index.html"
        console.log("error: either Virgil has not finished the tour or Dante has not finished writing")
    }

}
   