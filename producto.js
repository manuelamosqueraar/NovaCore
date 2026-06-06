const products = {
    'camisa-brand': {
        name: 'CAMISA BRAND',
        series: 'ARCHIVE 01',
        price: 45,
        image: 'IMG/camisa1.jpg',
        alt: 'Camisa Brand NovaCore',
        model: null,
        badge: 'DROP LIMITADO',
        description: [
            'Camisa de silueta limpia pensada para capas ligeras y un look pulido.',
            'Algodón premium, tacto suave y estructura firme para uso diario.'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        details: [
            {
                title: 'MATERIAL',
                items: ['100% algodón premium', 'Costuras reforzadas', 'Botonería limpia']
            },
            {
                title: 'FIT',
                items: ['Regular fit', 'Caída recta', 'Ideal para layering']
            },
            {
                title: 'CUIDADO',
                items: ['Lavar en frío', 'No usar secadora', 'Planchar a baja temperatura']
            }
        ]
    },
    'chaqueta-sainttears': {
        name: 'CHAQUETA SAINTTEARS',
        series: 'ARCHIVE 02',
        price: 85,
        image: 'IMG/chaqueta.jpg',
        alt: 'Chaqueta Sainttears NovaCore',
        model: null,
        badge: 'OUTERWEAR EDITION',
        description: [
            'Chaqueta estructurada con presencia urbana y acabado pulido.',
            'Su tejido exterior protege sin perder ligereza ni movimiento.'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        details: [
            {
                title: 'CONSTRUCCIÓN',
                items: ['Exterior resistente', 'Forro suave', 'Cierre metálico premium']
            },
            {
                title: 'AJUSTE',
                items: ['Corte regular', 'Hombro limpio', 'Pensada para clima fresco']
            },
            {
                title: 'DETALLES',
                items: ['Bolsillos funcionales', 'Puños estructurados', 'Etiqueta tonal NovaCore']
            }
        ]
    },
    'bermuda-buzzer': {
        name: 'BERMUDA BUZZER',
        series: 'ARCHIVE 03',
        price: 60,
        image: 'IMG/bermuda.jpg',
        alt: 'Bermuda Buzzer NovaCore',
        model: null,
        badge: 'SUMMER DROP',
        description: [
            'Bermuda de corte relajado con energía utilitaria y caída limpia.',
            'Diseñada para climas cálidos, con bolsillos amplios y tacto ligero.'
        ],
        sizes: ['28', '30', '32', '34'],
        details: [
            {
                title: 'MATERIAL',
                items: ['Sarga ligera', 'Acabado suave', 'Textura resistente']
            },
            {
                title: 'AJUSTE',
                items: ['Relaxed fit', 'Cintura cómoda', 'Movimiento libre']
            },
            {
                title: 'USO',
                items: ['Ideal para diario', 'Combina con hoodies o camisas', 'Silueta limpia']
            }
        ]
    },
    'hoodie-saint': {
        name: 'HOODIE SAINT',
        series: 'ARCHIVE 04',
        price: 70,
        image: 'IMG/hoodie1.jpg',
        alt: 'Hoodie Saint NovaCore',
        model: null,
        badge: 'HEAVYWEIGHT',
        description: [
            'Hoodie pesado con estructura premium y ajuste relajado.',
            'Capucha reforzada, puños firmes y tacto interior suave para uso diario.'
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        details: [
            {
                title: 'CONFECCIÓN',
                items: ['Felpa pesada', 'Interior suave', 'Capucha estructurada']
            },
            {
                title: 'AJUSTE',
                items: ['Relaxed fit', 'Hombros suaves', 'Puños elásticos']
            },
            {
                title: 'CUIDADO',
                items: ['Lavar al revés', 'Secado a la sombra', 'Evitar cloro']
            }
        ]
    }
};

const defaultSlug = 'camisa-brand';

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
    <button type="button" class="size-box ${index === 0 ? 'active' : ''}" aria-pressed="${index === 0 ? 'true' : 'false'}">${size}</button>
`).join('');

const initializeProductPage = () => {
    const slug = new URLSearchParams(window.location.search).get('slug') || defaultSlug;
    const product = products[slug] || products[defaultSlug];

    const nameEl = document.getElementById('product-name');
    const seriesEl = document.getElementById('product-series');
    const priceEl = document.getElementById('product-price');
    const imageEl = document.getElementById('product-image');
    const descriptionEl = document.getElementById('product-description');
    const sizesEl = document.getElementById('size-grid');
    const detailsEl = document.getElementById('tech-sections');
    const badgeEl = document.getElementById('product-badge-text');
    const addButton = document.getElementById('product-add-button');
    const modelViewer = document.getElementById('product-model-viewer');

    document.title = `NovaCore | ${product.name}`;

    if (nameEl) nameEl.textContent = product.name;
    if (seriesEl) seriesEl.textContent = product.series;
    if (priceEl) priceEl.textContent = `$${product.price.toFixed(2)}`;
    if (imageEl) {
        imageEl.src = product.image;
        imageEl.alt = product.alt;
    }
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
    if (addButton) {
        addButton.dataset.price = String(product.price);
        addButton.setAttribute('aria-label', `Añadir ${product.name} al carrito`);
    }

    const hasModel = typeof product.model === 'string' && product.model.trim().length > 0;
    if (modelViewer && imageEl) {
        if (hasModel) {
            modelViewer.hidden = false;
            imageEl.hidden = true;
            modelViewer.setAttribute('src', product.model);
            modelViewer.setAttribute('poster', product.image);
            modelViewer.setAttribute('alt', product.alt);

            modelViewer.addEventListener('error', () => {
                modelViewer.hidden = true;
                imageEl.hidden = false;
                if (badgeEl) badgeEl.textContent = product.badge;
            }, { once: true });

            if (badgeEl) badgeEl.textContent = '3D VIEW';
        } else {
            modelViewer.hidden = true;
            imageEl.hidden = false;
            modelViewer.removeAttribute('src');
            modelViewer.removeAttribute('poster');
            modelViewer.removeAttribute('alt');
            if (badgeEl) badgeEl.textContent = product.badge;
        }
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeProductPage, { once: true });
} else {
    initializeProductPage();
}
