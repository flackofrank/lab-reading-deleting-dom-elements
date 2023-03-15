document.querySelector("li").remove()
document.querySelector("span").remove()
document.querySelector(".posts article").remove()

let h3Tags = document.querySelectorAll("h3")
h3Tags.forEach(h3 => {
    h3.remove();
});