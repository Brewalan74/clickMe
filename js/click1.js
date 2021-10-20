let buttonClick = document.querySelector("#button");
buttonClick.addEventListener("click", handleButtonClick);

function handleButtonClick () {
    let counterClick = document.querySelector("#counter");
    counterClick.textContent = Number(counterClick.textContent) +1;
}