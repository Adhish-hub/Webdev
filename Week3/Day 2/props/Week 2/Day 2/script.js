const products = [
    { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
    { id: 2, name: "Shirt", price: 1200, category: "Clothing" },
    { id: 3, name: "Phone", price: 30000, category: "Electronics" },
    { id: 4, name: "Shoes", price: 2500, category: "Footwear" },
    { id: 5, name: "Watch", price: 2000, category: "Accessories" }
];

let view = "grid";

function renderProducts(data) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    data.forEach(product => {
        const div = document.createElement("div");
        div.className = view === "grid" ? "grid-item" : "list-item";

        div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <p>Category: ${product.category}</p>
    `;

        container.appendChild(div);
    });
}

function filterCategory(category) {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
}

function filterPrice(maxPrice) {
    const filtered = products.filter(p => p.price <= maxPrice);
    renderProducts(filtered);
}

function searchProduct(keyword) {
    const result = products.filter(p =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
    );
    renderProducts(result);
}

function sortByPrice(order) {
    const sorted = [...products].sort((a, b) => {
        return order === "low" ? a.price - b.price : b.price - a.price;
    });

    renderProducts(sorted);
}

function toggleView(type) {
    view = type;
    renderProducts(products);
}