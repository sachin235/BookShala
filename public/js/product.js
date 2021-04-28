function loadProductsbyId() {
	let start = document.URL.search("2246/") + 5;
	// let start = document.URL.search(".com/") + 5;
	let end = document.URL.search("/product");
	let id = parseInt(document.URL.slice(start, end));

	$.get("/api/myposts/" + id, (products) => {
		console.log(products);

		for (let p of products) {
			$("#products-container").append(
				$(`
          <center>
          <div class="col-4">
            <div class="card m-2"> 
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
                </div>
            </div>
          </div>
          </center>
          `)
			);

			$("#container-product").append(
				$(`
          <div><img src="${p.avatar}"></div>
          </div>
          <div>
            <h2>Book Details</h2>
            <div class="card-body">
              <h4 class="card-title">Product Id : ${p.id}</h4>  
              <h4 class="card-title">Name : ${p.name}</h4>
              <h4><p class="card-text">
                Author/Company : ${p.company}
                </p></h4>
              <h4 class="card-subtitle mb-2">Price : Rs. ${p.price}</h4>
              <h4 class="card-subtitle mb-2">Seller : ${p.username}</h4>
                Login in to Your Account to contact the Seller Via CHAT ROOM
            </div>
          </div>
          `)
			);
		}
	});
}
