function loadProductsbyId() {
	// let start = document.URL.search("2246/") + 5;
	let start = document.URL.search(".com/") + 5;
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
            <h1>Details</h1>
            <div class="card-body">
              <h3 class="card-title">Product Id : ${p.id}</h5>  
              <h3 class="card-title">Product Name : ${p.name}</h5>
              <h3><p class="card-text">
                Product Compay : ${p.company}
                </p></h3>
              <h3 class="card-subtitle mb-2">Product Price : Rs. ${p.price}</h6>
              <h3 class="card-subtitle mb-2">Product Seller Username : ${p.username}</h6>
                Login in to Your Account To know more about the product by Contacting the Seller Via CHAT ROOM
            </div>
          </div>
          `)
			);
		}
	});
}
