    class  ShoppingCart {
        // constructor (this permet d'accéder aux propriétés et méthodes de l'objet courant)
        constructor() {
            this.cart={};
            this.total=0
        }
        // les methodes de la class ShoppingCart
         addToCart(item, price) {
            if (this.cart[item]) {
                this.cart[item].quantity += 1;
            } else {
                this.cart[item] = { price: price, quantity: 1 };
            }
            this.updateCart();
        }
        updateCart() {
            const cartDiv = document.getElementById('cart');
            cartDiv.innerHTML = '';
            this.total = 0;
            for (const item in this.cart) {
            const itemTotal = this.cart[item].price * this.cart[item].quantity;
            this.total += itemTotal;
             cartDiv.innerHTML += `<div class="flex justify-between">
                                <span>${item} x ${this.cart[item].quantity}</span>
                                <span>$${itemTotal}</span>
                            </div>`;
                            }   
            
            document.getElementById('total').innerText = `Total: $${this.total}`;
            }
        proceedToCheckout() {
                alert('Proceeding to checkout with total: $' + this.total);
            }

    }




    
