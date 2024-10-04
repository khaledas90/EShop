var WishList = [];


async function addToWishList(id) {
    async function getWishListProduct() {
        try {
            const response = await fetch("http://localhost:5550/data");
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            const product = data[id];

            if (localStorage.getItem("WishList")) {
                WishList = JSON.parse(localStorage.getItem("WishList"));
            }

            if (product) {
                product.count = 1;
                WishList.push(product);
            }

            console.log(WishList);

        } catch (error) {
            console.error(error.message);
        }
    }

    await getWishListProduct();
    localStorage.setItem("WishList", JSON.stringify(WishList));
    ShowProductItem();
    ShowProductCatPage();
    console.log(WishList);
}


function loadWishList() {
    if (localStorage.getItem("WishList")) {
        WishList = JSON.parse(localStorage.getItem("WishList"));
    }
}


function ShowProductItem() {
    loadCart();
    let cartList = document.querySelector(".AllWishList");
    let countItem = document.querySelector(".total-count");
    let total_count_items = document.querySelector(".total-count-items");
    cartList.innerHTML = '';

    cart.forEach(product => {
        let productItem = `
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
            </div>
        `;
        cartList.innerHTML += productItem;
        40000000000000000000000004444444444000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
    });

    countItem.innerHTML = cart.length;
    total_count_items.innerHTML = `${cart.length} Items`;
}