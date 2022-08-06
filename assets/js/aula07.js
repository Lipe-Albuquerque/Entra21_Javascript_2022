// Yu-Gi-Oh API from: https://db.ygoprodeck.com/api-guide/
//          Endpoint: https://db.ygoprodeck.com/api/v7/cardinfo.php
const URL = "https://db.ygoprodeck.com/api/v7/cardinfo.php";
const searchBar = document.getElementById('searchBar');
let searchedCardList = document.getElementById("searchedCardList");
let artContainer = document.getElementById("getAltArt");
let cardImage = document.getElementById("cardImage");
let cardList = [];

searchBar.addEventListener('keyup', (search) => {
    const searchString = search.target.value.toLowerCase();
    const filteredNames = cardList.data.filter(cards => cards.name.toLowerCase().includes(searchString));
    let searchedNameOut = ``;
    for (let i = 0; i < filteredNames.length; i++) {
        searchedNameOut +=
            `
        <li id="${filteredNames[i].id}" onClick="showCard(this.id)">${filteredNames[i].name}</li>
        `;
        if (i > 10) {
            break;
        }
    }
    searchedCardList.style.height = "200px";
    searchedCardList.style.overflowX = "hidden";
    searchedCardList.style.overflowY = "auto";
    if (searchString.length == 0) {
        searchedNameOut = ``;
        searchedCardList.style.height = "0px";
    }
    searchedCardList.innerHTML = searchedNameOut;
});

async function getAPI(URL) {
    let res = await fetch(URL);
    cardList = await res.json();
    showCard("89943723");
}

async function storeImage(cardURL, cardName, i) {
    let blob = await fetch(cardURL).then(r => r.blob());
    let dataURL = await new Promise(resolve => {
        let reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    });
    try {
        localStorage.setItem(`${cardName}${i}`, dataURL);
    } catch (e) {
        console.log(e);
        if (e) {
            console.log("Local Storage is full! Clearing Local Storage.");
            localStorage.clear();
            localStorage.setItem(`${cardName}${i}`, dataURL);
        }
    }
}

function getImage(cardImageGallery, cardName) {
    let cardImageOut = ``
    let extra = document.getElementById("extra");
    let altCardLen = artContainer.children.length;
    let extraPick, getAltArt;
    if (localStorage.getItem(`${cardName}${0}`) == null) {
        for (let i = 0; i < cardImageGallery.length; i++) {
            storeImage(cardImageGallery[i].image_url, cardName, i);
        }
        cardImage.src = cardImageGallery[0].image_url;
        if (extra) {
            for (let k = 2; k <= altCardLen; k++) {
                extraPick = artContainer.querySelectorAll("div");
                extraPick[1].remove();
            }
            extraPick[0].className = "carousel-item active";
        }
        if (cardImageGallery.length > 1) {
            for (let j = 1; j < cardImageGallery.length; j++) {
                cardImageOut +=
                    `
                    <div class="carousel-item" id="extra">
                        <img src="${cardImageGallery[j].image_url}" class="image-fluid w-50 mx-auto d-block">
                    </div>
                    `;
            }
        }
        artContainer.insertAdjacentHTML("beforeend", cardImageOut);
    } else {
        cardImage.src = localStorage.getItem(`${cardName}${0}`);
        if (extra) {
            for (let k = 2; k <= altCardLen; k++) {
                extraPick = artContainer.querySelectorAll("div");
                extraPick[1].remove();
            }
            extraPick[0].className = "carousel-item active";
        }
        if (cardImageGallery.length > 1) {
            for (let j = 1; j < cardImageGallery.length; j++) {
                getAltArt = localStorage.getItem(`${cardName}${j}`);
                cardImageOut +=
                    `
                    <div class="carousel-item" id="extra">
                        <img src="${getAltArt}" class="image-fluid w-50 mx-auto d-block">
                    </div>
                    `;
            }
        }
        artContainer.insertAdjacentHTML("beforeend", cardImageOut);
    }
}

function showCard(clickedID) {
    let cardInfo = ``;
    let card = cardList.data.find(card => card.id == clickedID);
    cardInfo +=
        `
        <h3>${card.name}</h3>
        <h6">${card.type}</h6>
        <h6>${card.race}</h6>
        <hr>
        <p>${card.desc}</p>
        <hr>
        `;
    // switch to check for card type output
    switch (true) {
        case (card.type.includes("Pendulum")):
            cardInfo +=
                `
                <p><b>ATK</b> / ${card.atk} &nbsp;&nbsp; DEF / <b>${card.def}</b></p>
                <p>Scales: ${card.scale}</p>
                `;
            document.getElementById("cardInfo").innerHTML = cardInfo;
            break;
        case (card.type.includes("Link")):
            cardInfo +=
                `
                <p><b>ATK</b> / ${card.atk} &nbsp;&nbsp; <b>LINK</b>-${card.linkval}</p>
                <p><b>Link Arrows</b>: 
                `;
            for (let d = 0; d < card.linkmarkers.length; d++) {
                cardInfo += `${card.linkmarkers[d]}	&nbsp;&nbsp;`;
            }
            cardInfo += `</p>`;
            document.getElementById("cardInfo").innerHTML = cardInfo;
            break;
        case (card.type.includes("Spell") || card.type.includes("Trap")):
            document.getElementById("cardInfo").innerHTML = cardInfo;
            break;
        default:
            cardInfo +=
                `
                <p><b>ATK</b> / ${card.atk} &nbsp;&nbsp; <b>DEF</b> / ${card.def}</p>
                `;
            document.getElementById("cardInfo").innerHTML = cardInfo;
    }
    
    getImage(card.card_images, card.name);
    
    searchedNameOut = ``;
    searchedCardList.style.height = "0px";
}
getAPI(URL);