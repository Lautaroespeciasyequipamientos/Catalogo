let cart = [];

function addToCart(itemId) {
    cart.push(itemId);
    alert('Item agregado al carrito!');
}

function sendOrder() {
    // Aquí puedes implementar la lógica para enviar el carrito al email
    // Por ejemplo, puedes usar Fetch API para enviar un POST a un servidor
    // que maneje la recepción de la orden y envío del email.
    // Ejemplo:
    // fetch('/send-order', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ items: cart })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert('Orden enviada con éxito!');
    //     } else {
    //         alert('Hubo un error al enviar la orden.');
    //     }
    // })
    // .catch(error => console.error('Error:', error));
    alert('Orden enviada con éxito!');
}