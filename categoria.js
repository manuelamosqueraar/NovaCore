// ====================================================
// NOVACORE — CATEGORIA.JS
// ====================================================

const categoryData = {
    hoodies: {
        title: 'HOODIES',
        subtitle: '// HEAVYWEIGHT COLLECTION',
        heroImage: 'IMG/hoodiemodelo.jpg',
        tickerText: 'HOODIES • NOVACORE ARCHIVES',
        bgNumber: '01',
        products: [
            { slug: 'hoodie-saint', name: 'HOODIE SAINT', price: 70, image: 'IMG/hoodie1.jpg', gender: 'hombre', badge: 'HEAVYWEIGHT' },
            { slug: 'hoodie-saint', name: 'HOODIE SAINT MUJER', price: 70, image: 'IMG/hoodie1.jpg', gender: 'mujer', badge: 'NEW DROP' },
            { slug: 'hoodie-saint', name: 'HOODIE ARCHIVE', price: 80, image: 'IMG/hoodie1.jpg', gender: 'hombre', badge: 'LIMITED' },
            { slug: 'hoodie-saint', name: 'HOODIE CORE', price: 65, image: 'IMG/hoodie1.jpg', gender: 'mujer', badge: 'ESSENTIALS' }
        ]
    },
    pantalones: {
        title: 'PANTALONES',
        subtitle: '// CUTS & SILHOUETTES',
        heroImage: 'IMG/modelopantalon.jpg',
        tickerText: 'PANTALONES • NOVACORE ARCHIVES',
        bgNumber: '02',
        products: [
            { slug: 'bermuda-buzzer', name: 'BERMUDA BUZZER', price: 60, image: 'IMG/bermuda.jpg', gender: 'hombre', badge: 'SUMMER DROP' },
            { slug: 'bermuda-buzzer', name: 'BERMUDA CORE', price: 55, image: 'IMG/bermuda.jpg', gender: 'mujer', badge: 'NEW' },
            { slug: 'bermuda-buzzer', name: 'CARGO SAINT', price: 75, image: 'IMG/bermuda.jpg', gender: 'hombre', badge: 'ARCHIVE' },
            { slug: 'bermuda-buzzer', name: 'PANTALÓN NOVA', price: 80, image: 'IMG/bermuda.jpg', gender: 'mujer', badge: 'LIMITED' }
        ]
    },
    camisas: {
        title: 'CAMISAS',
        subtitle: '// CLEAN LINES & PREMIUM FABRIC',
        heroImage: 'IMG/modelocamisa.jpg',
        tickerText: 'CAMISAS • NOVACORE ARCHIVES',
        bgNumber: '03',
        products: [
            { slug: 'camisa-brand', name: 'CAMISA BRAND', price: 45, image: 'IMG/camisa1.jpg', gender: 'hombre', badge: 'DROP LIMITADO' },
            { slug: 'camisa-brand', name: 'CAMISA OVERSIZED', price: 50, image: 'IMG/camisa1.jpg', gender: 'mujer', badge: 'NEW DROP' },
            { slug: 'camisa-brand', name: 'CAMISA SAINT', price: 55, image: 'IMG/camisa1.jpg', gender: 'hombre', badge: 'ARCHIVE' },
            { slug: 'camisa-brand', name: 'CAMISA CORE', price: 48, image: 'IMG/camisa1.jpg', gender: 'mujer', badge: 'ESSENTIALS' }
        ]
    },
    gorras: {
        title: 'GORRAS',
        subtitle: '// HEADWEAR STATEMENT',
        heroImage: 'IMG/modelogorra1.jpg',
        tickerText: 'GORRAS • NOVACORE ARCHIVES',
        bgNumber: '04',
        products: [
            { slug: 'camisa-brand', name: 'NOVA CAP', price: 30, image: 'IMG/modelogorra1.jpg', gender: 'hombre', badge: 'SIGNATURE' },
            { slug: 'camisa-brand', name: 'SAINT CAP', price: 30, image: 'IMG/modelogorra1.jpg', gender: 'mujer', badge: 'NEW DROP' },
            { slug: 'camisa-brand', name: 'BUCKET CORE', price: 35, image: 'IMG/modelogorra1.jpg', gender: 'hombre', badge: 'LIMITED' },
            { slug: 'camisa-brand', name: 'BUCKET ARCHIVE', price: 35, image: 'IMG/modelogorra1.jpg', gender: 'mujer', badge: 'ARCHIVE' }
        ]
    },
    tenis: {
        title: 'TENIS',
        subtitle: '// FOOTWEAR ESSENTIALS',
        heroImage: 'IMG/modelotenis.jpg',
        tickerText: 'TENIS • NOVACORE ARCHIVES',
        bgNumber: '05',
        products: [
            { slug: 'camisa-brand', name: 'NOVA RUNNER', price: 120, image: 'IMG/modelotenis.jpg', gender: 'hombre', badge: 'FLAGSHIP' },
            { slug: 'camisa-brand', name: 'SAINT RUNNER', price: 115, image: 'IMG/modelotenis.jpg', gender: 'mujer', badge: 'NEW DROP' },
            { slug: 'camisa-brand', name: 'CORE LOW', price: 95, image: 'IMG/modelotenis.jpg', gender: 'hombre', badge: 'ESSENTIALS' },
            { slug: 'camisa-brand', name: 'ARCHIVE FORCE', price: 130, image: 'IMG/modelotenis.jpg', gender: 'mujer', badge: 'LIMITED' }
        ]
    },
    gafas: {
        title: 'GAFAS',
        subtitle: '// EYEWEAR STATEMENT',
        heroImage: 'IMG/modelogafas.jpg',
        tickerText: 'GAFAS • NOVACORE ARCHIVES',
        bgNumber: '06',
        products: [
            { slug: 'camisa-brand', name: 'NOVA SHADES', price: 65, image: 'IMG/modelogafas.jpg', gender: 'hombre', badge: 'SIGNATURE' },
            { slug: 'camisa-brand', name: 'SAINT LENS', price: 65, image: 'IMG/modelogafas.jpg', gender: 'mujer', badge: 'NEW DROP' },
            { slug: 'camisa-brand', name: 'CORE VISOR', price: 70, image: 'IMG/modelogafas.jpg', gender: 'hombre', badge: 'LIMITED' },
            { slug: 'camisa-brand', name: 'ARCHIVE FRAME', price: 75, image: 'IMG/modelogafas.jpg', gender: 'mujer', badge: 'ARCHIVE' }
        ]
    }
};

