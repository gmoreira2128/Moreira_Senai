let cart = [];
const cartButton = document.getElementById('cartButton');
const cartModal = document.getElementById('cartModal');
const closeModal = document.getElementById('close');
const cartItems = document.getElementById('cartItems');
const totalPriceElem = document.getElementById('totalPrice');

document.querySelectorAll('.alugar-btn').forEach(button => {
    button.addEventListener('click', fuction(){
        const title = this.getAttribute('data-title');
        const price = parseFloat(this.getAttribute('data-price'));

        const movie = cart.find(item => item.title === title);
        if(movie){
            movie.quantity += 1;
        } else{
            cart.push({ title, price, quantity: 1 });
        }
        updateCart();
    });
});

cartButton.addEventListener('click', function(){
    cartModal.style.display = 'block';
});

closeModal.addEventListener('click', function(){
    cartModal.style.display = 'none';
})

window.addEventListener('click', function(event){
    if(event.target === cartModal){
        cartModal.style.display = 'none';
    }
});


function updateCart(){
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.title} - R$ ${item.price},00 x ${item.quantity}`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    totalPriceElem.textContent = totalPrice.toFixed(2);
}