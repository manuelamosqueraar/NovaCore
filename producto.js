const productCatalog = {
    'camisa-brand': {
        name: 'CAMISA BRAND',
        series: 'ARCHIVE 01',
        price: 45,
        image: 'IMG/camisa1.jpg',
        alt: 'Camisa Brand NovaCore',
        model: null,
        badge: 'DROP LIMITADO',
        categoryLabel: 'CAMISAS',
        fit: 'Regular fit',
        fabric: '100% algodon premium',
        origin: 'Made in Colombia',
        stock: 18,
        story: 'Camisa de silueta limpia pensada para capas ligeras y un look pulido.',
        description: [
            'Camisa de silueta limpia pensada para capas ligeras y un look pulido.',
            'Algodon premium, tacto suave y estructura firme para uso diario.'
        ],
        highlights: [
            'Peso medio ideal para layering',
            'Botoneria limpia y tacto suave',
            'Se adapta a styling formal o casual'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        gallery: [
            { src: 'IMG/camisa1.jpg', alt: 'Camisa Brand frontal' },
            { src: 'IMG/modelocamisa.jpg', alt: 'Camisa Brand editorial' },
            { src: 'IMG/fondo1.jpg', alt: 'Camisa Brand campaign' }
        ],
        details: [
            {
                title: 'MATERIAL',
                items: ['100% algodon premium', 'Costuras reforzadas', 'Botoneria limpia']
            },
            {
                title: 'FIT',
                items: ['Regular fit', 'Caida recta', 'Ideal para layering']
            },
            {
                title: 'CUIDADO',
                items: ['Lavar en frio', 'No usar secadora', 'Planchar a baja temperatura']
            }
        ],
        related: ['hoodie-saint', 'bermuda-buzzer', 'chaqueta-sainttears'],
        completeLook: ['hoodie-saint', 'bermuda-buzzer']
    },
    'chaqueta-sainttears': {
        name: 'CHAQUETA SAINTTEARS',
        series: 'ARCHIVE 02',
        price: 85,
        image: 'IMG/chaqueta.jpg',
        alt: 'Chaqueta Sainttears NovaCore',
        model: null,
        badge: 'OUTERWEAR EDITION',
        categoryLabel: 'OUTERWEAR',
        fit: 'Relaxed fit',
        fabric: 'Outer shell with soft lining',
        origin: 'Made in Colombia',
        stock: 12,
        story: 'Chaqueta estructurada con presencia urbana y acabado pulido.',
        description: [
            'Chaqueta estructurada con presencia urbana y acabado pulido.',
            'Su tejido exterior protege sin perder ligereza ni movimiento.'
        ],
        highlights: [
            'Layer exterior con estructura',
            'Forro suave para clima fresco',
            'Cierre metalico premium'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        gallery: [
            { src: 'IMG/chaqueta.jpg', alt: 'Chaqueta Sainttears frontal' },
            { src: 'IMG/fondo3.jpg', alt: 'Chaqueta Sainttears editorial' },
            { src: 'IMG/nosotros.jpg', alt: 'Chaqueta Sainttears campaign' }
        ],
        details: [
            {
                title: 'CONSTRUCCION',
                items: ['Exterior resistente', 'Forro suave', 'Cierre metalico premium']
            },
            {
                title: 'AJUSTE',
                items: ['Corte regular', 'Hombro limpio', 'Pensada para clima fresco']
            },
            {
                title: 'DETALLES',
                items: ['Bolsillos funcionales', 'Punos estructurados', 'Etiqueta tonal NovaCore']
            }
        ],
        related: ['hoodie-saint', 'camisa-brand', 'bermuda-buzzer'],
        completeLook: ['hoodie-saint', 'bermuda-buzzer']
    },
    'bermuda-buzzer': {
        name: 'BERMUDA BUZZER',
        series: 'ARCHIVE 03',
        price: 60,
        image: 'IMG/bermuda.jpg',
        alt: 'Bermuda Buzzer NovaCore',
        model: null,
        badge: 'SUMMER DROP',
        categoryLabel: 'BOTTOMS',
        fit: 'Relaxed cut',
        fabric: 'Lightweight twill',
        origin: 'Made in Colombia',
        stock: 16,
        story: 'Bermuda de corte relajado con energia utilitaria y caida limpia.',
        description: [
            'Bermuda de corte relajado con energia utilitaria y caida limpia.',
            'Disenada para climas calidos, con bolsillos amplios y tacto ligero.'
        ],
        highlights: [
            'Silueta limpia y utilitaria',
            'Bolsillos amplios para el dia a dia',
            'Combina con hoodies o camisas'
        ],
        sizes: ['28', '30', '32', '34'],
        gallery: [
            { src: 'IMG/bermuda.jpg', alt: 'Bermuda Buzzer frontal' },
            { src: 'IMG/modelopantalon.jpg', alt: 'Bermuda Buzzer editorial' },
            { src: 'IMG/fondo2.jpg', alt: 'Bermuda Buzzer campaign' }
        ],
        details: [
            {
                title: 'MATERIAL',
                items: ['Sarga ligera', 'Acabado suave', 'Textura resistente']
            },
            {
                title: 'AJUSTE',
                items: ['Relaxed fit', 'Cintura comoda', 'Movimiento libre']
            },
            {
                title: 'USO',
                items: ['Ideal para diario', 'Combina con hoodies o camisas', 'Silueta limpia']
            }
        ],
        related: ['camisa-brand', 'hoodie-saint', 'chaqueta-sainttears'],
        completeLook: ['camisa-brand', 'hoodie-saint']
    },
    'hoodie-saint': {
        name: 'HOODIE SAINT',
        series: 'ARCHIVE 04',
        price: 70,
        image: 'IMG/hoodie1.jpg',
        alt: 'Hoodie Saint NovaCore',
        model: null,
        badge: 'HEAVYWEIGHT',
        categoryLabel: 'HOODIES',
        fit: 'Relaxed fit',
        fabric: 'Heavyweight fleece',
        origin: 'Made in Colombia',
        stock: 10,
        story: 'Hoodie pesado con estructura premium y ajuste relajado.',
        description: [
            'Hoodie pesado con estructura premium y ajuste relajado.',
            'Capucha reforzada, punos firmes y tacto interior suave para uso diario.'
        ],
        highlights: [
            'Felpa pesada con tacto suave',
            'Capucha estructurada para mejor caida',
            'Hecho para layering de invierno'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        gallery: [
            { src: 'IMG/hoodie1.jpg', alt: 'Hoodie Saint frontal' },
            { src: 'IMG/hoodiemodelo.jpg', alt: 'Hoodie Saint editorial' },
            { src: 'IMG/fondo4.jpg', alt: 'Hoodie Saint campaign' }
        ],
        details: [
            {
                title: 'CONFECCION',
                items: ['Felpa pesada', 'Interior suave', 'Capucha estructurada']
            },
            {
                title: 'AJUSTE',
                items: ['Relaxed fit', 'Hombros suaves', 'Punos elasticos']
            },
            {
                title: 'CUIDADO',
                items: ['Lavar al reves', 'Secado a la sombra', 'Evitar cloro']
            }
        ],
        related: ['chaqueta-sainttears', 'camisa-brand', 'bermuda-buzzer'],
        completeLook: ['camisa-brand', 'bermuda-buzzer']
    }
};

const defaultSlug = 'camisa-brand';
const productState = {
    currentSlug: defaultSlug,
    selectedSize: '',
    activeImageIndex: 0
};

const formatPrice = (value) => {
    const number = Number(value);
    return `$${Number.isFinite(number) ? number.toFixed(2) : '0.00'}`;
};

const getStockLabel = (stock) => {
    if (stock <= 6) return 'LOW STOCK';
    if (stock <= 12) return 'LAST UNITS';
    return 'IN STOCK';
};

const getProduct = (slug) => productCatalog[slug] || productCatalog[defaultSlug];

const getGalleryItems = (product) => {
    if (Array.isArray(product.gallery) && product.gallery.length) return product.gallery;
    return [{ src: product.image, alt: product.alt || product.name }];
};

const renderListItems = (items) => items.map((item) => `<li>${item}</li>`).join('');

const renderTechSections = (sections) => sections.map((section, index) => `
    <details class="tech-item" ${index === 0 ? 'open' : ''}>
        <summary>${section.title}<span>+</span></summary>
        <div class="tech-content">
            <ul>
                ${renderListItems(section.items)}
            </ul>
        </div>
    </details>
`).join('');

const renderSizeButtons = (sizes) => sizes.map((size, index) => `
    <button type="button" class="size-box ${index === 0 ? 'active' : ''}" aria-pressed="${index === 0 ? 'true' : 'false'}" data-size="${size}">${size}</button>
`).join('');

const renderSummaryCards = (product) => {
    const cards = [
        { label: 'CATEGORY', value: product.categoryLabel },
        { label: 'FIT', value: product.fit },
        { label: 'FABRIC', value: product.fabric },
        { label: 'ORIGIN', value: product.origin }
    ];

    return cards.map((card) => `
        <article class="product-meta-card">
            <span>${card.label}</span>
            <strong>${card.value}</strong>
        </article>
    `).join('');
};

const renderHighlights = (product) => {
    return (product.highlights || []).map((item) => `<li>${item}</li>`).join('');
};

const renderGalleryThumbs = (product) => {
    const items = getGalleryItems(product);
    return items.map((item, index) => `
        <button type="button" class="product-gallery-thumb ${index === 0 ? 'is-active' : ''}" data-gallery-index="${index}" aria-label="Ver imagen ${index + 1}">
            <img src="${item.src}" alt="${item.alt || product.name}">
        </button>
    `).join('');
};

const renderCrossSellCard = (item, variant = 'related') => {
    const source = getProduct(item.slug);
    const image = item.image || source.image;
    const alt = item.alt || source.alt || item.name;
    const badge = variant === 'recent' ? 'RECENT' : variant === 'look' ? 'PAIRING' : (item.badge || source.badge || 'EDIT');
    const fit = source.fit || item.fit || 'Curated fit';
    const fabric = source.fabric || item.fabric || 'Premium fabric';
    const defaultSize = Array.isArray(source.sizes) && source.sizes.length ? source.sizes[0] : '';

    return `
        <article class="product-cross-card" data-slug="${item.slug}">
            <a class="product-cross-media" href="producto.html?slug=${item.slug}" aria-label="Abrir ${item.name}">
                <img src="${image}" alt="${alt}" loading="lazy">
                <span class="product-cross-badge">${badge}</span>
            </a>
            <div class="product-cross-copy">
                <div class="product-cross-meta">
                    <span>${fit}</span>
                    <span>${fabric}</span>
                </div>
                <h3 class="product-cross-title">${item.name}</h3>
                <p class="product-cross-price">${formatPrice(item.price)}</p>
                <div class="product-cross-actions">
                    <button type="button" class="product-cross-add btn-add" data-slug="${item.slug}" data-name="${item.name}" data-price="${item.price}" data-image="${image}" data-size="${defaultSize}">ADD</button>
                    <a class="product-cross-link" href="producto.html?slug=${item.slug}">VIEW</a>
                </div>
            </div>
        </article>
    `;
};

const bindAddButtons = (container) => {
    container.querySelectorAll('.btn-add').forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof addProductToCart === 'function') {
                addProductToCart(button);
            }
        });
    });
};

