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

const categoryMeta = {
    hoodies: {
        introTitle: 'Heavyweight layers with clean volume',
        introCopy: 'Soft structure, strong silhouettes and a faster way to shop the core pieces.',
        fit: 'Relaxed fit',
        fabric: 'Heavy cotton fleece',
        summary: 'Built for layering and colder days.'
    },
    pantalones: {
        introTitle: 'Cut and proportion first',
        introCopy: 'Straight decisions for cargos and bermudas with more room and sharper lines.',
        fit: 'Relaxed cut',
        fabric: 'Lightweight twill',
        summary: 'Utility shapes with cleaner movement.'
    },
    camisas: {
        introTitle: 'Clean lines, easy layering',
        introCopy: 'Shirts edited for polish, structure and daily rotation without visual noise.',
        fit: 'Regular fit',
        fabric: 'Premium cotton',
        summary: 'Polished essentials for daily wear.'
    },
    gorras: {
        introTitle: 'Headwear with a sharper stance',
        introCopy: 'Simple silhouettes and small details that make the accessory feel intentional.',
        fit: 'One size',
        fabric: 'Twill and canvas',
        summary: 'Small pieces, strong identity.'
    },
    tenis: {
        introTitle: 'Footwear built to anchor the look',
        introCopy: 'Raised detail, clean proportions and product pages that surface what matters first.',
        fit: 'True to size',
        fabric: 'Leather and mesh',
        summary: 'Statement sneakers with simple choices.'
    },
    gafas: {
        introTitle: 'Accessories that finish the edit',
        introCopy: 'Frames and lenses that read premium without overexplaining the product.',
        fit: 'Universal fit',
        fabric: 'Acetate frame',
        summary: 'Eyewear as the final layer.'
    }
};

// ====================================================
// ESTADO
// ====================================================
let currentGender = 'todos';
let currentSort = 'default';
let currentSearch = '';
let currentCategory = null;
let currentCategoryKey = 'hoodies';
let currentQuickViewProduct = null;
let toastTimer = null;

const getCategory = () => new URLSearchParams(window.location.search).get('cat') || 'hoodies';

const getCategoryTheme = (key) => categoryMeta[key] || categoryMeta.hoodies;

const getStockLevel = (product, categoryKey) => {
    if (typeof product.stock === 'number') return product.stock;

    const badge = (product.badge || '').toUpperCase();
    if (badge.includes('LIMITED')) return 6;
    if (badge.includes('DROP')) return 12;
    if (badge.includes('NEW')) return 18;
    if (categoryKey === 'tenis') return 14;
    if (categoryKey === 'hoodies') return 10;
    return 16;
};

const getStockLabel = (stock) => {
    if (stock <= 6) return 'LOW STOCK';
    if (stock <= 12) return 'LAST UNITS';
    return 'IN STOCK';
};

const showToast = (message) => {
    const toast = document.getElementById('cat-toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('is-visible');
    }, 2200);
};

const getFilterCount = () => {
    return [currentGender !== 'todos', currentSort !== 'default', Boolean(currentSearch.trim())].filter(Boolean).length;
};

const buildQuickViewDescription = (product, categoryKey) => {
    const meta = getCategoryTheme(categoryKey);
    return product.description || `${product.name} from the ${currentCategory?.title || 'category'} edit. ${meta.summary}`;
};

const buildQuickViewHighlights = (product, categoryKey) => {
    const meta = getCategoryTheme(categoryKey);
    const stock = getStockLevel(product, categoryKey);

    return [
        product.badge || 'CURATED DROP',
        meta.fit,
        meta.fabric,
        `${stock} UNITS`
    ].filter(Boolean).slice(0, 3);
};

const updateSummaryFields = (filteredCount) => {
    const totalProducts = document.getElementById('cat-total-products');
    const activeFilterCount = document.getElementById('cat-active-filter-count');
    const resultsCount = document.getElementById('results-count');

    if (totalProducts && currentCategory) totalProducts.textContent = currentCategory.products.length;
    if (activeFilterCount) activeFilterCount.textContent = String(getFilterCount());
    if (resultsCount) resultsCount.textContent = filteredCount;
};

