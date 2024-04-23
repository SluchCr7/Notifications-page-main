let circles = document.querySelectorAll(".circle")
let component = document.querySelectorAll(".component")
let read = document.getElementById("read")
let number = document.getElementById("number")

component.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        e.currentTarget.children[1].children[0].children[e.currentTarget.children[1].children[0].children.length - 1].classList.add("none")
        // console.log(e.currentTarget.children[1].children[0].children[e.currentTarget.children[1].children[0].children.length - 1])
        if (parseInt(number.innerHTML) > 0) {
            number.innerHTML = parseInt(number.innerHTML) - 1
        }
        else {
            number.innerHTML = 0
        }
    })
})

read.addEventListener("click", () => {
    circles.forEach((circle) => {
        circle.classList.add("none")
    })
    number.innerHTML = 0

})