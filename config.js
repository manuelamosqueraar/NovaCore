// Central config for NovaCore.
// Theme tokens live here so the starter can be rebranded without touching the app.
// Spline stays off by default to keep the home hero clean.
(() => {
    const themePresets = {
        core: {
            page: '#ffffff',
            ink: '#0b0b0b',
            bg: '#050505',
            surface: '#101010',
            surfaceSoft: '#171717',
            border: '#ececec',
            borderDark: 'rgba(255, 255, 255, 0.12)',
            accent: '#8e24cc',
            accent2: '#ff55bb',
            accentSoft: 'rgba(142, 36, 204, 0.12)',
            success: '#0f9d58',
            warning: '#d97706',
            danger: '#dc2626',
            textMuted: 'rgba(11, 11, 11, 0.7)',
            textInverse: '#ffffff',
            shadowSm: '0 10px 24px rgba(0, 0, 0, 0.08)',
            shadow: '0 30px 80px rgba(0, 0, 0, 0.12)',
            shadowLg: '0 40px 110px rgba(0, 0, 0, 0.16)',
            radiusSm: '10px',
            radiusMd: '16px',
            radiusLg: '24px',
            radiusXl: '32px',
            maxWidth: '1400px',
            bodyFont: 'Poppins, sans-serif',
            displayFont: 'Oswald, Impact, sans-serif'
        },
        mono: {
            page: '#ffffff',
            ink: '#111111',
            bg: '#050505',
            surface: '#121212',
            surfaceSoft: '#1b1b1b',
            border: '#e7e7e7',
            borderDark: 'rgba(255, 255, 255, 0.12)',
            accent: '#111111',
            accent2: '#666666',
            accentSoft: 'rgba(17, 17, 17, 0.08)',
            success: '#0f9d58',
            warning: '#d97706',
            danger: '#dc2626',
            textMuted: 'rgba(17, 17, 17, 0.7)',
            textInverse: '#ffffff',
            shadowSm: '0 10px 24px rgba(0, 0, 0, 0.08)',
            shadow: '0 30px 80px rgba(0, 0, 0, 0.12)',
            shadowLg: '0 40px 110px rgba(0, 0, 0, 0.16)',
            radiusSm: '10px',
            radiusMd: '16px',
            radiusLg: '24px',
            radiusXl: '32px',
            maxWidth: '1400px',
            bodyFont: 'Poppins, sans-serif',
            displayFont: 'Oswald, Impact, sans-serif'
        }
    };

    const brand = {
        name: 'NovaCore',
        title: 'High Fashion Elite',
        slug: 'novacore',
        theme: 'core'
    };

    const applyTheme = (root = document.documentElement) => {
        if (!root) return;

        const preset = themePresets[brand.theme] || themePresets.core;
        const tokens = {
            'page': preset.page,
            'ink': preset.ink,
            'bg': preset.bg,
            'surface': preset.surface,
            'surface-soft': preset.surfaceSoft,
            'border': preset.border,
            'border-dark': preset.borderDark,
            'accent': preset.accent,
            'accent-2': preset.accent2,
            'accent-soft': preset.accentSoft,
            'success': preset.success,
            'warning': preset.warning,
            'danger': preset.danger,
            'text-muted': preset.textMuted,
            'text-inverse': preset.textInverse,
            'shadow-sm': preset.shadowSm,
            'shadow': preset.shadow,
            'shadow-lg': preset.shadowLg,
            'radius-sm': preset.radiusSm,
            'radius-md': preset.radiusMd,
            'radius-lg': preset.radiusLg,
            'radius-xl': preset.radiusXl,
            'max-width': preset.maxWidth,
            'body-font': preset.bodyFont,
            'display-font': preset.displayFont
        };

        Object.entries(tokens).forEach(([name, value]) => {
            root.style.setProperty(`--nc-${name}`, value);
        });

        root.dataset.brand = brand.slug;
        root.dataset.theme = brand.theme;
        root.dataset.spline = window.NovaCoreConfig?.enableSpline ? 'enabled' : 'disabled';
    };

    window.NovaCoreConfig = {
        enableSpline: false,
        splineSceneUrl: '',
        brand,
        themePresets,
        getThemePreset(name = brand.theme) {
            return themePresets[name] || themePresets.core;
        },
        setTheme(name) {
            if (themePresets[name]) {
                brand.theme = name;
                applyTheme();
            }
        },
        applyTheme
    };

    applyTheme();
})();
