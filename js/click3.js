function init ()
{
    let formElt = document.querySelector("#shop-item-form");
    formElt.addEventListener("submit", handleShopItem);

    function handleShopItem (evt) {
        evt.preventDefault();

        let shopItemInputElt = document.querySelector ("#shop-item-input");
        let shopItemInputEltValue = shopItemInputElt.value;

        if (shopItemInputEltValue) {
            let listElt = document.createElement("li");
            listElt.textContent = shopItemInputEltValue;
            document.querySelector("#shop-items").append(listElt);
        }
        document.querySelector("#shop-item-input").value = '';
    }
}

document.addEventListener("DOMContentLoaded", init);