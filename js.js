
        let cart = {};
        let total = 0;

        function addToCart(item, price) {
            if (cart[item]) {
                cart[item].quantity += 1;
            } else {
                cart[item] = { price: price, quantity: 1 };
            }
            updateCart();
        }

        function updateCart() {
            const cartDiv = document.getElementById('cart');
            cartDiv.innerHTML = '';
            total = 0;

            for (const item in cart) {
                const itemTotal = cart[item].price * cart[item].quantity;
                total += itemTotal;
                cartDiv.innerHTML += `<div class="flex justify-between">
                    <span>${item} x ${cart[item].quantity}</span>
                    <span>$${itemTotal}</span>
                </div>`;
            }

            document.getElementById('total').innerText = `Total: $${total}`;
        }

        function proceedToCheckout() {
            alert('Proceeding to checkout with total: $' + total);
        }
    
