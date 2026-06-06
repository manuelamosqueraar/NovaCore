(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 992px)').matches;

    const hasGsap = typeof window.gsap !== 'undefined';
    const hasScrollTrigger = typeof window.ScrollTrigger !== 'undefined';
    const hasLenis = typeof window.Lenis !== 'undefined';
    const splineSceneUrl = window.NovaCoreConfig?.splineSceneUrl ?? '';
    const splineEnabled = Boolean(window.NovaCoreConfig?.enableSpline);

    if (hasGsap && hasScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
    }

    let lenis = null;

    const enableSplineScenes = () => {
        if (prefersReducedMotion || !isDesktop || !splineEnabled || !splineSceneUrl) return;

        document.querySelectorAll('[data-spline-viewer]').forEach((viewer) => {
            viewer.hidden = false;
            viewer.setAttribute('url', splineSceneUrl);
        });
    };

    const setupLenis = () => {
        if (prefersReducedMotion || !hasGsap || !hasLenis || lenis) return;

        lenis = new window.Lenis({
            lerp: 0.08,
            smoothWheel: true,
            syncTouch: true,
            allowNestedScroll: true,
            stopInertiaOnNavigate: true,
            anchors: {
                offset: 72
            }
        });

        lenis.on('scroll', () => {
            if (hasScrollTrigger) {
                window.ScrollTrigger.update();
            }
        });

        window.gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        window.gsap.ticker.lagSmoothing(0);
    };

    const revealOnScroll = (selector, vars = {}) => {
        if (!hasGsap || !hasScrollTrigger) return;

        const elements = window.gsap.utils.toArray(selector);
        if (!elements.length) return;

        window.ScrollTrigger.batch(elements, {
            start: vars.start || 'top 85%',
            onEnter: (batch) => {
                window.gsap.from(batch, {
                    opacity: 0,
                    y: vars.y || 32,
                    duration: vars.duration || 0.8,
                    stagger: vars.stagger || 0.08,
                    ease: vars.ease || 'power3.out',
                    overwrite: true
                });
            }
        });
    };

    const animateHeroIntro = () => {
        if (!hasGsap) return;

        if (document.querySelector('.hero-content')) {
            window.gsap.from('.hero-content', {
                opacity: 0,
                duration: 0.9,
                ease: 'power3.out',
                delay: 0.15
            });
        }

        if (document.querySelector('.hero-top-text')) {
            window.gsap.from('.hero-top-text', {
                opacity: 0,
                y: 18,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.2
            });
        }

        if (document.querySelector('.hero-content h1')) {
            window.gsap.from('.hero-content h1', {
                opacity: 0,
                y: 28,
                duration: 0.9,
                ease: 'power3.out',
                delay: 0.28
            });
        }

        if (document.querySelector('.hero-actions-fixed .btn-primary')) {
            window.gsap.from('.hero-actions-fixed .btn-primary', {
                opacity: 0,
                y: 18,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.35
            });
        }

        if (document.querySelector('.hero-video-bg')) {
            window.gsap.from('.hero-video-bg', {
                scale: 1.08,
                duration: 1.4,
                ease: 'power2.out'
            });
        }

        if (document.querySelector('.cat-hero-content')) {
            window.gsap.from('.cat-hero-content', {
                opacity: 0,
                y: 48,
                duration: 1,
                ease: 'power3.out',
                delay: 0.12
            });
        }

        if (document.querySelector('.cat-hero-bg-number')) {
            window.gsap.from('.cat-hero-bg-number', {
                opacity: 0,
                scale: 0.9,
                duration: 1,
                ease: 'power3.out',
                delay: 0.18
            });
        }

        if (document.querySelector('.cat-filter-bar')) {
            window.gsap.from('.cat-filter-bar', {
                y: -16,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.15
            });
        }
    };

    const setupParallax = () => {
        if (!hasGsap || !hasScrollTrigger) return;

        if (document.querySelector('.hero-video-bg')) {
            window.gsap.to('.hero-video-bg', {
                yPercent: 8,
                scale: 1.06,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#inicio',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }

        if (document.querySelector('.hero-spline-bg')) {
            window.gsap.to('.hero-spline-bg', {
                yPercent: 10,
                scale: 1.04,
                ease: 'none',
                scrollTrigger: {
                    trigger: '#inicio',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }

        if (document.querySelector('.cat-hero-bg')) {
            window.gsap.to('.cat-hero-bg', {
                yPercent: 8,
                scale: 1.06,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.cat-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }

        if (document.querySelector('.cat-spline-bg')) {
            window.gsap.to('.cat-spline-bg', {
                yPercent: 10,
                scale: 1.04,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.cat-hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }
    };

    const animateCategoryCards = () => {
        if (!hasGsap) return;

        const cards = window.gsap.utils.toArray('.cat-main-section .cat-product-item');
        if (!cards.length) return;

        window.gsap.from(cards, {
            opacity: 0,
            y: 26,
            duration: 0.65,
            stagger: 0.06,
            ease: 'power2.out',
            overwrite: true
        });
    };

    const setupBatchReveals = () => {
        if (!hasGsap || !hasScrollTrigger) return;

        revealOnScroll('.featured-products-section .product-item', { y: 36, stagger: 0.1 });
        revealOnScroll('.shop-categories-section .category-item', { y: 36, stagger: 0.1 });
        revealOnScroll('.about-values .value-item', { y: 30, stagger: 0.08 });
    };

    const init = () => {
        if (prefersReducedMotion) {
            // Si el usuario prefiere menos movimiento, dejamos un API vacío y no activamos animaciones.
            window.NovaCoreMotion = {
                animateCategoryCards: () => {},
                refresh: () => {},
                get lenis() {
                    return null;
                }
            };
            return;
        }

        enableSplineScenes();
        setupLenis();

        if (hasGsap && hasScrollTrigger) {
            window.ScrollTrigger.defaults({ markers: false });
        }

        animateHeroIntro();
        setupParallax();
        setupBatchReveals();

        if (document.querySelector('.cat-main-section .cat-product-item')) {
            animateCategoryCards();
        }

        if (hasScrollTrigger) {
            window.ScrollTrigger.refresh();
        }
    };

    window.NovaCoreMotion = {
        animateCategoryCards,
        refresh: () => {
            if (hasScrollTrigger) window.ScrollTrigger.refresh();
        },
        get lenis() {
            return lenis;
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
