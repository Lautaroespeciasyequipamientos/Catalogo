document.addEventListener('DOMContentLoaded', function() {
    const orderItems = document.getElementById('orderItems');
    const totalPrice = document.getElementById('totalPrice');
    const items = JSON.parse(localStorage.getItem('cart')) || [];

    items.forEach(item => {
        const itemElement = document.createElement('li');
        itemElement.textContent = `Item ${item} - $100.00 ARS`; // Ajusta el precio según sea necesario
        orderItems.appendChild(itemElement);
    });

    totalPrice.textContent = `$${items.length * 100.00} ARS`; // Ajusta el precio según sea necesario
});