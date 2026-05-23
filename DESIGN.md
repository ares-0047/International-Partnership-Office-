---
name: International Partnership Office Design System
colors:
  surface: '#fbf8ff'
  surface-dim: '#d8d8f1'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2ff'
  surface-container: '#edecff'
  surface-container-high: '#e6e6ff'
  surface-container-highest: '#e0e0fa'
  on-surface: '#181a2c'
  on-surface-variant: '#53424a'
  inverse-surface: '#2d2f42'
  inverse-on-surface: '#f1efff'
  outline: '#86727a'
  outline-variant: '#d8c0c9'
  surface-tint: '#9c3974'
  primary: '#5d0040'
  on-primary: '#ffffff'
  primary-container: '#7b1d58'
  on-primary-container: '#ff8cca'
  inverse-primary: '#ffafd6'
  secondary: '#b80266'
  on-secondary: '#ffffff'
  secondary-container: '#fd4b99'
  on-secondary-container: '#58002d'
  tertiary: '#3e2b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#5a4000'
  on-tertiary-container: '#d3ac64'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffd8e8'
  primary-fixed-dim: '#ffafd6'
  on-primary-fixed: '#3c0028'
  on-primary-fixed-variant: '#7e205b'
  secondary-fixed: '#ffd9e3'
  secondary-fixed-dim: '#ffb0c9'
  on-secondary-fixed: '#3e001e'
  on-secondary-fixed-variant: '#8e004c'
  tertiary-fixed: '#ffdea5'
  tertiary-fixed-dim: '#e9c176'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4201'
  background: '#fbf8ff'
  on-background: '#181a2c'
  surface-variant: '#e0e0fa'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  section-padding: 80px
---

## Brand & Style

This design system embodies the narrative of **"Academic Excellence meets Global Diplomacy."** It is designed to position the International Partnership Office as a prestigious gateway between a high-ranking academic institution and the global stage. The aesthetic is sophisticated, authoritative, and welcoming, prioritizing clarity and tradition without feeling dated.

The visual style is a blend of **Minimalism** and **Modern Corporate**. By leveraging generous whitespace, it creates a sense of "intellectual breathing room," allowing high-quality photography and prestigious content to take center stage. The integration of subtle global motifs—such as fine-line grid patterns reminiscent of latitude lines or abstract cartography—reinforces the office's international mission.

## Colors

The palette is rooted in the university's visual identity while introducing "diplomatic" accents:

*   **Primary (Plum):** A deep, authoritative purple used for core branding, navigation anchors, and primary headings.
*   **Secondary (Magenta):** A vibrant accent used sparingly for call-to-actions (CTAs) and active states to provide a contemporary pulse.
*   **Accent (Champagne Gold):** Represents high-end quality and prestige. Used for subtle dividers, icons, and decorative elements that denote "honored" content.
*   **Neutral (Navy/Charcoal):** Used for body text and deep backgrounds to provide a grounding professional contrast against the crisp white surface.

## Typography

Typography follows an editorial hierarchy to evoke the feel of a high-end academic journal or a diplomatic communique. 

*   **Headlines:** Utilize *Playfair Display*. The serif nature provides the "Academic Excellence" feel, offering a traditional yet elegant structure to the page layout.
*   **Body & Utility:** Utilize *Inter*. This provides the "Modern Professionalism" needed for data-heavy sections, forms, and secondary information, ensuring high legibility across all digital interfaces.
*   **Scale:** Large headlines should use tighter letter-spacing for a "display" look, while labels utilize increased tracking and uppercase styling for a refined, utilitarian feel.

## Layout & Spacing

The layout utilizes a **Fixed Grid** model on desktop to maintain a structured, institutional feel. The central content area is capped to ensure line lengths remain readable for academic content.

*   **Grid:** 12-column grid system with 24px gutters.
*   **Rhythm:** Vertical rhythm is based on a 4px/8px baseline, but section padding is deliberately "over-sized" (80px+) to create the luxurious, airy feel required by the brand personality.
*   **Responsive:** On tablet and mobile, the layout transitions to a fluid system with reduced side margins, ensuring that the "prestige" is maintained through typography scale rather than just whitespace.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows. 

*   **Surfaces:** Backgrounds are kept largely off-white (#FCFCFD). Secondary surfaces use a very light gray (#F2F4F7) to create subtle containment.
*   **Borders:** Use thin, 1px lines in light gray or champagne gold to define sections. This creates a "blueprint" or "official document" aesthetic.
*   **Shadows:** When depth is necessary (e.g., on hover for partnership cards), use highly diffused, low-opacity shadows (5-10% opacity) with a slight blue/navy tint to avoid a "muddy" appearance.

## Shapes

The shape language is disciplined and professional. **Soft (0.25rem)** corners are the standard for buttons, cards, and input fields. This slight rounding takes the edge off a purely brutalist grid while maintaining a precise, official architectural feel. 

*   Avoid pill-shaped elements for primary buttons to maintain the formal tone. 
*   Interactive elements like search bars or primary tags may use the standard `rounded-lg` (0.5rem) only if they need to stand out from the rigid structural grid.

## Components

*   **Buttons:** Primary buttons use the Plum background with White text. Secondary buttons use a Ghost style (Gold or Plum border with matching text).
*   **Cards:** Partnership cards should feature a clean 1px border. Photography within cards should use a desaturated or high-contrast architectural style to maintain the "Academic" mood.
*   **Input Fields:** Use minimal, underline-only or very light-bordered inputs. Focus states should be indicated by a shift to the Primary Plum or Accent Gold.
*   **Navigation:** Top-tier navigation should be centered or right-aligned with ample space between items, using the `label-lg` typographic style.
*   **Global Motif Backgrounds:** Occasional use of a 10% opacity Gold or Navy "Global Grid" pattern (latitude/longitude lines) behind key sections to emphasize the international nature of the office.
*   **Chips/Tags:** Used for "Region" or "Field of Study". These should be rectangular with the `rounded-sm` setting and subtle background fills.