document.addEventListener("DOMContentLoaded", function() {
    getProduct();
});

async function getProduct() {
    try {
        const response = await fetch("https://eshop-six-murex.vercel.app/js/data.json");
     
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const data = await response.json();
           
        
        let finalData = data.data;
        const navProducts = document.querySelectorAll(".navProducts");

        navProducts.forEach((navProduct) => {
            navProduct.classList.contains("All") && renderProducts(finalData);
            navProduct.addEventListener("click", () => {
                if (navProduct.classList.contains("All")) {
                    finalData = data.data.filter((product) => {
                        return product;
                    });
                    console.log(finalData);
                } else if (navProduct.classList.contains("man")) {
                    finalData = data.data.filter((product) => {
                        return product.category === "man";
                    });
                    console.log(finalData);
                } else if (navProduct.classList.contains("women")) {
                    finalData = data.data.filter((product) => {
                        return product.category === "women";
                    });
                } else if (navProduct.classList.contains("kids")) {
                    finalData = data.data.filter((product) => {
                        return product.category === "kids";
                    });
                } else if (navProduct.classList.contains("Prices")) {
                    finalData = data.data.filter((product) => {
                        return product.category === "Prices";
                    });
                } else if (navProduct.classList.contains("Accessories")) {
                    finalData = data.data.filter((product) => {
                        return product.category === "Accessories";
                    });
                }
                renderProducts(finalData);
            });
        });
    } catch (error) {
        console.error(error.message);
    }
}

function renderProducts(products) {
    const AllProducts = document.querySelector(".AllProducts");
    AllProducts.innerHTML = "";
    let i = 0
    products.forEach((product) => {
        let products = ` <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
    <div class="single-product " id=${product.id}>
        <div class="product-img text-center">
            <a href="product-details.html">
                <img class="default-img w-80" id='image${product.id}' src=${product.image} alt="#">
            </a>
            <div class="button-head d-flex align-items-center justify-content-around"
                dir="rtl">
                <div
                    class="product-action text-center d-flex align-items-center justify-content-around">
                    <a data-toggle="modal" href="#"><i
                            class="fa-solid fa-hurricane ml-2"></i></a>
                    <a title="Wishlist" href="#"><i
                            class="fa-regular fa-heart ml-2" onclick="addToWishList(${i++})"></i></a>
                    <a title="Compare" href="#"><i
                            class="fa-solid fa-chart-simple ml-2"></i> </a>
                </div>
                <div class="product-action-2">
                    <span onclick="addToCart(${i++})" title="Add to cart" href="#">Add to cart</span>
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
        AllProducts.innerHTML += products;
    });
}

getProduct();