// ====================================================
// ESTADO
// ====================================================
let currentGender = 'todos';
let currentSort = 'default';
let currentSearch = '';
let currentCategory = null;

const getCategory = () => new URLSearchParams(window.location.search).get('cat') || 'hoodies';

// ====================================================
// RENDER
// ====================================================
const renderProductCard = (p) => `
    <div class="product-item cat-product-item" data-gender="${p.gender}" data-name="${p.name.toLowerCase()}" data-price="${p.price}">
        <div class="product-image-box">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            <div class="cat-product-badge">${p.badge}</div>
            <div class="cat-overlay-info">
                <span class="overlay-name">${p.name}</span>
                <span class="overlay-price">$${p.price.toFixed(2)}</span>
                <button class="cat-overlay-btn btn-add" data-price="${p.price}">
                    <span>AÑADIR AL CARRITO</span>
                    <span>→</span>
                </button>
            </div>
        </div>
        <div class="product-info-box">
            <div class="cat-product-gender-tag">${p.gender.toUpperCase()}</div>
            <h3 class="product-title">${p.name}</h3>
            <span class="product-price">$${p.price.toFixed(2)}</span>
        </div>
    </div>
`;

const getFiltered = (products) => {
    let list = [...products];
    if (currentGender !== 'todos') list = list.filter(p => p.gender === currentGender);
    if (currentSearch.trim()) list = list.filter(p => p.name.toLowerCase().includes(currentSearch.toLowerCase()));
    if (currentSort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (currentSort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    return list;
};

const renderProducts = (animate = true) => {
    const grid = document.getElementById('cat-products-grid');
    const noResults = document.getElementById('cat-no-results');
    const countEl = document.getElementById('results-count');
    if (!grid || !currentCategory) return;

    const filtered = getFiltered(currentCategory.products);
    countEl.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    if (animate) {
        // Fade out rápido, luego reemplazar
        const existing = grid.querySelectorAll('.cat-product-item');
        existing.forEach(el => el.classList.add('filtering-out'));
        setTimeout(() => {
            grid.innerHTML = filtered.map(renderProductCard).join('');
            bindCartButtons();
            window.NovaCoreMotion?.animateCategoryCards?.();
        }, 220);
    } else {
        grid.innerHTML = filtered.map(renderProductCard).join('');
        bindCartButtons();
    }
};

const bindCartButtons = () => {
    document.querySelectorAll('.cat-overlay-btn.btn-add').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // Reutiliza la función de app.js
            if (typeof addProductToCart === 'function') {
                addProductToCart(btn);
            } else {
                // fallback manual
                const price = Number(btn.dataset.price) || 0;
                if (typeof count !== 'undefined') {
                    count++;
                    total = Math.round((total + price) * 100) / 100;
                    if (typeof updateCartUI === 'function') updateCartUI();
                }
                alert('Producto añadido al carrito.');
            }
        });
    });
};



