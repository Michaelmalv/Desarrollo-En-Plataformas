const products= document.getElementById("productos");
console.log(products);
products.classList.add("nueva");
//products.innerHTML="<p> hola mundo </p";
let element = document.createElement("p");
element.textContent = "Nuevo mundo";
products.appendChild(element);
