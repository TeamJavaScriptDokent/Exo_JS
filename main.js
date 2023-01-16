function changeColor(color) { 
    document.getElementById('myID').style.backgroundColor = color;
}

 let height = document.querySelector("#height");
let width = document.querySelector("#width");
window.addEventListener("resize", function(e) {
    height.textContent = document.documentElement.clientHeight;
    width.textContent = document.documentElement.clientWidth;
})