const renderProductCard = (product) => {
    const categoryTheme = getCategoryTheme(currentCategoryKey);
    const stock = getStockLevel(product, currentCategoryKey);
    const stockLabel = getStockLabel(stock);
    const fitLabel = product.fit || categoryTheme.fit;
    const fabricLabel = product.fabric || categoryTheme.fabric;
    const isSaved = window.NovaCoreStore?.isWishlisted?.({ slug: product.slug, name: product.name });

    return `
        <div class="product-item cat-product-item" data-slug="${product.slug}" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}" data-badge="${product.badge}" data-stock="${stock}" data-fit="${fitLabel}" data-fabric="${fabricLabel}">
            <div class="product-image-box">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="cat-product-badge">${product.badge}</div>
                <button type="button" class="cat-wishlist-btn ${isSaved ? 'is-saved' : ''}" data-action="wishlist" data-slug="${product.slug}" data-name="${product.name}" aria-pressed="${isSaved ? 'true' : 'false'}">${isSaved ? 'SAVED' : 'SAVE'}</button>
                <div class="cat-overlay-info">
                    <span class="overlay-name">${product.name}</span>
                    <span class="overlay-price">$${product.price.toFixed(2)} · ${fitLabel}</span>
                    <div class="cat-overlay-meta">
                        <span class="cat-overlay-chip">${stockLabel}</span>
                        <span class="cat-overlay-chip">${fabricLabel}</span>
                    </div>
                    <div class="cat-overlay-actions">
                        <button type="button" class="cat-overlay-btn cat-quick-view-btn" data-action="quick-view" data-slug="${product.slug}" data-name="${product.name}">DETAILS</button>
                        <button type="button" class="cat-overlay-btn btn-add" data-action="add" data-price="${product.price}" data-slug="${product.slug}" data-image="${product.image}" data-name="${product.name}">ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div class="product-info-box">
                <div class="cat-product-gender-tag">${product.gender.toUpperCase()}</div>
                <h3 class="product-title">${product.name}</h3>
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <div class="cat-product-meta">
                    <span>${fitLabel}</span>
                    <span>${stockLabel}</span>
                </div>
            </div>
        </div>
    `;
};

// ====================================================
// RENDER
// ====================================================
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
    const noResultsText = document.getElementById('cat-no-results-text');
    const countEl = document.getElementById('results-count');
    if (!grid || !currentCategory) return;

    const filtered = getFiltered(currentCategory.products);
    updateSummaryFields(filtered.length);

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        if (noResultsText) {
            const filters = [];
            if (currentGender !== 'todos') filters.push(currentGender.toUpperCase());
            if (currentSearch.trim()) filters.push(`"${currentSearch.trim()}"`);
            if (currentSort !== 'default') filters.push(currentSort === 'price-asc' ? 'low to high' : currentSort === 'price-desc' ? 'high to low' : 'A to Z');
            noResultsText.textContent = filters.length ? `No matches for ${filters.join(' · ')}` : 'No hay productos en esta selección';
        }
        return;
    }

    noResults.style.display = 'none';

    if (animate) {
        // Fade out rápido, luego reemplazar
        const existing = grid.querySelectorAll('.cat-product-item');
        existing.forEach(el => el.classList.add('filtering-out'));
        setTimeout(() => {
            grid.innerHTML = filtered.map(renderProductCard).join('');
            grid.querySelectorAll('.cat-product-item').forEach((card, index) => {
                card.__product = filtered[index];
            });
            bindProductCards();
            window.NovaCoreMotion?.animateCategoryCards?.();
        }, 220);
    } else {
        grid.innerHTML = filtered.map(renderProductCard).join('');
        grid.querySelectorAll('.cat-product-item').forEach((card, index) => {
            card.__product = filtered[index];
        });
        bindProductCards();
    }
};

const syncWishlistButtons = () => {
    document.querySelectorAll('.cat-wishlist-btn').forEach((btn) => {
        const product = btn.closest('.cat-product-item')?.__product;
        const saved = product ? Boolean(window.NovaCoreStore?.isWishlisted?.({ slug: product.slug, name: product.name })) : false;
        btn.classList.toggle('is-saved', saved);
        btn.setAttribute('aria-pressed', saved ? 'true' : 'false');
        btn.textContent = saved ? 'SAVED' : 'SAVE';
    });

    const quickSave = document.getElementById('cat-quick-view-save');
    if (quickSave && currentQuickViewProduct) {
        const saved = Boolean(window.NovaCoreStore?.isWishlisted?.({ slug: currentQuickViewProduct.slug, name: currentQuickViewProduct.name }));
        quickSave.classList.toggle('is-saved', saved);
        quickSave.textContent = saved ? 'SAVED' : 'SAVE';
    }
};