// ====================================================
// INIT PÁGINA
// ====================================================
const initCategoryPage = () => {
    const catKey = getCategory();
    currentCategory = categoryData[catKey] || categoryData['hoodies'];

    document.title = `NovaCore | ${currentCategory.title}`;

    // Hero
    const heroImg = document.getElementById('cat-hero-img');
    const heroTitle = document.getElementById('cat-hero-title');
    const heroSubtitle = document.getElementById('cat-hero-subtitle');
    const breadcrumb = document.getElementById('cat-breadcrumb-name');
    const bgNumber = document.getElementById('cat-bg-number');

    if (heroImg) { heroImg.src = currentCategory.heroImage; heroImg.alt = currentCategory.title; }
    if (heroTitle) heroTitle.textContent = currentCategory.title;
    if (heroSubtitle) heroSubtitle.textContent = currentCategory.subtitle;
    if (breadcrumb) breadcrumb.textContent = currentCategory.title;
    if (bgNumber) bgNumber.textContent = currentCategory.bgNumber;

    // Ticker
    document.querySelectorAll('.ticker-track span').forEach(el => {
        el.textContent = `${currentCategory.tickerText}      `;
    });

    // Render inicial sin animación de filtro
    renderProducts(false);

    // ---- FILTROS GÉNERO ----
    document.querySelectorAll('.gender-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.gender-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentGender = tab.dataset.gender;
            renderProducts(true);
        });
    });

    // ---- ORDENAR ----
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentSort = sortSelect.value;
            renderProducts(true);
        });
    }

    // ---- BÚSQUEDA ----
    const searchBtn = document.querySelector('.search-btn');
    const searchBar = document.getElementById('search-bar-container');
    const closeSearchBtn = document.getElementById('close-search');
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

    if (closeSearchBtn && searchBar && searchInput) {
        closeSearchBtn.addEventListener('click', () => {
            searchBar.classList.remove('search-bar-visible');
            searchInput.value = '';
            currentSearch = '';
            renderProducts(true);
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', () => {
            currentSearch = searchInput.value;
            renderProducts(true);
        });
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchBar.classList.remove('search-bar-visible');
                searchInput.value = '';
                currentSearch = '';
                renderProducts(true);
            }
        });
    }


};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCategoryPage, { once: true });
} else {
    initCategoryPage();
}
