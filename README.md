# 🪐 Orbit Studio

Orbit Studio is a premium, performance-optimized digital agency landing page built using vanilla web technologies. It features smooth interactions, fluid responsive typography, dynamic portfolio filtering, and an immersive user interface tailored for creative and full-stack digital production studios.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ Features

- **Modern Glassmorphic UI**: High-fidelity interface utilizing clean custom layout variables, sleek container borders, and high-performance blur layers (`backdrop-filter`).
- **Dynamic Project Filtering**: Smooth client-side portfolio filtering transitions utilizing performance-isolated opacity and scaling adjustments.
- **Fluid Typography**: Fluid header systems using CSS `clamp()` logic to ensure seamless readability across viewport scales from mobile viewports to Ultra-Wide desktop viewports.
- **Performance-Oriented Scroll**: Smart navigation scroll caching bound directly to `requestAnimationFrame` cycles to prevent layout thrashing and maintain high FPS.
- **Accessibility & SEO Optimized**: Enhanced navigation accessibility containing semantic markup structures and screen-reader optimizations (`aria-*` parameters).

---

## 📂 Project Architecture

The workspace is streamlined into three high-cohesion, low-coupling vanilla components:

```text
├── index.html     # Semantic structure, layout templates, & accessibility hooks
├── style.css      # Core design system, custom utility variables, & animation sets
└── script.js      # Frame-throttled scrolling mechanics & portfolio filters
