var cart = [];

async function addToCart(id) {
    async function getProduct() {
        try {
            const response = await fetch("http://localhost:5550/data");
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();
            const product = data[id];

            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }

            if (product) {
                product.count = 1;
                cart.push(product);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    await getProduct();
    localStorage.setItem("cart", JSON.stringify(cart));
    ShowProductItem();
    ShowProductCatPage();
    console.log(cart);
}

function loadCart() {
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }
}

function ShowProductItem() {
    loadCart();
    let cartList = document.querySelector(".shopping-list");
    let countItem = document.querySelector(".total-count");
    let total_count_items = document.querySelector(".total-count-items");
    cartList.innerHTML = '';

    cart.forEach(element => {
        let productItem = `
            <li class="d-flex align-items-center justify-content-between mb-3">
                <span class="d-flex align-items-center justify-content-around">
                    <a href="#" class="remove" title="Remove this item"><i class="fa fa-remove mr-2"></i></a>
                    <a class="cart-img" href="#"><img src="${element.image}" alt="#"></a>
                </span>
                <span class="d-block text-center">
                    <h4><a href="#">${element.title}</a></h4>
                    <p class="quantity">${element.count}x - <span class="amount">${element.price}</span></p>
                </span>
            </li>
        `;
        cartList.innerHTML += productItem;
    });

    countItem.innerHTML = cart.length;
    total_count_items.innerHTML = `${cart.length} Items`;
}

function ShowProductCatPage() {
    loadCart();
    let tableBodyCart = document.querySelector(".tableBodyCart");
    tableBodyCart.innerHTML = '';

    cart.forEach(element => {
        let productCart = `
             <tr>
                <td data-label="Account"><img src="${element.image}" alt=""></td>
                <td data-label="Due Date">${element.title}</td>
                <td data-label="Amount">${element.price}</td>
                <td data-label="Amount">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="decrementPrice input-group-text" onclick="decrement(${element.id})">-</span>
                        </div>
                        <input type="text" value="${element.count}" class="form-control text-center inputPrice increment" aria-label="Amount" data-id="${element.id}">
                        <div class="input-group-append">
                            <span class="incrementPrice input-group-text" onclick="increment(${element.id})">+</span>
                        </div>
                    </div>
                </td>
                <td data-label="Period" class="Amount_price" data-id="${element.id}">${(element.price * element.count).toFixed(2)}</td>
                <td scope="col"><i onclick="removeProduct(this)" class="fa-solid fa-trash-can"></i></td>
            </tr>
        `;
        tableBodyCart.innerHTML += productCart;
    });

    updateCartTotal();
}

document.addEventListener("DOMContentLoaded", () => {
    ShowProductItem();
    ShowProductCatPage();
});

function removeProduct(element) {
    let row = element.closest("tr");
    let index = row.rowIndex - 1;
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    row.remove();
    ShowProductItem();
}

function increment(id) {
    let item = cart.find(item => item.id == id);
    if (item) {
        item.count++;
        localStorage.setItem("cart", JSON.stringify(cart));

        let inputField = document.querySelector(`input[data-id="${id}"]`);
        let amountField = document.querySelector(`.Amount_price[data-id="${id}"]`);
        if (inputField && amountField) {
            inputField.value = item.count;
            amountField.textContent = (item.price * item.count).toFixed(2);
        }
    }
    updateCartTotal();
    applyCoupon();
}

function decrement(id) {
    let item = cart.find(item => item.id == id);
    if (item && item.count > 1) {
        item.count--;
        localStorage.setItem("cart", JSON.stringify(cart));

        let inputField = document.querySelector(`input[data-id="${id}"]`);
        let amountField = document.querySelector(`.Amount_price[data-id="${id}"]`);
        if (inputField && amountField) {
            inputField.value = item.count;
            amountField.textContent = (item.count * item.price).toFixed(2);
        }
    }
    updateCartTotal();
    applyCoupon();
}

function updateCartTotal() {
    let total = 0;
    cart.forEach(item => {
        total += item.count * item.price;
    });

    document.querySelector("#totalPrice").textContent = total.toFixed(2);
    applyCoupon();
}

function applyCoupon() {
    let code = document.getElementById("coponInput").value;
    let inputSavecobon = document.querySelector(".inputSavecobon");
    let discount = 0;
    const discountValue = 10.00;

    if (code.toLowerCase() === "khaled90" && inputSavecobon.checked) {
        discount = discountValue;
    } else if (code.toLowerCase() === "khaled90") {
        discount = discountValue - 5.00;
    } else if (inputSavecobon.checked) {
        discount = 0.00;
    } else {
        discount = 0.00;
    }


    let total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
    total -= discount;


    document.getElementById("disCountCopon").textContent = `$${discount.toFixed(2)}`;
    document.getElementById("disCountSave").textContent = `$${discount.toFixed(2)}`;
    document.querySelector("#totalPrice").textContent = total.toFixed(2);
    document.querySelector("#totalFinal").textContent = total.toFixed(2);
}