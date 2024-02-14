fetch("products.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector('#data-output');
    let out = '';
    for(let product of products){
        out +=`
        <tr>
        <td>${product.brand}</td>
        <td>${product.model}</td>
        <td>${product.year}</td>
        <td>${product.price}</td>
        <td>${product.fuel}</td>
        </tr>
        `
    }
    placeholder.innerHTML = out;
})