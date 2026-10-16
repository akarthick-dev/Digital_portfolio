
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
const skills = document.querySelectorAll(".skil > div")
skills.forEach(element => {
    console.log(element)
})

// Autoblur scroll effect fallback for browsers without CSS animation-timeline (Zen Browser, Firefox, Safari)
if (!CSS.supports || !CSS.supports("animation-timeline", "view()")) {
    const blurCards = document.querySelectorAll(".autoblur");
    function updateBlurEffect() {
        const windowHeight = window.innerHeight;
        blurCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const totalDistance = windowHeight + rect.height;
            const currentDistance = windowHeight - rect.top;
            const progress = currentDistance / totalDistance;

            if (progress <= 0) {
                card.style.filter = "blur(40px)";
                card.style.opacity = "0";
                card.style.transform = "translateY(0)";
            } else if (progress < 0.40) {
                const t = progress / 0.40;
                card.style.filter = `blur(${(40 * (1 - t)).toFixed(1)}px)`;
                card.style.opacity = t.toFixed(2);
                card.style.transform = "translateY(0)";
            } else if (progress <= 0.60) {
                card.style.filter = "blur(0px)";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            } else if (progress <= 1.0) {
                const t = (progress - 0.60) / 0.40;
                card.style.filter = `blur(${(40 * t).toFixed(1)}px)`;
                card.style.opacity = (1 - t).toFixed(2);
                card.style.transform = `translateY(${(-200 * t).toFixed(1)}px)`;
            } else {
                card.style.filter = "blur(40px)";
                card.style.opacity = "0";
                card.style.transform = "translateY(-200px)";
            }
        });
    }

    window.addEventListener("scroll", () => {
        window.requestAnimationFrame(updateBlurEffect);
    }, { passive: true });

    window.addEventListener("resize", () => {
        window.requestAnimationFrame(updateBlurEffect);
    }, { passive: true });

    updateBlurEffect();
}