const setActiveSize = (size) => {
    productState.selectedSize = size;
    document.querySelectorAll('.size-box').forEach((button) => {
        const isActive = button.dataset.size === size;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    const sizeLabel = document.getElementById('selected-size-label');
    const mobileSize = document.getElementById('mobile-product-size');
    if (sizeLabel) sizeLabel.textContent = `SIZE ${size}`;
    if (mobileSize) mobileSize.textContent = `SIZE ${size}`;
};

const syncWishlistButton = (product) => {
    const button = document.getElementById('product-wishlist-button');
    const saved = Boolean(window.NovaCoreStore?.isWishlisted?.({ slug: productState.currentSlug, name: product.name }));

    if (button) {
        button.classList.toggle('is-saved', saved);
        button.textContent = saved ? 'SAVED' : 'SAVE';
        button.setAttribute('aria-pressed', saved ? 'true' : 'false');
    }

    const mobileButton = document.getElementById('mobile-product-add-button');
    if (mobileButton) {
        mobileButton.dataset.slug = productState.currentSlug;
        mobileButton.dataset.name = product.name;
        mobileButton.dataset.image = product.image;
        mobileButton.dataset.price = String(product.price);
    }

    return saved;
};

const toggleWishlist = (product) => {
    const wasSaved = Boolean(window.NovaCoreStore?.isWishlisted?.({ slug: productState.currentSlug, name: product.name }));
    window.NovaCoreStore?.toggleWishlist?.({
        slug: productState.currentSlug,
        name: product.name,
        price: product.price,
        image: product.image,
        url: `producto.html?slug=${productState.currentSlug}`
    });
    syncWishlistButton(product);
    return wasSaved;
};

const setActiveMedia = (product, index) => {
    const gallery = getGalleryItems(product);
    const active = gallery[index] || gallery[0];
    const imageEl = document.getElementById('product-image');
    const modelViewer = document.getElementById('product-model-viewer');
    const badgeEl = document.getElementById('product-badge-text');
    const galleryLabel = document.getElementById('product-gallery-label');

    productState.activeImageIndex = index;

    if (imageEl) {
        imageEl.src = active.src;
        imageEl.alt = active.alt || product.alt || product.name;
    }

    if (galleryLabel) {
        galleryLabel.textContent = `${String(index + 1).padStart(2, '0')} / ${String(gallery.length).padStart(2, '0')}`;
    }

    if (badgeEl) {
        badgeEl.textContent = product.badge;
    }

    if (modelViewer) {
        if (product.model) {
            modelViewer.hidden = false;
            modelViewer.setAttribute('src', product.model);
            modelViewer.setAttribute('poster', active.src);
        } else {
            modelViewer.hidden = true;
            modelViewer.removeAttribute('src');
            modelViewer.removeAttribute('poster');
        }
    }

    document.querySelectorAll('.product-gallery-thumb').forEach((button) => {
        const isActive = Number(button.dataset.galleryIndex) === index;
        button.classList.toggle('is-active', isActive);
    });
};

const bindGallery = (product) => {
    const rail = document.getElementById('product-gallery-rail');
    if (!rail) return;

    const gallery = getGalleryItems(product);
    rail.innerHTML = renderGalleryThumbs(product);

    rail.querySelectorAll('.product-gallery-thumb').forEach((button) => {
        button.addEventListener('click', () => {
            setActiveMedia(product, Number(button.dataset.galleryIndex));
        });
    });

    setActiveMedia(product, 0);

    const stockText = getStockLabel(product.stock);
    const stockLabel = document.getElementById('product-stock-chip');
    const liveStock = document.getElementById('product-live-stock');
    const mobileStock = document.getElementById('mobile-product-stock');
    const galleryLabel = document.getElementById('product-gallery-label');

    if (stockLabel) stockLabel.textContent = stockText;
    if (liveStock) liveStock.textContent = stockText;
    if (mobileStock) mobileStock.textContent = stockText;
    if (galleryLabel) galleryLabel.textContent = `${String(1).padStart(2, '0')} / ${String(gallery.length).padStart(2, '0')}`;
};

const renderCrossSellSection = (containerId, slugs, currentSlug, variant) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const items = slugs
        .map((slug) => ({ slug, ...(productCatalog[slug] || {}) }))
        .filter((item) => item.slug && item.slug !== currentSlug)
        .map((item) => ({
            slug: item.slug,
            name: item.name,
            price: item.price,
            image: item.image,
            alt: item.alt,
            badge: item.badge,
            fit: item.fit,
            fabric: item.fabric
        }));

    const section = container.closest('.product-cross-sell-section');
    if (!items.length) {
        container.innerHTML = '';
        if (section) section.hidden = true;
        return;
    }

    if (section) section.hidden = false;
    container.innerHTML = items.map((item) => renderCrossSellCard(item, variant)).join('');
    bindAddButtons(container);
};

const renderRecentlyViewed = (currentSlug) => {
    const container = document.getElementById('recently-viewed-grid');
    const emptyState = document.getElementById('recently-empty-state');
    if (!container) return;

    const recent = (window.NovaCoreStore?.getRecentlyViewed?.() || [])
        .filter((item) => item.slug && item.slug !== currentSlug)
        .filter((item, index, list) => index === list.findIndex((entry) => `${entry.slug}::${entry.name}` === `${item.slug}::${item.name}`))
        .slice(0, 3)
        .map((item) => ({
            slug: item.slug,
            name: item.name,
            price: item.price,
            image: item.image,
            alt: item.name,
            badge: 'RECENT'
        }));

    if (!recent.length) {
        container.innerHTML = '';
        if (emptyState) emptyState.hidden = false;
        return;
    }

    if (emptyState) emptyState.hidden = true;
    container.innerHTML = recent.map((item) => renderCrossSellCard(item, 'recent')).join('');
    bindAddButtons(container);
};

const initializeProductPage = () => {
    const slug = new URLSearchParams(window.location.search).get('slug') || defaultSlug;
    const product = getProduct(slug);
    productState.currentSlug = slug;
    productState.activeImageIndex = 0;
    productState.selectedSize = product.sizes[0];

    const brandName = window.NovaCoreConfig?.brand?.name || 'NovaCore';
    document.title = `${brandName} | ${product.name}`;

    const nameEl = document.getElementById('product-name');
    const seriesEl = document.getElementById('product-series');
    const priceEl = document.getElementById('product-price');
    const descriptionEl = document.getElementById('product-description');
    const sizesEl = document.getElementById('size-grid');
    const detailsEl = document.getElementById('tech-sections');
    const badgeEl = document.getElementById('product-badge-text');
    const addButton = document.getElementById('product-add-button');
    const mobileAddButton = document.getElementById('mobile-product-add-button');
    const mobilePriceEl = document.getElementById('mobile-product-price');
    const imageEl = document.getElementById('product-image');
    const modelViewer = document.getElementById('product-model-viewer');
    const summaryGrid = document.getElementById('product-summary-grid');
    const storyNote = document.getElementById('product-story-note');
    const highlightsEl = document.getElementById('product-highlights');
    const wishlistButton = document.getElementById('product-wishlist-button');

    if (nameEl) nameEl.textContent = product.name;
    if (seriesEl) seriesEl.textContent = product.series;
    if (priceEl) priceEl.textContent = formatPrice(product.price);
    if (descriptionEl) {
        descriptionEl.innerHTML = product.description.map((paragraph) => `<p>${paragraph}</p>`).join('');
    }
    if (sizesEl) {
        sizesEl.innerHTML = renderSizeButtons(product.sizes);
    }
    if (detailsEl) {
        detailsEl.innerHTML = renderTechSections(product.details);
    }
    if (badgeEl) badgeEl.textContent = product.badge;
    if (mobilePriceEl) mobilePriceEl.textContent = formatPrice(product.price);
    if (summaryGrid) summaryGrid.innerHTML = renderSummaryCards(product);
    if (storyNote) storyNote.textContent = product.story;
    if (highlightsEl) highlightsEl.innerHTML = renderHighlights(product);

    if (addButton) {
        addButton.dataset.price = String(product.price);
        addButton.dataset.slug = slug;
        addButton.dataset.image = product.image;
        addButton.dataset.name = product.name;
        addButton.setAttribute('aria-label', `Añadir ${product.name} al carrito`);
    }
    if (mobileAddButton) {
        mobileAddButton.dataset.price = String(product.price);
        mobileAddButton.dataset.slug = slug;
        mobileAddButton.dataset.image = product.image;
        mobileAddButton.dataset.name = product.name;
        mobileAddButton.setAttribute('aria-label', `Añadir ${product.name} al carrito`);
    }

    if (imageEl) {
        imageEl.src = product.image;
        imageEl.alt = product.alt;
    }

    if (modelViewer) {
        if (product.model) {
            modelViewer.hidden = false;
            modelViewer.setAttribute('src', product.model);
            modelViewer.setAttribute('poster', product.image);
            modelViewer.setAttribute('alt', product.alt);
        } else {
            modelViewer.hidden = true;
            modelViewer.removeAttribute('src');
            modelViewer.removeAttribute('poster');
            modelViewer.removeAttribute('alt');
        }
    }

    bindGallery(product);
    setActiveSize(product.sizes[0]);
    syncWishlistButton(product);

    document.querySelectorAll('.size-box').forEach((button) => {
        button.addEventListener('click', () => {
            setActiveSize(button.dataset.size || button.textContent.trim());
        });
    });

    wishlistButton?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleWishlist(product);
    });

    renderCrossSellSection('complete-look-grid', product.completeLook || [], slug, 'look');
    renderCrossSellSection('related-products-grid', product.related || [], slug, 'related');
    renderRecentlyViewed(slug);

    window.NovaCoreStore?.recordRecentlyViewed?.({
        slug,
        name: product.name,
        price: product.price,
        image: product.image,
        url: `producto.html?slug=${slug}`
    });
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProductPage, { once: true });
} else {
    initializeProductPage();
}
