const supabaseUrl = 'https://ibyigsxmfvnjgrtjvqeu.supabase.co'
const supabaseKey = 'sb_publishable_-T_1uvZ_GJnBDWCglqKjHQ_w-w5h6NB'
const _supabase = supabase.createClient(supabaseUrl, supabaseKey)

let total = 0;
let count = 0;

// --- LÓGICA DEL CARRITO ---
document.querySelectorAll('.btn-add').forEach(btn => {
    btn.onclick = (e) => {
        const card = e.target.closest('.product-card');
        const priceText = card.querySelector('.price').innerText;
        const price = parseFloat(priceText.replace('$', '').replace(',', ''));
        
        count++;
        total += price;

        document.getElementById('cart-count').innerText = count;
        
        if(document.getElementById('total-price')) {
            document.getElementById('total-price').innerText = `$${total.toFixed(2)}`;
        }

        const payTotalDisplay = document.getElementById('checkout-total-val');
        if(payTotalDisplay) {
            payTotalDisplay.innerText = `$${total.toFixed(2)}`;
        }

        alert("Producto añadido.");
    };
});

// --- MODALES (ABRIR Y CERRAR) ---
const cModal = document.getElementById("contactModal");
const pModal = document.getElementById("checkoutModal");


const openContact = document.getElementById("openContact");
if(openContact) openContact.onclick = (e) => {
    e.preventDefault();
    cModal.style.display = "block";
};

const openCheckout = document.getElementById("openCheckout");
if(openCheckout) openCheckout.onclick = (e) => {
    e.preventDefault();
    if(count > 0) {
        pModal.style.display = "block";
    } else {
        alert("El carrito está vacío.");
    }
};

document.getElementById("closeContact").onclick = () => cModal.style.display = "none";
document.getElementById("closeCheckout").onclick = () => pModal.style.display = "none";

window.onclick = (e) => {
    if(e.target == cModal) cModal.style.display = "none";
    if(e.target == pModal) pModal.style.display = "none";
}



// --- contactanos ---


const contactForm = document.getElementById('contact-form');
if(contactForm) {
    contactForm.onsubmit = async (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        
        const { error } = await _supabase.from('contactos').insert([{ nombre, email, mensaje }]);
        
        if(!error) { 
            alert("¡Gracias! Te contactaremos pronto."); 
            cModal.style.display = "none";
            contactForm.reset();
        } else {
            console.error(error);
            alert("Error al enviar: " + error.message);
        }
    };
}


//borra



/* --- LÓGICA DEL MODAL DE CONTACTO --- */

// Seleccionamos los elementos
const btnAbrirContacto = document.getElementById('link-contacto'); // El link del menú
const ventanaContacto = document.getElementById('contactModal');   // El contenedor oscuro
const btnCerrarContacto = document.querySelector('.close-container'); // Tu botón circular con la X

// 1. Función para ABRIR
btnAbrirContacto.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que la página recargue o salte
    ventanaContacto.style.display = "block";
    document.body.style.overflow = "auto"; // Bloquea el scroll del fondo
});

// 2. Función para CERRAR con la X
btnCerrarContacto.addEventListener('click', () => {
    ventanaContacto.style.display = "none";
    document.body.style.overflow = "auto"; // Devuelve el scroll a la página
});

// 3. Función para CERRAR si hacen clic en lo oscuro (fuera de la tabla)
window.addEventListener('click', (event) => {
    if (event.target == ventanaContacto) {
        ventanaContacto.style.display = "none";
        document.body.style.overflow = "auto";
    }
});




// pagos

const paymentForm = document.getElementById('payment-form');
if(paymentForm) {
    paymentForm.onsubmit = async (e) => {
        e.preventDefault();

       
        const nombre_cliente = document.getElementById('pay-name').value;
        const email_cliente = document.getElementById('pay-email').value;

       
        const { error } = await _supabase
            .from('pagos')
            .insert([
                { 
                    nombre_cliente: nombre_cliente, 
                    email: email_cliente, 
                    total: total 
                }
            ]);

        if(!error) {
            alert("¡Pago Procesado y Registrado en la Base de Datos!");
            location.reload(); 
        } else {
            console.error("Error al registrar pago:", error);
            alert("Error al procesar el pago: " + error.message);
        }
    };
}





/* --- LÓGICA DE TABLA FLOTANTE --- */
const openCart = document.getElementById('openCheckout');
const checkoutModal = document.getElementById('checkoutModal');
const closeCart = document.getElementById('closeCheckout');

// 1. Abrir la tabla flotante
openCart.addEventListener('click', () => {
    checkoutModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo para que no se mueva
});

// 2. Cerrar la tabla al darle a la X
closeCart.addEventListener('click', () => {
    checkoutModal.style.display = "none";
    document.body.style.overflow = "auto";   // Devuelve el scroll a la página
});

// 3. Opcional: Cerrar si el usuario hace clic fuera de la tabla (en lo oscuro)
window.addEventListener('click', (event) => {
    if (event.target == checkoutModal) {
        checkoutModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});





// --- LÓGICA DE SUSCRIPCIÓN (FOOTER) ---
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
    newsletterForm.onsubmit = async (e) => {
        e.preventDefault();
        
        const emailValue = document.getElementById('newsletter-email').value;

        
        const { error } = await _supabase
            .from('suscriptores') 
            .insert([{ email: emailValue }]);

        if (!error) {
            alert("¡Bienvenido al club NovaCore! Ya estás registrado.");
            newsletterForm.reset(); 
        } else {
            console.error("Error en suscripción:", error);
            
            alert("Hubo un error: " + error.message);
        }
    };
}

