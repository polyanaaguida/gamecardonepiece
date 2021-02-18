function game(i) {
    const app = document.createElement("div");
    const header = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const card = document.createElement("div");
    const cardTitle = document.createElement("div");
    const cardIcon = document.createElement("img");
    const cardName = document.createElement("div");
    const cardType = document.createElement("div");
    const cardImg = document.createElement("img");
    const attributes = document.createElement("div");
    const detAttribute = document.createElement("div");
    const atkAttribute = document.createElement("div");
    const intAttribute = document.createElement("div");

    const cardObj = cards[i];

    app.style.display = "grid";
    // app.style.flexDirection = "column";
    app.style.float = "right";

    // header.style.margin = "10px";
    header.style.color = "black";

    pageTitle.style.fontFamily = "fantasy";

    card.style.alignContent = "center";
    card.style.border = "2px solid black";
    card.style.backgroundColor = "rgb(255, 143, 5)";
    card.style.borderRadius = "20px";
    card.style.width = "63mm";
    card.style.height = "88mm";
    card.style.margin = "50px";
    card.style.position = "relative";
    card.style.top = "0";
    card.style.transition = "top ease 0.5s";
    card.style.boxShadow = "3px 3px 10px black";

    card.onmouseover = function () {
        this.style.top = "-5px";
    }
    card.onmouseout = function () {
        this.style.top = "0";
    }

    cardTitle.style.display = "block";
    cardTitle.style.height = "40px";
    cardTitle.style.padding = "5px 5px 0 5px";

    if (cardObj.akuma == true) {
        cardIcon.setAttribute("src", "/assets/raspberry.png");
        cardIcon.style.position = "relative";
        cardIcon.style.float = "left";
        cardIcon.style.height = "30px";
    } else {
        cardIcon.setAttribute("src", "/assets/raspberry.png");
        cardIcon.style.display = "none";
        cardIcon.style.position = "relative";
        cardIcon.style.float = "left";
        cardIcon.style.height = "30px";
    };

    cardName.innerHTML = cardObj.name;
    cardName.style.display = "inline";
    cardName.style.fontSize = "25px";
    cardName.style.fontFamily = "fantasy";
    cardName.style.color = "black";

    cardType.innerHTML = cardObj.type;
    cardType.style.position = "relative";
    cardType.style.textAlign = "center";
    cardType.style.float = "right";
    cardType.style.width = "20px";
    cardType.style.padding = "3px 3px 3px 3px";
    cardType.style.color = "black";
    cardType.style.border = "2px solid black";
    cardType.style.backgroundColor = "rgb(5, 172, 255)";
    cardType.style.borderRadius = "30px";
    cardType.style.fontSize = "20px";
    cardType.style.fontFamily = "fantasy";

    cardImg.setAttribute("src", cardObj.img);
    cardImg.style.justifyContent = "center";
    cardImg.style.alignItems = "center";
    cardImg.style.marginLeft = "auto";
    cardImg.style.marginRight = "auto";
    cardImg.style.position = "static";
    cardImg.style.paddingTop = "20px";
    cardImg.style.width = "100%";

    attributes.style.margin = "30px 2px 0px 2px";
    attributes.style.display = "block";
    attributes.style.columns = "3";
    attributes.style.textAlign = "center";
    attributes.style.position = "relative";
    attributes.style.top = "0";
    attributes.style.fontFamily = "fantasy";

    detAttribute.innerHTML = cardObj.determination + "<br>" + "DET";
    detAttribute.style.padding = "10px 15px 10px 15px";
    detAttribute.style.color = "black";
    detAttribute.style.border = "2px solid black";
    detAttribute.style.backgroundColor = "rgb(15, 199, 15)";
    detAttribute.style.borderRadius = "30px";
    detAttribute.style.position = "relative";

    atkAttribute.innerHTML = cardObj.attack + "<br>" + "ATK";
    atkAttribute.style.padding = "10px 15px 10px 15px";
    atkAttribute.style.color = "black";
    atkAttribute.style.border = "2px solid black";
    atkAttribute.style.backgroundColor = "rgb(242, 74, 47)";
    atkAttribute.style.borderRadius = "30px";
    atkAttribute.style.position = "relative";

    intAttribute.innerHTML = cardObj.intellect + "<br>" + "INT";
    intAttribute.style.padding = "10px 15px 10px 15px";
    intAttribute.style.color = "black";
    intAttribute.style.border = "2px solid black";
    intAttribute.style.backgroundColor = "rgb(243, 229, 31)";
    intAttribute.style.borderRadius = "30px";
    intAttribute.style.position = "relative";

    document.getElementById("cartinha").appendChild(app);
    app.appendChild(header);
    app.appendChild(pageTitle);
    app.appendChild(card);
    card.appendChild(cardTitle);
    cardTitle.appendChild(cardIcon);
    cardTitle.appendChild(cardName);
    cardTitle.appendChild(cardType);
    card.appendChild(cardImg);
    card.appendChild(attributes);
    attributes.appendChild(detAttribute);
    attributes.appendChild(atkAttribute);
    attributes.appendChild(intAttribute);


}
for (let i = 0; i < cards.length; i++) {
    game(i)
}
