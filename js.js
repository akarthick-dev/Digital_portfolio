
const btn2 = document.getElementById("btn2")
const img = document.getElementById("isee")
const text = document.querySelector(".final")
const gen = document.querySelector(".gen")
btn2.addEventListener("click",function(){
    
    img.style.visibility = "visible"
    img.style.opacity = 1
    text.style.visibility = "visible"
    text.style.opacity = 1
    gen.style.zIndex = 6
    if(screen.width <= 700)
    {
        img.style.transform = "scale(0.2)"
    }
    else
    {
        img.style.transform = "scale(0.9)"
    }
})
img.addEventListener("click",()=>{
        img.style.visibility = "hidden"
        img.style.opacity = 0
        text.style.visibility = "hidden"
        text.style.opacity = 0
        img.style.transform = "scale(0)"
        gen.style.zIndex = -1
})
const side_icon = document.querySelector(".useless")
const side_navbar = document.querySelector(".side_navbar")
function open_navbar()
{
    side_navbar.style.left = "0"
}
function close_navbar()
{
    side_navbar.style.left = "-60%"
}
console.log("Screen Width:", window.screen.width);
const skills = document.querySelectorAll(".skil > div")
skills.forEach(element => {
    console.log(element)
})
