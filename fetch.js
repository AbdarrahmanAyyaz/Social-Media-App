/**
 * Creating a card node using the DOM API.
 * @param {*} containter where to add to the newly created dom node 
 * @param {*} data used to fill in the dom node
 */
function buildCardsUsinJSAPI(containter, data) {
    let cardDiv = document.createElement("div"); //create div element
    cardDiv.setAttribute("class", "product-card"); //set class HTML attribute 
    let imgDiv = document.createElement("img"); //create img element
    imgDiv.setAttribute("src", data.url); //set src HTML attribute
    imgDiv.setAttribute("class", "prod-img"); //set class HTML attribute
    let infoDiv = document.createElement("div"); //create div element
    infoDiv.setAttribute("class", "prod-info"); //set class HTML attribute
    let titleP = document.createElement("p"); //create p element
    let costP = document.createElement("p"); //create p element
    titleP.setAttribute("class", "prod-title"); //set class HTML attribute
    titleP.appendChild(document.createTextNode(data.title)); //adding a text node to the p tag
    infoDiv.appendChild(titleP) // add the p tag to prod-info div
    cardDiv.appendChild(imgDiv) // add the img tag to product-card div
    cardDiv.appendChild(infoDiv); // add the img tag to product-card div
    containter.appendChild(cardDiv); // add product-card div to prdouct list div
    cardDiv.addEventListener('click', deletePhotos)
        //document.getElementsByClassName("product-card").addEventListener('click', deletePhotos);

}
let numOfItems = 0;

function fetchPhotos() {
    // where we will get products from
    var url = "https://jsonplaceholder.typicode.com/albums/2/photos";
    fetch(url)
        .then((response) => {
            //extract the body from response object.
            return response.json();
        })
        .then((data) => {
            //get product-list div
            let containerDiv = document.getElementById("product-list");
            //get the array of products from data json object
            //create a document Fragment (https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment)
            let containerFragment = document.createDocumentFragment();
            //for each product , build a card HTML element
            data.forEach((da) => {
                buildCardsUsinJSAPI(containerFragment, da);
                numOfItems++;
            });
            //add the container fragment to DOM(the product-list div)
            containerDiv.appendChild(containerFragment);
            let numMessage = document.getElementById('numberOfProducts');
            numMessage.innerHTML = "Items Displayed: " + numOfItems;
        })
        .catch((error) => {
            console.log(error);
        });
}

function deletePhotos(event) {
    let numMessage = document.getElementById('numberOfProducts');
    event.currentTarget.remove();
    numOfItems--;
    numMessage.innerHTML = "Items Displayed: " + numOfItems;
}
fetchPhotos();