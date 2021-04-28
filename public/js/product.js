function loadProductsbyId() {
	// let start = document.URL.search("2246/") + 5;
	let start = document.URL.search(".com/") + 5;
	let end = document.URL.search("/product");
	let id = parseInt(document.URL.slice(start, end));

	$.get("/api/myposts/" + id, (products) => {
		console.log(products);

		for (let p of products) {
			$("#container-product").append(
				$(`
          <center>
            <div class="col-6"><img src="${p.avatar}" width="500" height="600"></div>

            <br><br>
            <div><h2>Book Details</h2></div>
            <br>
          </center>

          <div class="row">
            <div class="col-3"></div>

            <div class="col-6">
              <h4>Book Name: ${p.name}</h4>
              <h4>Author: ${p.company}</h4>
              <h5>Product Id: ${p.id}</h5>  
              <h5>Price: Rs. ${p.price}</h5>
              <h5>Seller Username: ${p.username}</h5>
              Login in to Your Account to contact the Seller via CHAT ROOM
            </div>

            <div class="col-3"></div>
          </div>

          <br><br>
        `)
			);
		}
	});
}
