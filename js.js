    function game(cardObj) {
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
        const buy = document.createElement("button");

        app.style.display = "grid";
        app.style.float = "left";
        app.setAttribute("id", cardObj.id);
        app.style.margin = "25px";

        header.style.color = "black";

        pageTitle.style.fontFamily = "fantasy";

        card.style.alignContent = "center";
        card.style.border = "2px solid black";
        card.style.backgroundColor = "rgb(255, 143, 5)";
        card.style.borderRadius = "20px";
        card.style.width = "63mm";
        card.style.height = "88mm";
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


        cardTitle.style.margin = "5px 2px 0px 2px";
        cardTitle.style.display = "block";
        cardTitle.style.columns = "3";
        cardTitle.style.height = "40px";

        if (cardObj.akuma == true) {
            cardIcon.setAttribute("src", "/assets/raspberry.png");
            cardIcon.style.position = "relative";
            cardIcon.style.height = "35px";

        } else {
            cardIcon.setAttribute("src", "/assets/raspberry.png");
            cardIcon.style.opacity = "0%";
            cardIcon.style.position = "relative";
            cardIcon.style.height = "35px";

        };

        cardName.innerHTML = cardObj.name;
        cardName.style.display = "flex";
        cardName.style.fontSize = "28px";
        cardName.style.fontFamily = "fantasy";
        cardName.style.color = "black";
        cardName.style.display = "relative";

        cardType.innerHTML = cardObj.type;
        cardType.style.position = "static";
        cardType.style.textAlign = "center";
        cardType.style.float = "right";
        cardType.style.width = "28px";
        cardType.style.color = "black";
        cardType.style.border = "2px solid black";
        cardType.style.backgroundColor = "rgb(5, 172, 255)";
        cardType.style.borderRadius = "30px";
        cardType.style.fontSize = "25px";
        cardType.style.fontFamily = "fantasy";
        cardType.style.display = "relative";

        cardImg.setAttribute("src", cardObj.img);
        cardImg.style.justifyContent = "center";
        cardImg.style.alignItems = "center";

        cardImg.style.position = "static";
        cardImg.style.marginTop = "20px";
        cardImg.style.width = "100%";
        cardImg.style.height = "40mm";

        attributes.style.margin = "10px 2px 0px 2px";
        attributes.style.display = "block";
        attributes.style.position = "relative";
        attributes.style.columns = "3";
        attributes.style.textAlign = "center";
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

        buy.innerHTML ="BUY";
        buy.style.padding = "2px 2px 2px 2px";
        buy.style.color = "black";
        buy.style.border = "2px solid black";
        buy.style.backgroundColor = "white";
        buy.style.borderRadius = "30px";
        buy.style.display = "grid";
        buy.style.textAlign = "center";
        buy.style.cursor = "pointer";
        buy.style.fontFamily = "fantasy";
        buy.style.fontSize = "20px";
        buy.style.width = "63mm";
        buy.style.marginTop = "20px";
        buy.style.boxShadow = "3px 3px 10px black";
        buy.style.outline = "none";
        buy.onclick = function () {
            if (buy.innerHTML == "BUY") {
                this.innerHTML = "SELL";
                this.style.color = "white";
                this.style.backgroundColor = "black";
                card.style.filter = "grayscale(100%)";
            } else {
                this.innerHTML = "BUY";
                this.style.color = "black";
                this.style.backgroundColor = "white";
                card.style.filter = "grayscale(0%)";

            }
            };

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
        app.appendChild(buy);
        
        return app;
    
    }
    


    function myFunction() {
        const text = document.getElementById("search").value;
        cards.forEach((card,index) => {
            const cartona = App.elements.cards[index];
            console.log(index);
            if(card.name.toLowerCase().includes(text.toLowerCase())){
                cartona.classList.remove("hide")
            } else{
                cartona.classList.add("hide")
            }
        })
    }
