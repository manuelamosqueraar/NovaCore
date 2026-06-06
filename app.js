const supabaseUrl = 'https://ibyigsxmfvnjgrtjvqeu.supabase.co';
const supabaseKey = 'sb_publishable_-T_1uvZ_GJnBDWCglqKjHQ_w-w5h6NB';
const _supabase = window.supabase
    ? window.supabase.createClient(supabaseUrl, supabaseKey)
    : null;

const CART_COUNT_KEY = 'novaCoreCartCount';
const CART_TOTAL_KEY = 'novaCoreCartTotal';

const readStoredNumber = (key) => {
    try {
        return Number(window.localStorage.getItem(key)) || 0;
    } catch {
        return 0;
    }
};

const writeStoredNumber = (key, value) => {
    try {
        window.localStorage.setItem(key, String(value));
    } catch {
        // LocalStorage puede no estar disponible en algunos contextos.
    }
};

let total = readStoredNumber(CART_TOTAL_KEY);
let count = readStoredNumber(CART_COUNT_KEY);

const formatCurrency = (value) => `$${value.toFixed(2)}`;

const updateCartUI = () => {
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');
    const checkoutTotal = document.getElementById('checkout-total-val');

    if (cartCount) cartCount.innerText = count;
    if (totalPrice) totalPrice.innerText = formatCurrency(total);
    if (checkoutTotal) checkoutTotal.innerText = formatCurrency(total);

    writeStoredNumber(CART_COUNT_KEY, count);
    writeStoredNumber(CART_TOTAL_KEY, total);
};

const clearCart = () => {
    count = 0;
    total = 0;
    updateCartUI();
};

const openModal = (modal) => {
    if (!modal) return;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = (modal) => {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
};

const getProductPrice = (element) => {
    if (element.dataset.price) return Number(element.dataset.price);

    const card = element.closest('.product-card, .product-item, .product-info-panel');
    const priceElement = card?.querySelector('.price, .product-price');
    const priceText = priceElement?.innerText ?? '0';

    return Number(priceText.replace(/[^0-9.]/g, '')) || 0;
};

const addProductToCart = (source) => {
    const price = getProductPrice(source);
    const selectedSize = source.closest('.product-info-panel')?.querySelector('.size-box.active')?.textContent.trim();

    count++;
    total = Math.round((total + price) * 100) / 100;
    updateCartUI();

    alert(selectedSize ? `Producto añadido. Talla ${selectedSize}.` : 'Producto añadido.');
};

const insertIntoSupabase = async (table, payload) => {
    if (!_supabase) {
        throw new Error('Supabase no está disponible en esta página.');
    }

    const { error } = await _supabase.from(table).insert([payload]);
    if (error) throw error;
};

document.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById('contactModal');
    const checkoutModal = document.getElementById('checkoutModal');
    const linkContacto = document.getElementById('link-contacto');
    const closeContact = document.getElementById('closeContact');
    const openCheckout = document.getElementById('openCheckout');
    const closeCheckout = document.getElementById('closeCheckout');
    const navbar = document.querySelector('.navbar');

    updateCartUI();

    document.querySelectorAll('.btn-add, .btn-main-add-cart').forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            addProductToCart(item);
        });
    });

    if (linkContacto && contactModal) {
        linkContacto.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(contactModal);
        });
    }

    if (closeContact) {
        closeContact.addEventListener('click', () => closeModal(contactModal));
    }

    if (openCheckout) {
        openCheckout.addEventListener('click', (e) => {
            e.preventDefault();

            if (!checkoutModal) {
                alert(count > 0 ? 'Producto añadido al carrito.' : 'El carrito está vacío.');
                return;
            }

            if (count > 0) {
                openModal(checkoutModal);
            } else {
                alert('El carrito está vacío.');
            }
        });
    }

    if (closeCheckout) {
        closeCheckout.addEventListener('click', () => closeModal(checkoutModal));
    }

    window.addEventListener('click', (event) => {
        if (event.target === contactModal) closeModal(contactModal);
        if (event.target === checkoutModal) closeModal(checkoutModal);
    });

    window.addEventListener('scroll', () => {
        if (!navbar) return;
        navbar.classList.toggle('scroll-activo', window.scrollY > 50);
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            try {
                await insertIntoSupabase('contactos', { nombre, email, mensaje });
                alert('¡Gracias! Te contactaremos pronto.');
                closeModal(contactModal);
                contactForm.reset();
            } catch (error) {
                console.error(error);
                alert('Error al enviar: ' + error.message);
            }
        });
    }

    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const nombre_cliente = document.getElementById('pay-name').value;
            const email_cliente = document.getElementById('pay-email').value;

            try {
                await insertIntoSupabase('pagos', {
                    nombre_cliente,
                    email: email_cliente,
                    total
                });

                clearCart();
                alert('Pago procesado y registrado en la base de datos.');
                closeModal(checkoutModal);
                paymentForm.reset();
            } catch (error) {
                console.error('Error al registrar pago:', error);
                alert('Error al procesar el pago: ' + error.message);
            }
        });
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const emailValue = document.getElementById('newsletter-email').value;

            try {
                await insertIntoSupabase('suscriptores', { email: emailValue });
                alert('¡Bienvenido al club NovaCore! Ya estás registrado.');
                newsletterForm.reset();
            } catch (error) {
                console.error('Error en suscripción:', error);
                alert('Hubo un error: ' + error.message);
            }
        });
    }

    const searchBtn = document.querySelector('.search-btn');
    const searchBar = document.getElementById('search-bar-container');
    const closeSearch = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');

    if (searchBtn && searchBar) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchBar.classList.toggle('search-bar-visible');

            if (searchBar.classList.contains('search-bar-visible')) {
                searchInput?.focus();
            }
        });
    }

    if (closeSearch && searchBar) {
        closeSearch.addEventListener('click', () => {
            searchBar.classList.remove('search-bar-visible');
            if (searchInput) searchInput.value = '';

            document.querySelectorAll('.product-item').forEach((producto) => {
                producto.style.display = 'flex';
            });
        });
    }

    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key !== 'Enter') return;

            e.preventDefault();

            const terminoBusqueda = searchInput.value.toLowerCase().trim();
            const productos = document.querySelectorAll('#productos .product-item');

            productos.forEach((producto) => {
                const tituloProducto = producto.querySelector('.product-title')?.textContent.toLowerCase() ?? '';
                producto.style.display = !terminoBusqueda || tituloProducto.includes(terminoBusqueda)
                    ? 'flex'
                    : 'none';
            });

            searchBar?.classList.remove('search-bar-visible');
            document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    document.querySelectorAll('.size-box').forEach((button) => {
        button.addEventListener('click', () => {
            const wrap = button.closest('.size-selector-wrap');
            const sizeButtons = wrap?.querySelectorAll('.size-box') ?? [];

            sizeButtons.forEach((item) => {
                item.classList.remove('active');
                item.setAttribute('aria-pressed', 'false');
            });

            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
        });
    });

    const slider = document.querySelector('.categories-slider-wrapper');
    if (slider) {
        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    }
});