const populateQuickView = (product) => {
    const theme = getCategoryTheme(currentCategoryKey);
    const stock = getStockLevel(product, currentCategoryKey);
    const stockLabel = getStockLabel(stock);
    const fitLabel = product.fit || theme.fit;
    const fabricLabel = product.fabric || theme.fabric;

    const imageEl = document.getElementById('cat-quick-view-image');
    const badgeEl = document.getElementById('cat-quick-view-badge');
    const titleEl = document.getElementById('cat-quick-view-title');
    const priceEl = document.getElementById('cat-quick-view-price');
    const descEl = document.getElementById('cat-quick-view-description');
    const metaEl = document.getElementById('cat-quick-view-meta');
    const highlightsEl = document.getElementById('cat-quick-view-highlights');
    const stockEl = document.getElementById('cat-quick-view-stock');
    const linkEl = document.getElementById('cat-quick-view-link');
    const addBtn = document.getElementById('cat-quick-view-add');
    const saveBtn = document.getElementById('cat-quick-view-save');

    if (imageEl) {
        imageEl.src = product.image;
        imageEl.alt = product.name;
    }
    if (badgeEl) badgeEl.textContent = product.badge;
    if (titleEl) titleEl.textContent = product.name;
    if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;
    if (descEl) descEl.textContent = buildQuickViewDescription(product, currentCategoryKey);
    if (metaEl) {
        metaEl.innerHTML = `
            <span class="cat-overlay-chip">${fitLabel}</span>
            <span class="cat-overlay-chip">${fabricLabel}</span>
            <span class="cat-overlay-chip">${stockLabel}</span>
        `;
    }
    if (highlightsEl) {
        highlightsEl.innerHTML = buildQuickViewHighlights(product, currentCategoryKey).map((item) => `<li>${item}</li>`).join('');
    }
    if (stockEl) stockEl.textContent = `${stockLabel} · ${stock} UNITS`;
    if (linkEl) linkEl.href = `producto.html?slug=${product.slug}`;

    if (addBtn) {
        addBtn.dataset.slug = product.slug;
        addBtn.dataset.name = product.name;
        addBtn.dataset.image = product.image;
        addBtn.dataset.price = String(product.price);
    }

    if (saveBtn) {
        saveBtn.dataset.slug = product.slug;
        saveBtn.dataset.name = product.name;
        saveBtn.classList.toggle('is-saved', Boolean(window.NovaCoreStore?.isWishlisted?.({ slug: product.slug, name: product.name })));
        saveBtn.textContent = saveBtn.classList.contains('is-saved') ? 'SAVED' : 'SAVE';
    }
};

const openQuickView = (product) => {
    const modal = document.getElementById('cat-quick-view-modal');
    const closeBtn = document.getElementById('cat-quick-view-close');
    if (!modal || !product) return;

    currentQuickViewProduct = product;
    populateQuickView(product);
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => closeBtn?.focus(), 0);

    window.NovaCoreStore?.recordRecentlyViewed?.({
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        url: `producto.html?slug=${product.slug}`
    });
};

const closeQuickView = () => {
    const modal = document.getElementById('cat-quick-view-modal');
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = 'auto';
    currentQuickViewProduct = null;
};

const handleWishlistToggle = (product) => {
    if (!product) return;
    const wasSaved = Boolean(window.NovaCoreStore?.isWishlisted?.({ slug: product.slug, name: product.name }));
    window.NovaCoreStore?.toggleWishlist?.({
        slug: product.slug,
        name: product.name,
        price: product.price,
        image: product.image,
        url: `producto.html?slug=${product.slug}`
    });
    syncWishlistButtons();
    showToast(wasSaved ? `${product.name} eliminado` : `${product.name} guardado`);
};

const handleQuickAdd = (button) => {
    if (typeof addProductToCart === 'function') {
        addProductToCart(button);
        showToast('Añadido al carrito');
    }
};

const bindProductCards = () => {
    document.querySelectorAll('.cat-product-item').forEach((card) => {
        const product = card.__product;
        if (!product) return;

        const quickViewBtn = card.querySelector('.cat-quick-view-btn');
        const addBtn = card.querySelector('.btn-add');
        const wishlistBtn = card.querySelector('.cat-wishlist-btn');

        card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            openQuickView(product);
        });

        quickViewBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openQuickView(product);
        });

        addBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleQuickAdd(addBtn);
        });

        wishlistBtn?.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            handleWishlistToggle(product);
        });
    });

    const addQuickViewBtn = document.getElementById('cat-quick-view-add');
    const saveQuickViewBtn = document.getElementById('cat-quick-view-save');
    if (addQuickViewBtn) {
        addQuickViewBtn.onclick = (e) => {
            e.preventDefault();
            if (!currentQuickViewProduct) return;
            const tempButton = document.createElement('button');
            tempButton.dataset.slug = currentQuickViewProduct.slug;
            tempButton.dataset.name = currentQuickViewProduct.name;
            tempButton.dataset.image = currentQuickViewProduct.image;
            tempButton.dataset.price = String(currentQuickViewProduct.price);
            closeQuickView();
            handleQuickAdd(tempButton);
        };
    }

    if (saveQuickViewBtn) {
        saveQuickViewBtn.onclick = (e) => {
            e.preventDefault();
            if (!currentQuickViewProduct) return;
            handleWishlistToggle(currentQuickViewProduct);
        };
    }

    syncWishlistButtons();
};



