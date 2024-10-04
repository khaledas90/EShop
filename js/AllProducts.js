function renderProducts(products) {
    const AllProducts = document.querySelector(".AllProductsPage");
    AllProducts.innerHTML = "";
    products.forEach((product) => {
        const productHTML = `
            <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                <div class="single-product" id="${product.id}">
                    <div class="product-img text-center">
                        <a href="product-details.html">
                            <img class="default-img w-80" id="image${product.id}" src="${product.image}" alt="${product.title}">
                        </a>
                        <div class="button-head d-flex align-items-center justify-content-around">
                            <div class="product-action text-center d-flex align-items-center justify-content-around">
                                <a data-toggle="modal" href="#"><i class="fa-solid fa-hurricane ml-2"></i></a>
                                <a title="Wishlist" href="#"><i class="fa-regular fa-heart ml-2"></i></a>
                                <a title="Compare" href="#"><i class="fa-solid fa-chart-simple ml-2"></i></a>
                            </div>
                            <div class="product-action-2">
                                <span onclick="addToCart(${product.id})" title="Add to cart">Add to cart</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-content">
                        <h3><a href="product-details.html">${product.title}</a></h3>
                        <div class="product-price text-center mt-2">
                            <span>$${product.price}</span>
                        </div>
                    </div>
                </div>
            </div>`;
        AllProducts.innerHTML += productHTML;
    });
}