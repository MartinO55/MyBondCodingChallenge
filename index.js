function clickThroughStory(current,destination) //so we want this function to fade out the text we are hovering over and fade in the next line, and once its gone, its gone
{
    targetToShow = document.querySelector(destination)//finds the target/next p in sequence as told by the html
    targetToHide = document.querySelector(current)
    console.log(targetToShow)//from here I guess we just alter the CSS show the target variable div and hide the previous one
    targetToShow.style.display = 'block'
    targetToHide.style.display = 'none'

}
   