let linkcart = "/0/cart";

var set1 = new Set();
$(() => {
	let cart = document.getElementById("cart");
	setInterval(function () {
		cart.innerHTML = `<a class="navbar-brand" href=${linkcart}>
    &nbsp;
    <img class="d-inline cart" src="https://image.flaticon.com/icons/svg/711/711192.svg">Cart</a>`;
	}, 1000);
});

function loadProducts() {
	$.get("/product", (products) => {
		// console.log(products);
		for (let p of products) {
			$("#products-container").append(
				$(`
          <div class="col-md-4 d-flex p-2">
            <div class="card mb-2"id="prod"> 
            <a href="/${p.id}/product">
            <img src="${p.avatar}" class="card-img-top">
            </a>
              <div class="card-body">
                <h5 class="card-title">${p.name}</h5>
                <p class="card-text">
                  ${p.company}
                </p>
                <h6 class="card-subtitle mb-2 text-muted">Rs. ${p.price}</h6>
                <h6 class="card-subtitle mb-2 text-muted">${p.username}</h6>
                <button onclick="btnclicked(${p.id})" id="${p.id}">Add to Cart</button>
                </div>
            </div>
          </div>
          
          `)
			);
		}

		set1.add(0);
		$("#carousel-inner").append(
			$(`
        <div class="carousel-item active">
        <a href="/${products[0].id}/product">
        <img class="d-block w-50 crousel" src="${products[0].avatar}" alt="Second slide">
        </a>
        </div>
      `)
		);

		for (let i = 0; i < 5; i++) {
			set1.add(parseInt(Math.random() * 10) % 5);
		}

		for (id of set1.values()) {
			if (id != 0) {
				$("#carousel-inner").append(
					$(`
          <div class="carousel-item">
          <a href="/${products[id].id}/product">
          <img class="d-block w-75 crousel" src="${products[id].avatar}" alt="Second slide">
          </a>
          </div>
        `)
				);
			}
		}
	});
}

function btnclicked(product) {
	linkcart = linkcart.substr(0, 2) + "-" + `${product}` + linkcart.substr(2);
	document.getElementById(`${product}`).innerText = "Added to Cart";
}
var TRange = null;

function findString(str) {
	if (parseInt(navigator.appVersion) < 4) return;
	var strFound;
	if (window.find) {
		strFound = self.find(str);
		if (!strFound) {
			strFound = self.find(str, 0, 1);
			while (self.find(str, 0, 1)) continue;
		}
	} else if (navigator.appName.indexOf("Microsoft") != -1) {
		if (TRange != null) {
			TRange.collapse(false);
			strFound = TRange.findText(str);
			if (strFound) TRange.select();
		}
		if (TRange == null || strFound == 0) {
			TRange = self.document.body.createTextRange();
			strFound = TRange.findText(str);
			if (strFound) TRange.select();
		}
	} else if (navigator.appName == "Opera") {
		alert("Opera browsers not supported, sorry...");
		return;
	}

	if (!strFound) alert("String '" + str + "' not found!");
	return;
}