// ====================================================
// INIT PÁGINA
// ====================================================
const initCategoryPage = () => {
    const catKey = getCategory();
    currentCategoryKey = categoryData[catKey] ? catKey : 'hoodies';
    currentCategory = categoryData[currentCategoryKey];
    const brandName = window.NovaCoreConfig?.brand?.name || 'NovaCore';
    const theme = getCategoryTheme(currentCategoryKey);

    document.title = `${brandName} | ${currentCategory.title}`;

    // Hero
    const heroImg = document.getElementById('cat-hero-img');
    const heroTitle = document.getElementById('cat-hero-title');
    const heroSubtitle = document.getElementById('cat-hero-subtitle');
    const breadcrumb = document.getElementById('cat-breadcrumb-name');
    const bgNumber = document.getElementById('cat-bg-number');
    const introTitle = document.getElementById('cat-intro-title');
    const introCopy = document.getElementById('cat-intro-copy');
    const searchInput = document.getElementById('search-input');
    const sortSelect = document.getElementById('sort-select');
    const searchBtn = document.querySelector('.search-btn');
    const searchBar = document.getElementById('search-bar-container');
    const closeSearchBtn = document.getElementById('close-search');
    const quickViewModal = document.getElementById('cat-quick-view-modal');
    const quickViewClose = document.getElementById('cat-quick-view-close');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const resetFiltersInlineBtn = document.getElementById('reset-filters-inline');

    if (heroImg) { heroImg.src = currentCategory.heroImage; heroImg.alt = currentCategory.title; }
    if (heroTitle) heroTitle.textContent = currentCategory.title;
    if (heroSubtitle) heroSubtitle.textContent = currentCategory.subtitle;
    if (breadcrumb) breadcrumb.textContent = currentCategory.title;
    if (bgNumber) bgNumber.textContent = currentCategory.bgNumber;
    if (introTitle) introTitle.textContent = theme.introTitle;
    if (introCopy) introCopy.textContent = theme.introCopy;
    if (searchInput) searchInput.placeholder = `Buscar en ${currentCategory.title.toLowerCase()}`;

    const resetFilters = () => {
        currentGender = 'todos';
        currentSort = 'default';
        currentSearch = '';

        document.querySelectorAll('.gender-tab').forEach((tab) => {
            tab.classList.toggle('active', tab.dataset.gender === 'todos');
        });

        if (sortSelect) sortSelect.value = 'default';
        if (searchInput) searchInput.value = '';
        renderProducts(false);
    };

    if (resetFiltersBtn) resetFiltersBtn.addEventListener('click', resetFilters);
    if (resetFiltersInlineBtn) resetFiltersInlineBtn.addEventListener('click', resetFilters);

    // Ticker
    document.querySelectorAll('.ticker-track span').forEach((el) => {
        el.textContent = `${currentCategory.tickerText}      `;
    });

    // Render inicial sin animación de filtro
    renderProducts(false);

    // ---- FILTROS GÉNERO ----
    document.querySelectorAll('.gender-tab').forEach((tab) => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.gender-tab').forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
            currentGender = tab.dataset.gender;
            renderProducts(true);
        });
    });

    // ---- ORDENAR ----
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentSort = sortSelect.value;
            renderProducts(true);
        });
    }

    // ---- BÚSQUEDA ----
    if (searchBtn && searchBar && searchInput) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchBar.classList.toggle('search-bar-visible');
            searchBtn.setAttribute('aria-expanded', searchBar.classList.contains('search-bar-visible') ? 'true' : 'false');
            if (searchBar.classList.contains('search-bar-visible')) {
                setTimeout(() => searchInput.focus(), 50);
            }
        });
    }

    if (closeSearchBtn && searchBar && searchInput) {
        closeSearchBtn.addEventListener('click', () => {
            searchBar.classList.remove('search-bar-visible');
            searchBtn?.setAttribute('aria-expanded', 'false');
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
                searchBar?.classList.remove('search-bar-visible');
                searchBtn?.setAttribute('aria-expanded', 'false');
                searchInput.value = '';
                currentSearch = '';
                renderProducts(true);
            }
        });
    }

    if (quickViewModal) {
        quickViewModal.addEventListener('click', (e) => {
            if (e.target === quickViewModal) closeQuickView();
        });
    }

    quickViewClose?.addEventListener('click', closeQuickView);

    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (quickViewModal?.classList.contains('is-open')) {
            closeQuickView();
            return;
        }
        if (searchBar?.classList.contains('search-bar-visible')) {
            searchBar.classList.remove('search-bar-visible');
            searchBtn?.setAttribute('aria-expanded', 'false');
            if (searchInput) searchInput.value = '';
            currentSearch = '';
            renderProducts(true);
        }
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCategoryPage, { once: true });
} else {
    initCategoryPage();
}
