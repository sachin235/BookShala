let set;

$(() => {
	test = document.URL;
	let res1 = test.split("/0-");
	let res2 = res1[1].split("/");
	let res3 = res2[0].split("-");
	res3 = res3.sort();
	set = new Set(res3);

	for (id of set.values()) {
		console.log(id);
		$.get("/api/myposts/" + id, (products) => {
			// console.log(products);
			for (let p of products) {
				$("#products-container").append(
					$(`
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
            `)
				);
				$("#bill").append(
					$(`
            <tr>
            <th scope="row">${p.id}</th>
            <td>${p.name}</td>
            <td>${p.price}</td>
            <td>${p.company}</td>
            <td>${p.username}</td>
            </tr>
          `)
				);
			}

			let table = document.getElementById("table"),
				sumVal = 0;

			for (let i = 1; i < table.rows.length; i++) {
				sumVal = sumVal + parseInt(table.rows[i].cells[2].innerHTML);
			}

			document.getElementById(
				"numberofitems"
			).innerHTML = `<h2>You have added ${
				table.rows.length - 1
			} products to your cart .</h2>`;
			document.getElementById(
				"totalamount"
			).innerHTML = `<h2>Total Sum Value = Rs. ${sumVal}</h2>`;
			console.log(sumVal);

			function generateHexString(length) {
				var ret = "";
				while (ret.length < length) {
					ret += Math.random().toString(16).substring(2);
				}
				return ret.substring(0, length);
			}

			document.getElementById("receiptid").innerText = generateHexString(26);
		});
	}
});
