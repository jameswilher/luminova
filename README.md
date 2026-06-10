[index.html](https://github.com/user-attachments/files/28785229/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Luminova Lighting Decor</title>
  <meta name="description" content="Elegant lighting decor website demo with interactive light switch room preview." />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <header class="site-header">
    <a href="#" class="logo">Luminova</a>

    <nav class="nav-links">
      <a href="#collections">Collections</a>
      <a href="#preview">Room Preview</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="#products" class="header-btn">Shop Now</a>
  </header>

  <main>
    <section class="hero">
      <div class="hero-content">
        <p class="eyebrow">Elegant Lighting Decor</p>
        <h1>Lighting that changes the way your home feels.</h1>
        <p class="hero-text">
          Discover warm, modern, and timeless lighting pieces made to bring calm,
          comfort, and beauty into every corner of your home.
        </p>

        <div class="hero-actions">
          <a href="#products" class="primary-btn">Shop Lighting</a>
          <a href="#preview" class="secondary-btn">Try Light Switch</a>
        </div>
      </div>

      <div class="hero-card">
        <div class="glow-circle"></div>
        <div class="lamp">
          <div class="lamp-shade"></div>
          <div class="lamp-light"></div>
          <div class="lamp-stand"></div>
          <div class="lamp-base"></div>
        </div>
      </div>
    </section>

    <section class="collections" id="collections">
      <div class="section-heading">
        <p class="eyebrow">Shop by Room</p>
        <h2>Lighting for every mood</h2>
      </div>

      <div class="collection-grid">
        <article class="collection-card">
          <span>01</span>
          <h3>Bedroom Lights</h3>
          <p>Soft glow pieces for calm nights and cozy mornings.</p>
        </article>

        <article class="collection-card">
          <span>02</span>
          <h3>Living Room</h3>
          <p>Warm accent lights designed for relaxed spaces.</p>
        </article>

        <article class="collection-card">
          <span>03</span>
          <h3>Wall Decor</h3>
          <p>Elegant wall lighting for premium home styling.</p>
        </article>

        <article class="collection-card">
          <span>04</span>
          <h3>Dining Area</h3>
          <p>Statement lighting that makes every dinner feel special.</p>
        </article>
      </div>
    </section>

    <section class="light-demo" id="preview">
      <div class="light-demo-content">
        <p class="eyebrow">Interactive Preview</p>
        <h2>See the glow before you buy.</h2>
        <p>
          Click the switch to preview how our lighting decor can turn a plain room
          into a warm, elegant, and inviting space.
        </p>

        <label class="light-switch">
          <input type="checkbox" id="lightToggle" />
          <span class="slider"></span>
          <span class="switch-label" id="switchLabel">Turn lights on</span>
        </label>
      </div>

      <div class="room-preview" aria-live="polite">
        <div class="room room-off" id="roomPreview">
          <div class="room-wall">
            <div class="wall-art"></div>
            <div class="wall-light left-light"></div>
            <div class="wall-light right-light"></div>
          </div>

          <div class="room-floor">
            <div class="sofa">
              <div class="sofa-back"></div>
              <div class="sofa-seat"></div>
              <div class="pillow pillow-one"></div>
              <div class="pillow pillow-two"></div>
            </div>

            <div class="table"></div>
            <div class="floor-lamp">
              <div class="floor-lamp-shade"></div>
              <div class="floor-lamp-glow"></div>
              <div class="floor-lamp-stick"></div>
              <div class="floor-lamp-base"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="products" id="products">
      <div class="section-heading">
        <p class="eyebrow">Featured Pieces</p>
        <h2>Best-selling lighting decor</h2>
      </div>

      <div class="product-grid">
        <article class="product-card">
          <div class="product-image pendant"></div>
          <h3>Amber Pendant Light</h3>
          <p>Warm modern hanging light for dining and living spaces.</p>
          <div class="product-bottom">
            <span>₱2,499</span>
            <button>Add to Cart</button>
          </div>
        </article>

        <article class="product-card">
          <div class="product-image wall"></div>
          <h3>Soft Glow Wall Lamp</h3>
          <p>Minimal wall light with a cozy hotel-style ambience.</p>
          <div class="product-bottom">
            <span>₱1,899</span>
            <button>Add to Cart</button>
          </div>
        </article>

        <article class="product-card">
          <div class="product-image table-lamp"></div>
          <h3>Marble Table Lamp</h3>
          <p>Elegant bedside lamp with a soft cream shade finish.</p>
          <div class="product-bottom">
            <span>₱1,599</span>
            <button>Add to Cart</button>
          </div>
        </article>
      </div>
    </section>

    <section class="brand-story">
      <div>
        <p class="eyebrow">Why Luminova</p>
        <h2>Simple lighting, premium feeling.</h2>
      </div>

      <p>
        Our lighting decor pieces are designed for homes that need warmth, comfort,
        and a more elevated look without feeling too expensive or complicated.
      </p>
    </section>

    <section class="contact" id="contact">
      <p class="eyebrow">Ready to decorate?</p>
      <h2>Bring a warmer glow into your home.</h2>
      <a href="mailto:hello@example.com" class="primary-btn">Contact Us</a>
    </section>
  </main>

  <footer class="footer">
    <p>© 2026 Luminova Lighting Decor. Sample project for Shopify concept presentation.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
[styles.css](https://github.com/user-attachments/files/28785242/styles.css)
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

:root {
  --cream: #f8f1e7;
  --warm: #e6c18c;
  --gold: #c58b3b;
  --brown: #2b2118;
  --muted: #806c5a;
  --white: #ffffff;
  --dark: #17120d;
  --shadow: 0 30px 80px rgba(43, 33, 24, 0.14);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: var(--cream);
  color: var(--brown);
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  font-family: inherit;
}

.site-header {
  width: min(1180px, calc(100% - 32px));
  margin: 20px auto 0;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(43, 33, 24, 0.09);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(14px);
  position: sticky;
  top: 16px;
  z-index: 20;
}

.logo {
  font-family: "Playfair Display", serif;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.nav-links {
  display: flex;
  gap: 26px;
  font-size: 14px;
  color: var(--muted);
}

.nav-links a:hover {
  color: var(--brown);
}

.header-btn,
.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 14px;
}

.header-btn,
.primary-btn {
  background: var(--brown);
  color: var(--white);
}

.secondary-btn {
  background: rgba(255, 255, 255, 0.75);
  color: var(--brown);
  border: 1px solid rgba(43, 33, 24, 0.12);
}

.hero {
  width: min(1180px, calc(100% - 32px));
  margin: 60px auto;
  min-height: 660px;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 48px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 2.2px;
  font-size: 12px;
  color: var(--gold);
  font-weight: 800;
  margin-bottom: 14px;
}

.hero h1,
.section-heading h2,
.light-demo-content h2,
.brand-story h2,
.contact h2 {
  font-family: "Playfair Display", serif;
  line-height: 0.98;
  letter-spacing: -1.5px;
}

.hero h1 {
  font-size: clamp(52px, 7vw, 94px);
  max-width: 800px;
}

.hero-text {
  margin-top: 24px;
  max-width: 560px;
  color: var(--muted);
  font-size: 18px;
  line-height: 1.8;
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  margin-top: 34px;
}

.hero-card {
  min-height: 560px;
  border-radius: 40px;
  background:
    radial-gradient(circle at top, rgba(230, 193, 140, 0.55), transparent 45%),
    linear-gradient(145deg, #3a2a1f, #0f0b08);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
}

.glow-circle {
  width: 360px;
  height: 360px;
  border-radius: 999px;
  background: rgba(239, 190, 101, 0.22);
  filter: blur(20px);
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
}

.lamp {
  position: absolute;
  left: 50%;
  bottom: 70px;
  transform: translateX(-50%);
  width: 230px;
  height: 410px;
}

.lamp-shade {
  width: 220px;
  height: 120px;
  background: linear-gradient(180deg, #f6dfb3, #a36529);
  clip-path: polygon(20% 0, 80% 0, 100% 100%, 0 100%);
  border-radius: 16px;
  position: relative;
  z-index: 3;
}

.lamp-light {
  width: 290px;
  height: 290px;
  background: radial-gradient(circle, rgba(255, 205, 112, 0.65), transparent 68%);
  position: absolute;
  top: 35px;
  left: -35px;
  z-index: 1;
  animation: pulse 3s infinite ease-in-out;
}

.lamp-stand {
  width: 12px;
  height: 220px;
  background: #c58b3b;
  margin: -2px auto 0;
  position: relative;
  z-index: 3;
}

.lamp-base {
  width: 140px;
  height: 20px;
  background: #c58b3b;
  border-radius: 999px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
}

@keyframes pulse {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.08);
  }
}

.collections,
.products {
  width: min(1180px, calc(100% - 32px));
  margin: 100px auto;
}

.section-heading {
  margin-bottom: 34px;
}

.section-heading h2,
.light-demo-content h2,
.brand-story h2,
.contact h2 {
  font-size: clamp(38px, 5vw, 64px);
}

.collection-grid,
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.collection-card,
.product-card,
.brand-story,
.contact {
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(43, 33, 24, 0.08);
  box-shadow: 0 20px 50px rgba(43, 33, 24, 0.06);
}

.collection-card {
  min-height: 240px;
  padding: 26px;
  border-radius: 28px;
}

.collection-card span {
  color: var(--gold);
  font-weight: 800;
  font-size: 13px;
}

.collection-card h3,
.product-card h3 {
  margin-top: 48px;
  margin-bottom: 12px;
  font-size: 22px;
}

.collection-card p,
.product-card p,
.brand-story p {
  color: var(--muted);
  line-height: 1.7;
}

.light-demo {
  width: min(1180px, calc(100% - 32px));
  margin: 100px auto;
  padding: 46px;
  border-radius: 42px;
  background: #fff8ef;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: center;
  gap: 36px;
  box-shadow: var(--shadow);
}

.light-demo-content p {
  color: var(--muted);
  line-height: 1.8;
  margin: 20px 0 28px;
}

.light-switch {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  cursor: pointer;
  user-select: none;
}

.light-switch input {
  display: none;
}

.slider {
  width: 78px;
  height: 40px;
  background: #2b2118;
  border-radius: 999px;
  position: relative;
  transition: 0.3s ease;
}

.slider::before {
  content: "";
  width: 32px;
  height: 32px;
  background: var(--white);
  border-radius: 999px;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: 0.3s ease;
}

.light-switch input:checked + .slider {
  background: var(--gold);
  box-shadow: 0 0 34px rgba(197, 139, 59, 0.7);
}

.light-switch input:checked + .slider::before {
  transform: translateX(38px);
}

.switch-label {
  font-weight: 800;
}

.room-preview {
  min-height: 520px;
  background: #15100c;
  border-radius: 34px;
  overflow: hidden;
  position: relative;
}

.room {
  height: 520px;
  position: relative;
  transition: 0.5s ease;
  background:
    linear-gradient(180deg, rgba(25, 20, 16, 0.94), rgba(21, 17, 14, 0.98)),
    radial-gradient(circle at 50% 40%, rgba(255, 190, 90, 0), transparent 48%);
}

.room.is-on {
  background:
    radial-gradient(circle at 25% 35%, rgba(255, 185, 86, 0.42), transparent 24%),
    radial-gradient(circle at 78% 36%, rgba(255, 185, 86, 0.38), transparent 24%),
    radial-gradient(circle at 78% 68%, rgba(255, 194, 102, 0.42), transparent 30%),
    linear-gradient(180deg, #72533b 0%, #3b2a20 100%);
}

.room-wall {
  height: 64%;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
  position: relative;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.room.is-on .room-wall {
  background: linear-gradient(180deg, rgba(255, 238, 203, 0.16), rgba(255,255,255,0.04));
}

.wall-art {
  width: 180px;
  height: 118px;
  border: 10px solid rgba(255,255,255,0.08);
  position: absolute;
  top: 82px;
  left: 50%;
  transform: translateX(-50%);
}

.room.is-on .wall-art {
  border-color: rgba(255, 229, 184, 0.28);
}

.wall-light {
  width: 28px;
  height: 70px;
  background: #4b392d;
  border-radius: 999px;
  position: absolute;
  top: 126px;
}

.left-light {
  left: 20%;
}

.right-light {
  right: 20%;
}

.room.is-on .wall-light {
  background: #ffd28a;
  box-shadow: 0 0 50px rgba(255, 196, 100, 0.85);
}

.room-floor {
  height: 36%;
  position: relative;
  background: linear-gradient(90deg, rgba(255,255,255,0.03), rgba(0,0,0,0.12));
}

.sofa {
  width: 340px;
  height: 160px;
  position: absolute;
  left: 60px;
  bottom: 48px;
}

.sofa-back {
  height: 90px;
  background: #433126;
  border-radius: 34px 34px 12px 12px;
}

.sofa-seat {
  height: 62px;
  background: #2e241d;
  border-radius: 16px 16px 30px 30px;
  margin-top: -12px;
}

.room.is-on .sofa-back {
  background: #8a6045;
}

.room.is-on .sofa-seat {
  background: #6b4937;
}

.pillow {
  width: 60px;
  height: 50px;
  background: #2c221c;
  border-radius: 16px;
  position: absolute;
  top: 58px;
}

.room.is-on .pillow {
  background: #d8a867;
}

.pillow-one {
  left: 74px;
}

.pillow-two {
  right: 76px;
}

.table {
  width: 110px;
  height: 22px;
  background: #3a2a20;
  border-radius: 999px;
  position: absolute;
  bottom: 42px;
  left: 245px;
}

.room.is-on .table {
  background: #7b563d;
}

.floor-lamp {
  position: absolute;
  right: 86px;
  bottom: 40px;
  width: 110px;
  height: 250px;
}

.floor-lamp-shade {
  width: 100px;
  height: 74px;
  background: #4c382b;
  clip-path: polygon(24% 0, 76% 0, 100% 100%, 0 100%);
  border-radius: 14px;
  position: relative;
  z-index: 3;
}

.room.is-on .floor-lamp-shade {
  background: #f6be73;
}

.floor-lamp-glow {
  position: absolute;
  width: 230px;
  height: 230px;
  top: -20px;
  left: -65px;
  background: radial-gradient(circle, rgba(255, 199, 102, 0), transparent 65%);
  transition: 0.4s ease;
}

.room.is-on .floor-lamp-glow {
  background: radial-gradient(circle, rgba(255, 199, 102, 0.56), transparent 65%);
}

.floor-lamp-stick {
  width: 8px;
  height: 148px;
  background: #4c382b;
  margin: -2px auto 0;
}

.floor-lamp-base {
  width: 90px;
  height: 16px;
  background: #4c382b;
  border-radius: 999px;
  margin: 0 auto;
}

.room.is-on .floor-lamp-stick,
.room.is-on .floor-lamp-base {
  background: #c58b3b;
}

.product-grid {
  grid-template-columns: repeat(3, 1fr);
}

.product-card {
  border-radius: 30px;
  padding: 18px;
}

.product-image {
  height: 290px;
  border-radius: 24px;
  background: #211811;
  position: relative;
  overflow: hidden;
}

.product-image::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(255, 199, 102, 0.55), transparent 52%);
}

.pendant::after {
  content: "";
  width: 120px;
  height: 120px;
  background: linear-gradient(180deg, #ffd38f, #9b5e25);
  clip-path: polygon(26% 0, 74% 0, 100% 100%, 0 100%);
  position: absolute;
  left: 50%;
  top: 70px;
  transform: translateX(-50%);
}

.wall::after {
  content: "";
  width: 90px;
  height: 160px;
  border-radius: 999px;
  background: linear-gradient(180deg, #ffe1a9, #9f6930);
  position: absolute;
  left: 50%;
  top: 60px;
  transform: translateX(-50%);
}

.table-lamp::after {
  content: "";
  width: 140px;
  height: 170px;
  background:
    linear-gradient(#ffe1a9 0 50%, transparent 50%),
    linear-gradient(90deg, transparent 46%, #c58b3b 46% 54%, transparent 54%);
  border-radius: 18px;
  position: absolute;
  left: 50%;
  top: 70px;
  transform: translateX(-50%);
}

.product-card h3 {
  margin-top: 18px;
}

.product-bottom {
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-bottom span {
  font-weight: 900;
  font-size: 20px;
}

.product-bottom button {
  border: none;
  background: var(--brown);
  color: var(--white);
  border-radius: 999px;
  padding: 12px 16px;
  font-weight: 800;
  cursor: pointer;
}

.brand-story {
  width: min(1180px, calc(100% - 32px));
  margin: 100px auto;
  padding: 46px;
  border-radius: 34px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: 40px;
}

.contact {
  width: min(900px, calc(100% - 32px));
  margin: 100px auto;
  padding: 70px 30px;
  text-align: center;
  border-radius: 34px;
}

.contact .primary-btn {
  margin-top: 30px;
}

.footer {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto 32px;
  padding: 24px 0;
  color: var(--muted);
  text-align: center;
  font-size: 14px;
}

@media (max-width: 980px) {
  .nav-links {
    display: none;
  }

  .hero,
  .light-demo,
  .brand-story {
    grid-template-columns: 1fr;
  }

  .hero-card {
    min-height: 420px;
  }

  .collection-grid,
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .room-preview,
  .room {
    height: 460px;
    min-height: 460px;
  }
}

@media (max-width: 620px) {
  .site-header {
    border-radius: 24px;
  }

  .header-btn {
    display: none;
  }

  .hero {
    margin-top: 46px;
    min-height: auto;
  }

  .hero h1 {
    font-size: 48px;
  }

  .collection-grid,
  .product-grid {
    grid-template-columns: 1fr;
  }

  .light-demo {
    padding: 24px;
    border-radius: 28px;
  }

  .room-preview,
  .room {
    height: 390px;
    min-height: 390px;
  }

  .sofa {
    width: 250px;
    left: 26px;
  }

  .floor-lamp {
    right: 22px;
  }

  .brand-story,
  .contact {
    padding: 32px 22px;
  }
}
[script.js](https://github.com/user-attachments/files/28785260/script.js)
const lightToggle = document.getElementById("lightToggle");
const roomPreview = document.getElementById("roomPreview");
const switchLabel = document.getElementById("switchLabel");

lightToggle.addEventListener("change", () => {
  const isOn = lightToggle.checked;

  roomPreview.classList.toggle("is-on", isOn);
  switchLabel.textContent = isOn ? "Lights are on" : "Turn lights on";
});
[README.md](https://github.com/user-attachments/files/28785264/README.md)
# Luminova Lighting Decor Demo

A sample elegant lighting decor landing page with an interactive light switch toggle.

This project is made for GitHub Pages and can also be used as a concept preview before building the final Shopify store.

## Features

- Elegant lighting decor homepage
- Interactive light on/off room preview
- Product card section
- Collection section
- Mobile responsive layout
- Clean HTML, CSS, and JavaScript

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload these files:
   - `index.html`
   - `styles.css`
   - `script.js`
3. Go to **Settings**.
4. Open **Pages**.
5. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
6. Click **Save**.
7. Wait for GitHub to generate your live website link.

## How to use this in Shopify

You can copy the light switch section from `index.html`, `styles.css`, and `script.js`, then add it inside a Shopify **Custom Liquid** section.

For a real Shopify store, replace the sample product cards with Shopify product sections and collections.

## Brand idea

**Luminova Lighting Decor**

Tagline:

> Elegant lighting that changes the way your home feels.

## Suggested Shopify collections

- Bedroom Lights
- Living Room Lights
- Wall Lights
- Pendant Lights
- Dining Lights
- LED Decor

## Notes

This is a front-end demo only. It does not include Shopify checkout, cart logic, inventory, or payment setup.
[shopify-custom-liquid.html](https://github.com/user-attachments/files/28785267/shopify-custom-liquid.html)
<!--
Shopify Custom Liquid Version
Paste this into a Custom Liquid section.
Replace the room graphics with real uploaded room images later if needed.
-->

<section class="light-demo-shopify">
  <div class="light-demo-content-shopify">
    <p class="eyebrow-shopify">Interactive Preview</p>
    <h2>See the glow before you buy.</h2>
    <p>
      Click the switch to preview how our lighting decor can turn a plain room
      into a warm, elegant, and inviting space.
    </p>

    <label class="light-switch-shopify">
      <input type="checkbox" id="shopifyLightToggle">
      <span class="slider-shopify"></span>
      <span id="shopifySwitchLabel">Turn lights on</span>
    </label>
  </div>

  <div class="room-preview-shopify">
    <div class="room-shopify" id="shopifyRoomPreview">
      <div class="wall-light-shopify left"></div>
      <div class="wall-light-shopify right"></div>
      <div class="sofa-shopify"></div>
      <div class="lamp-shopify"></div>
    </div>
  </div>
</section>

<style>
  .light-demo-shopify {
    max-width: 1200px;
    margin: 60px auto;
    padding: 46px;
    border-radius: 36px;
    background: #fff8ef;
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    align-items: center;
    gap: 36px;
  }

  .light-demo-content-shopify h2 {
    font-size: clamp(36px, 5vw, 62px);
    line-height: 1;
    margin: 0 0 18px;
    color: #2b2118;
  }

  .light-demo-content-shopify p {
    color: #806c5a;
    line-height: 1.7;
  }

  .eyebrow-shopify {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 12px;
    color: #c58b3b;
    font-weight: 800;
  }

  .light-switch-shopify {
    margin-top: 24px;
    display: inline-flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    font-weight: 800;
  }

  .light-switch-shopify input {
    display: none;
  }

  .slider-shopify {
    width: 78px;
    height: 40px;
    background: #2b2118;
    border-radius: 999px;
    position: relative;
    transition: 0.3s ease;
  }

  .slider-shopify:before {
    content: "";
    width: 32px;
    height: 32px;
    background: #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    left: 4px;
    transition: 0.3s ease;
  }

  .light-switch-shopify input:checked + .slider-shopify {
    background: #c58b3b;
    box-shadow: 0 0 34px rgba(197, 139, 59, 0.7);
  }

  .light-switch-shopify input:checked + .slider-shopify:before {
    transform: translateX(38px);
  }

  .room-preview-shopify {
    min-height: 500px;
    border-radius: 30px;
    overflow: hidden;
    background: #15100c;
  }

  .room-shopify {
    height: 500px;
    position: relative;
    background: linear-gradient(180deg, #191410, #0f0b08);
    transition: 0.4s ease;
  }

  .room-shopify.is-on {
    background:
      radial-gradient(circle at 25% 36%, rgba(255, 190, 90, 0.45), transparent 25%),
      radial-gradient(circle at 75% 36%, rgba(255, 190, 90, 0.42), transparent 25%),
      radial-gradient(circle at 80% 70%, rgba(255, 190, 90, 0.44), transparent 30%),
      linear-gradient(180deg, #76543a, #312119);
  }

  .wall-light-shopify {
    width: 30px;
    height: 80px;
    background: #4b392d;
    border-radius: 999px;
    position: absolute;
    top: 140px;
  }

  .wall-light-shopify.left {
    left: 24%;
  }

  .wall-light-shopify.right {
    right: 24%;
  }

  .room-shopify.is-on .wall-light-shopify {
    background: #ffd28a;
    box-shadow: 0 0 55px rgba(255, 196, 100, 0.85);
  }

  .sofa-shopify {
    width: 340px;
    height: 120px;
    background: #33261f;
    border-radius: 34px;
    position: absolute;
    left: 70px;
    bottom: 60px;
  }

  .room-shopify.is-on .sofa-shopify {
    background: #8a6045;
  }

  .lamp-shopify {
    width: 90px;
    height: 170px;
    background: #4c382b;
    border-radius: 40px 40px 8px 8px;
    position: absolute;
    right: 100px;
    bottom: 70px;
  }

  .room-shopify.is-on .lamp-shopify {
    background: #f6be73;
    box-shadow: 0 0 70px rgba(255, 199, 102, 0.62);
  }

  @media (max-width: 800px) {
    .light-demo-shopify {
      grid-template-columns: 1fr;
      padding: 24px;
    }
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("shopifyLightToggle");
    const room = document.getElementById("shopifyRoomPreview");
    const label = document.getElementById("shopifySwitchLabel");

    if (!toggle || !room || !label) return;

    toggle.addEventListener("change", function () {
      const isOn = toggle.checked;
      room.classList.toggle("is-on", isOn);
      label.textContent = isOn ? "Lights are on" : "Turn lights on";
    });
  });
</script>
