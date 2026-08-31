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
    document.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const mainElement = document.querySelector('.main');
    const backgroundElement = document.querySelector('.background-image');

    if (scrollPosition > 100) { // Ajusta este valor según tu necesidad
        mainElement.style.height = 'auto';
        backgroundElement.style.backgroundImage = "url('../images/fondohome2.png')";
    } else {
        mainElement.style.height = '100vh';
        backgroundElement.style.backgroundImage = "url('../images/fondohome.png')";
    }
});
}

//COMPORTAMIENTO DE MENU
const IconMenu = document.getElementById('iconMenu')
const CntMenu = document.getElementById('cntMenu')

const OptionsMenu = document.querySelectorAll('.optionMenu');

const sections = document.querySelectorAll('.fade-up')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible')
  });
}, { threshold: 0.3 })

sections.forEach(sec => observer.observe(sec))

IconMenu.addEventListener('click', () => {
  IconMenu.classList.add('hiddenIcon')
  IconMenu.classList.remove('visibleIcon')
  
  CntMenu.classList.add('visibleMenu')
  CntMenu.classList.remove('hiddenMenu')
})

OptionsMenu

OptionsMenu.forEach(function (opcion) {
  opcion.addEventListener('click', function (event) {

    IconMenu.classList.remove('hiddenIcon')
    IconMenu.classList.add('visibleIcon')
    
    CntMenu.classList.remove('visibleMenu')
    CntMenu.classList.add('hiddenMenu')

  });


});
