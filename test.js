var container = document.getElementById('container');
var row = document.getElementById('fruits');

fetch("grocery.json")
    .then(response => response.json())
    .then(json =>

        json.Fruits.forEach(element => {

            var cont = document.createElement('div');
            cont.setAttribute('class', 'col-lg-4 col-md-4 col-sm-6');

            var card = document.createElement('div');
            card.setAttribute('class', 'card');

            var cardImage = document.createElement('img');
            cardImage.setAttribute('class', 'card-img-top');

            var cardBody = document.createElement('div');
            cardBody.setAttribute('class', 'card-body');

            var hr = document.createElement('hr');

            var cardTitle = document.createElement('h5');
            cardTitle.setAttribute('class', 'card-title');

            var cardText = document.createElement('p');
            cardText.setAttribute('class', 'card-text');

            var price = document.createElement('b');
            price.textContent = "P " + element.price;

            var button = document.createElement('button');
            button.setAttribute('class', 'btn btn-info');
            button.textContent = "Add to Cart";

            cardImage.setAttribute('src', element.image);
            cardTitle.textContent = element.name;
            cardText.textContent = "P " + element.price + element.unit;

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(hr);
            cardBody.appendChild(cardText);
            cardBody.appendChild(button);

            card.appendChild(cardImage);
            card.appendChild(cardBody);

            cont.appendChild(card);

            row.appendChild(cont);

            // console.log(element.name);
            // console.log("P " + element.id + element.unit);
        })
    );