// theme.js - Quantum IPO Design System Integration

// 1. Inject Google Fonts and Custom CSS (Global Grid Motif from DESIGN.md)
const style = document.createElement('style');
style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
    
    .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
    }
    
    /* Global Motif from DESIGN.md */
    .global-grid-pattern {
        background-image: radial-gradient(circle, #86727a 1.5px, transparent 1.5px);
        background-size: 32px 32px;
        opacity: 0.15;
    }
    
    .glass-card {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(216, 192, 201, 0.3);
    }
`;
document.head.appendChild(style);

// 2. Apply exact DESIGN.md rules to Tailwind
window.tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
          "surface": "#fbf8ff",
          "surface-dim": "#d8d8f1",
          "surface-bright": "#fbf8ff",
          "surface-container-lowest": "#ffffff",
          "surface-container-low": "#f4f2ff",
          "surface-container": "#edecff",
          "surface-container-high": "#e6e6ff",
          "surface-container-highest": "#e0e0fa",
          "on-surface": "#181a2c",
          "on-surface-variant": "#53424a",
          "outline": "#86727a",
          "outline-variant": "#d8c0c9",
          "primary": "#5d0040",
          "on-primary": "#ffffff",
          "primary-container": "#7b1d58",
          "secondary": "#b80266",
          "on-secondary": "#ffffff",
          "tertiary-fixed": "#ffdea5",
          "tertiary-fixed-dim": "#e9c176",
          "on-tertiary-fixed": "#261900"
      },
      "borderRadius": {
          "DEFAULT": "0.25rem",
          "sm": "0.125rem", // Soft corners from DESIGN.md
          "lg": "0.5rem"
      },
      "spacing": {
          "gutter": "24px",
          "section-padding": "80px", // Generous whitespace from DESIGN.md
          "container-max": "1280px",
          "desktop": "64px"
      },
      "fontFamily": {
          "headline-xl": ["Playfair Display", "serif"],
          "headline-lg": ["Playfair Display", "serif"],
          "headline-md": ["Playfair Display", "serif"],
          "headline-sm": ["Playfair Display", "serif"],
          "body-lg": ["Inter", "sans-serif"],
          "body-md": ["Inter", "sans-serif"],
          "label-lg": ["Inter", "sans-serif"]
      },
      "fontSize": {
          "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
          "headline-lg": ["36px", {"lineHeight": "44px", "fontWeight": "600"}],
          "headline-md": ["28px", {"lineHeight": "36px", "fontWeight": "600"}],
          "headline-sm": ["22px", {"lineHeight": "28px", "fontWeight": "600"}],
          "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
          "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
          "label-lg": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "600"}]
      }
    }
  }
};