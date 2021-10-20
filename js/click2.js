function init ()
{
    let jsButtonElt = document.querySelector("#js");
    jsButtonElt.addEventListener("click", handleButtonClick);

    let phpButtonElt = document.querySelector("#php");
    phpButtonElt.addEventListener("click", handleButtonClick);

    function handleButtonClick (evt) {
        let counterElt;

        if (evt.target.id === "js") {
            counterElt = document.querySelector("#counter-js");
        } else {
            counterElt= document.querySelector("#counter-php");
        }

        counterElt.textContent = Number(counterElt.textContent) + 1;
    }
}

document.addEventListener("DOMContentLoaded", init);