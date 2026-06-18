const supabaseUrl = 'https://ibyigsxmfvnjgrtjvqeu.supabase.co';
const supabaseKey = 'sb_publishable_-T_1uvZ_GJnBDWCglqKjHQ_w-w5h6NB';
const _supabase = window.supabase
    ? window.supabase.createClient(supabaseUrl, supabaseKey)
    : null;

// ====================================================
// ESTADO DEL CARRITO
// ====================================================
const CART_KEY = 'novaCoreCart_v2';

const loadCart = () => {
    try {
        return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch { return []; }
};

const saveCart = (items) => {
    try { localStorage.setItem(CART_KEY, JSON.stringify(items)); } catch {}
};

let cartItems = loadCart(); // Array de { id, name, price, image, size, qty }

const getCartCount = () => cartItems.reduce((sum, i) => sum + i.qty, 0);
const getCartTotal = () => cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);
const formatCurrency = (v) => `$${v.toFixed(2)}`;

// ====================================================
// UI DEL CONTADOR (NAVBAR)
// ====================================================
const updateCartUI = () => {
    const count = getCartCount();
    document.querySelectorAll('#cart-count').forEach(el => {
        el.textContent = count;
    });
    saveCart(cartItems);
};

// ====================================================
// SIDEBAR DEL CARRITO
// ====================================================
const buildSidebar = () => {
    // Si ya existe no lo crea de nuevo
    if (document.getElementById('cart-sidebar')) return;

    const overlay = document.createElement('div');
    overlay.className = 'cart-overlay';
    overlay.id = 'cart-overlay';

    const sidebar = document.createElement('div');
    sidebar.className = 'cart-sidebar';
    sidebar.id = 'cart-sidebar';
    sidebar.innerHTML = `
        <div class="cart-sidebar-header">
            <div>
                <h2>TU CARRITO</h2>
                <span class="cart-item-total-count" id="cart-header-count">0 PIEZAS</span>
            </div>
            <button class="cart-close-btn" id="cart-close-btn">✕</button>
        </div>
        <div class="cart-items-list" id="cart-items-list"></div>
        <div class="cart-sidebar-footer">
            <div class="cart-subtotal-row">
                <span class="cart-subtotal-label">SUBTOTAL</span>
                <span class="cart-subtotal-value" id="cart-subtotal-val">$0.00</span>
            </div>
            <span class="cart-shipping-note">ENVÍO ESTÁNDAR GRATIS INCLUIDO</span>
            <button class="cart-checkout-btn" id="cart-go-checkout">
                <span>PROCEDER AL PAGO</span>
                <span>→</span>
            </button>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(sidebar);

    // Cerrar
    document.getElementById('cart-close-btn').addEventListener('click', closeCartSidebar);
    overlay.addEventListener('click', closeCartSidebar);

    // Ir al checkout
    document.getElementById('cart-go-checkout').addEventListener('click', () => {
        if (getCartCount() === 0) return;
        closeCartSidebar();
        const checkoutModal = document.getElementById('checkoutModal');
        if (checkoutModal) {
            checkoutModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            const totalEl = document.getElementById('checkout-total-val');
            if (totalEl) totalEl.textContent = formatCurrency(getCartTotal());
        }
    });
};

const openCartSidebar = () => {
    buildSidebar();
    renderCartItems();
    document.getElementById('cart-sidebar').classList.add('cart-open');
    document.getElementById('cart-overlay').classList.add('cart-open');
    document.body.style.overflow = 'hidden';
};

const closeCartSidebar = () => {
    const sidebar = document.getElementById('cart-sidebar');
    const overlay = document.getElementById('cart-overlay');
    if (sidebar) sidebar.classList.remove('cart-open');
    if (overlay) overlay.classList.remove('cart-open');
    document.body.style.overflow = 'auto';
};

// ====================================================
// RENDER DE ITEMS EN EL SIDEBAR
// ====================================================
const renderCartItems = () => {
    const list = document.getElementById('cart-items-list');
    const subtotal = document.getElementById('cart-subtotal-val');
    const headerCount = document.getElementById('cart-header-count');
    const checkoutBtn = document.getElementById('cart-go-checkout');
    if (!list) return;

    const count = getCartCount();
    const total = getCartTotal();

    if (headerCount) headerCount.textContent = `${count} ${count === 1 ? 'PIEZA' : 'PIEZAS'}`;
    if (subtotal) subtotal.textContent = formatCurrency(total);
    if (checkoutBtn) checkoutBtn.disabled = count === 0;

    if (cartItems.length === 0) {
        list.innerHTML = `
            <div class="cart-empty-state">
                <span class="empty-icon">🛍</span>
                <p>TU CARRITO ESTÁ VACÍO</p>
                <a href="index.html#productos">VER COLECCIÓN</a>
            </div>
        `;
        return;
    }

    list.innerHTML = cartItems.map((item, index) => `
        <div class="cart-item-card" data-index="${index}">
            <img class="cart-item-img" src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-size">${item.size ? 'TALLA: ' + item.size : 'TALLA ÚNICA'}</span>
                <span class="cart-item-price">${formatCurrency(item.price)}</span>
                <div class="cart-item-qty">
                    <button class="qty-btn" data-action="decrease" data-index="${index}">−</button>
                    <span class="qty-value">${item.qty}</span>
                    <button class="qty-btn" data-action="increase" data-index="${index}">+</button>
                </div>
            </div>
            <button class="cart-item-remove" data-index="${index}" aria-label="Eliminar">✕</button>
        </div>
    `).join('');

    // Eventos de cantidad y eliminar
    list.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const i = Number(btn.dataset.index);
            if (btn.dataset.action === 'increase') {
                cartItems[i].qty++;
            } else {
                cartItems[i].qty--;
                if (cartItems[i].qty <= 0) cartItems.splice(i, 1);
            }
            updateCartUI();
            renderCartItems();
        });
    });

    list.querySelectorAll('.cart-item-remove').forEach(btn => {
        btn.addEventListener('click', () => {
            const i = Number(btn.dataset.index);
            cartItems.splice(i, 1);
            updateCartUI();
            renderCartItems();
        });
    });
};

// ====================================================
// AGREGAR AL CARRITO
// ====================================================
const addProductToCart = (source) => {
    // Buscar tarjeta contenedora
    const card = source.closest('.product-info-panel, .cat-product-item, .product-item');

    // Precio
    let price = 0;
    if (source.dataset.price) {
        price = Number(source.dataset.price);
    } else if (card?.dataset.price) {
        price = Number(card.dataset.price);
    } else {
        const priceEl = card?.querySelector('.price, .product-price');
        price = Number(priceEl?.innerText?.replace(/[^0-9.]/g, '')) || 0;
    }

    // Talla
    const size = card?.querySelector('.size-box.active')?.textContent?.trim()
        || document.querySelector('.size-selector-wrap .size-box.active')?.textContent?.trim()
        || '';

    // Nombre
    const nameEl = card?.querySelector('.product-title, .product-main-name, .overlay-name');
    const name = nameEl?.textContent?.trim() || source.dataset.name || 'Producto NovaCore';

    // Imagen: primero data-image del botón (producto.js la pone ahí),
    // luego buscar en la tarjeta, luego en el panel visual de producto.html
    const image = source.dataset.image
        || card?.querySelector('.product-image-box img, img')?.getAttribute('src')
        || document.querySelector('#product-image, .main-3d-asset')?.getAttribute('src')
        || '';

    // Si ya existe mismo producto + talla, sumar qty
    const existing = cartItems.find(i => i.name === name && i.size === size);
    if (existing) {
        existing.qty++;
    } else {
        cartItems.push({ id: Date.now(), name, price, image, size, qty: 1 });
    }

    updateCartUI();
    openCartSidebar();
};

// ====================================================
// SUPABASE
// ====================================================
const insertIntoSupabase = async (table, payload) => {
    if (!_supabase) throw new Error('Supabase no está disponible.');
    const { error } = await _supabase.from(table).insert([payload]);
    if (error) throw error;
};

// ====================================================
// MODALES (contacto)
// ====================================================
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

// ====================================================
// INIT
// ====================================================
document.addEventListener('DOMContentLoaded', () => {
    const contactModal = document.getElementById('contactModal');
    const checkoutModal = document.getElementById('checkoutModal');
    const loginModal = document.getElementById('loginModal');
    const linkContacto = document.getElementById('link-contacto');
    const closeContact = document.getElementById('closeContact');
    const openCheckout = document.getElementById('openCheckout'); // ícono del carrito
    const closeCheckout = document.getElementById('closeCheckout');
    const openLogin = document.getElementById('openLogin');
    const closeLogin = document.getElementById('closeLogin');
    const loginForm = loginModal ? loginModal.querySelector('.form-box.Login form') : null;
    const registerForm = loginModal ? loginModal.querySelector('.form-box.Register form') : null;
    const modalContainer = loginModal ? loginModal.querySelector('.container') : null;
    const loginLink = loginModal ? loginModal.querySelector('.SignInLink') : null;
    const registerLink = loginModal ? loginModal.querySelector('.SignUpLink') : null;
    const navbar = document.querySelector('.navbar');

    updateCartUI();
    buildSidebar();

    // Botones "Añadir al carrito" estáticos
    document.querySelectorAll('.btn-add, .btn-main-add-cart').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            addProductToCart(item);
        });
    });

    // CARRITO: abrir sidebar al hacer click en el ícono
    if (openCheckout) {
        openCheckout.addEventListener('click', (e) => {
            e.preventDefault();
            openCartSidebar();
        });
    }

    if (openLogin && loginModal) {
        openLogin.addEventListener('click', (e) => {
            e.preventDefault();
            modalContainer?.classList.remove('active');
            openModal(loginModal);
        });
    }

    // Checkout modal: cerrar
    if (closeCheckout) {
        closeCheckout.addEventListener('click', () => closeModal(checkoutModal));
    }

    const closeLoginModal = () => {
        modalContainer?.classList.remove('active');
        closeModal(loginModal);
    };

    if (closeLogin) {
        closeLogin.addEventListener('click', closeLoginModal);
    }

    loginLink?.addEventListener('click', (e) => {
        e.preventDefault();
        modalContainer?.classList.remove('active');
    });

    registerLink?.addEventListener('click', (e) => {
        e.preventDefault();
        modalContainer?.classList.add('active');
    });

    window.addEventListener('click', (e) => {
        if (e.target === checkoutModal) closeModal(checkoutModal);
        if (e.target === contactModal) closeModal(contactModal);
        if (e.target === loginModal) closeLoginModal();
    });

    // Contacto
    if (linkContacto && contactModal) {
        linkContacto.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(contactModal);
        });
    }
    if (closeContact) {
        closeContact.addEventListener('click', () => closeModal(contactModal));
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLoginModal();
    });

    // Scroll navbar
    window.addEventListener('scroll', () => {
        if (!navbar) return;
        navbar.classList.toggle('scroll-activo', window.scrollY > 50);
    });

    // Formulario de contacto
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
                alert('Error al enviar: ' + error.message);
            }
        });
    }

    // Formulario de pago
    const paymentForm = document.getElementById('payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const nombre_cliente = document.getElementById('pay-name').value;
            const email_cliente = document.getElementById('pay-email').value;
            const total = getCartTotal();
            try {
                await insertIntoSupabase('pagos', { nombre_cliente, email: email_cliente, total });
                cartItems = [];
                updateCartUI();
                saveCart(cartItems);
                alert('¡Pago procesado exitosamente!');
                closeModal(checkoutModal);
                paymentForm.reset();
            } catch (error) {
                alert('Error al procesar el pago: ' + error.message);
            }
        });
    }

    // Newsletter
    document.querySelectorAll('form.newsletter-form, form.join-drop-form').forEach((newsletterForm) => {
        newsletterForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailValue = newsletterForm.querySelector('input[type="email"]')?.value?.trim();
            if (!emailValue) return;
            try {
                await insertIntoSupabase('suscriptores', { email: emailValue });
                alert('¡Bienvenido al club NovaCore!');
                newsletterForm.reset();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        });
    });

    // Barra de búsqueda — solo activa en index.html (categoria.js maneja la suya propia)
    const isCategoria = window.location.pathname.includes('categoria');
    if (!isCategoria) {
        const searchBtn = document.querySelector('.search-btn');
        const searchBar = document.getElementById('search-bar-container');
        const closeSearch = document.getElementById('close-search');
        const searchInput = document.getElementById('search-input');

        if (searchBtn && searchBar && searchInput) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchBar.classList.toggle('search-bar-visible');
                if (searchBar.classList.contains('search-bar-visible')) {
                    setTimeout(() => searchInput.focus(), 50);
                }
            });
        }

        if (closeSearch && searchBar && searchInput) {
            closeSearch.addEventListener('click', () => {
                searchBar.classList.remove('search-bar-visible');
                searchInput.value = '';
                document.querySelectorAll('.product-item').forEach(p => p.style.display = 'flex');
            });
        }

        if (searchInput) {
            searchInput.addEventListener('keydown', (e) => {
                if (e.key !== 'Enter') return;
                e.preventDefault();
                const term = searchInput.value.toLowerCase().trim();
                document.querySelectorAll('#productos .product-item').forEach(p => {
                    const title = p.querySelector('.product-title')?.textContent.toLowerCase() ?? '';
                    p.style.display = !term || title.includes(term) ? 'flex' : 'none';
                });
                searchBar?.classList.remove('search-bar-visible');
                document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' });
            });
        }
    }

    // Tallas
    document.querySelectorAll('.size-box').forEach(btn => {
        btn.addEventListener('click', () => {
            const wrap = btn.closest('.size-selector-wrap');
            wrap?.querySelectorAll('.size-box').forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        });
    });

    // Slider de categorías (drag)
    const slider = document.querySelector('.categories-slider-wrapper');
    if (slider) {
        let isDown = false, startX = 0, scrollLeft = 0;
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => isDown = false);
        slider.addEventListener('mouseup', () => isDown = false);
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            slider.scrollLeft = scrollLeft - (e.pageX - slider.offsetLeft - startX) * 2;
        });
    }

    // Carrusel 3D: pausa solo al hover de una prenda
    const carouselRing = document.querySelector('.carousel-ring');
    const carouselCards = document.querySelectorAll('.carousel-card');
    if (carouselRing && carouselCards.length) {
        carouselCards.forEach(card => {
            card.addEventListener('mouseenter', () => carouselRing.classList.add('is-paused'));
            card.addEventListener('mouseleave', () => carouselRing.classList.remove('is-paused'));
        });
    }
});
