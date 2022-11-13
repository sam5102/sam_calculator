//const params = document.getElementsByTagName("input")[0].value

function addOperator(operator) {
    document.getElementsByTagName("input")[0].value += operator
}

let calc = () => {
    let result = eval(document.getElementsByTagName("input")[0].value)
    document.getElementById('result').innerHTML = result
    document.getElementById('result').style.fontSize = "28px"
    document.getElementById('result').innerHTML.st
    console.log(result, document.getElementsByTagName("input")[0].value);
}

function erase(){
    document.getElementsByTagName("input")[0].value = ""
    document.getElementById('result').innerHTML = 0
    document.getElementById('result').style.fontSize = "22px"
}

const back = () => {
    let str = document.getElementsByTagName("input")[0].value
    str = str.substring(0, str.length - 1);
    document.getElementsByTagName("input")[0].value = str
    console.log(str);
}


function toggleTheme() {
    const body = document.body;
    const container = document.querySelector(".container1");
    const upperSection = document.querySelector(".upper-section")
    const lowerSection = document.querySelector(".lower-section")
    const head = document.getElementById("head")
    const input = document.getElementsByTagName("input")[0]
    const result = document.getElementsByTagName("p")[0]
    const moon = document.getElementById("moon")
    const sun = document.getElementById("sun")
    const equal = document.getElementById("equal")

    body.classList.toggle("light-mode");
    container.classList.toggle("light-mode");
    upperSection.classList.toggle("light-mode")
    lowerSection.classList.toggle("light-mode")
    head.classList.toggle("light-mode")
    input.classList.toggle("light-mode")
    result.classList.toggle("light-mode")
    moon.classList.toggle("light-mode")
    sun.classList.toggle("light-mode")
    equal.classList.toggle("light-mode")

    input.focus()
}