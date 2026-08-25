/* Utz Brands, Inc. × Vesper Commerce — 1-hour delivery mockup interactions */

// ---------- Product catalog (homepage grid) ----------
const PRODUCTS = [
  {
    "line": "Kettle Chips",
    "name": "Dirty Kettle Style Potato Chips Salt & Vinegar",
    "img": "assets/p0.jpg",
    "price": "$19.99",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Mid-Size ("
      }
    ]
  },
  {
    "line": "Kettle Chips",
    "name": "Dirty Kettle Style Potato Chips Sour Cream & O",
    "img": "assets/p1.jpg",
    "price": "$19.99",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Mid-Size ("
      }
    ]
  },
  {
    "line": "Kettle Chips",
    "name": "Dirty Kettle Style Potato Chips Mesquite BBQ",
    "img": "assets/p2.jpg",
    "price": "$19.99",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Mid-Size ("
      }
    ]
  },
  {
    "line": "Kettle Chips",
    "name": "Dirty Kettle Style Potato Chips Cracked Pepper",
    "img": "assets/p3.jpg",
    "price": "$19.99",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Mid-Size ("
      }
    ]
  },
  {
    "line": "Kettle Chips",
    "name": "Dirty Kettle Style Potato Chips Sea Salted",
    "img": "assets/p4.jpg",
    "price": "$19.99",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Mid-Size ("
      }
    ]
  },
  {
    "line": "Kettle Chips",
    "name": "Dirty Kettle Style Potato Chips Jalapeno Heat",
    "img": "assets/p5.jpg",
    "price": "$19.99",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Mid-Size ("
      }
    ]
  },
  {
    "line": "Kettle Chips",
    "name": "Boulder Canyon Kettle Potato Chips Malt Vinega",
    "img": "assets/p6.jpg",
    "price": "$22.49",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Family Siz"
      }
    ]
  },
  {
    "line": "Kettle Chips",
    "name": "Boulder Canyon Kettle Potato Chips Hickory BBQ",
    "img": "assets/p7.jpg",
    "price": "$23.49",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Family Siz"
      }
    ]
  },
  {
    "line": "Kettle Chips",
    "name": "Boulder Canyon Kettle Potato Chips Canyon Cut ",
    "img": "assets/p8.jpg",
    "price": "$28.49",
    "status": "",
    "rating": "",
    "stats": [
      {
        "k": "size",
        "v": "Family Siz"
      }
    ]
  }
];

function cardHTML(p) {
  const lineClass = p.line.toLowerCase() === "bronze" ? "bronze" : (p.line.toLowerCase()==="cod" ? "gold" : "gold");
  const statusTag = p.status ? `<span class="tag status">${p.status}</span>` : "";
  return `
  <a class="card" href="product.html">
    <div class="thumb">
      <div class="badges">
        ${p.line ? `<span class="tag line ${lineClass}"><span class="dot"></span> ${p.line}</span>` : ""}
        ${statusTag}
        <span class="tag onehr">⚡ 1-hr</span>
      </div>
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <div class="body">
      ${p.line ? `<div class="line-label">${p.line}</div>` : ""}
      <h3>${p.name}</h3>
      ${p.stats && p.stats.length ? `<div class="stats">${p.stats.map(s=>`<span><b>${s.v}</b> ${s.k}</span>`).join("")}</div>` : ""}
      ${p.rating ? `<div class="rating">★ ${p.rating} reviews</div>` : ""}
      <div class="foot">
        <span class="price">${p.price}</span>
        <button class="add" onclick="event.preventDefault();addToCart()">Add</button>
      </div>
    </div>
  </a>`;
}

// ---------- On-demand catalog (Utz Brands, Inc. Now page) ----------
const NOW_PRODUCTS = [
  {
    "line": "Kettle Chips",
    "format": "Single",
    "name": "Dirty Kettle Style Potato Chips Salt & Vinegar",
    "img": "assets/p0.jpg",
    "size": "Mid-Size (4.75",
    "badge": null,
    "price": "$5.00"
  },
  {
    "line": "Kettle Chips",
    "format": "Single",
    "name": "Dirty Kettle Style Potato Chips Sour Cream & O",
    "img": "assets/p1.jpg",
    "size": "Mid-Size (4.75",
    "badge": null,
    "price": "$5.00"
  },
  {
    "line": "Kettle Chips",
    "format": "Single",
    "name": "Dirty Kettle Style Potato Chips Mesquite BBQ",
    "img": "assets/p2.jpg",
    "size": "Mid-Size (4.75",
    "badge": null,
    "price": "$5.00"
  },
  {
    "line": "Kettle Chips",
    "format": "Single",
    "name": "Dirty Kettle Style Potato Chips Cracked Pepper",
    "img": "assets/p3.jpg",
    "size": "Mid-Size (4.75",
    "badge": null,
    "price": "$5.00"
  },
  {
    "line": "Kettle Chips",
    "format": "Single",
    "name": "Dirty Kettle Style Potato Chips Sea Salted",
    "img": "assets/p4.jpg",
    "size": "Mid-Size (4.75",
    "badge": null,
    "price": "$5.00"
  },
  {
    "line": "Kettle Chips",
    "format": "Single",
    "name": "Dirty Kettle Style Potato Chips Jalapeno Heat",
    "img": "assets/p5.jpg",
    "size": "Mid-Size (4.75",
    "badge": null,
    "price": "$5.00"
  },
  {
    "line": "Kettle Chips",
    "format": "Single",
    "name": "Boulder Canyon Kettle Potato Chips Malt Vinega",
    "img": "assets/p6.jpg",
    "size": "Family Size (6",
    "badge": null,
    "price": "$5.62"
  },
  {
    "line": "Kettle Chips",
    "format": "Single",
    "name": "Boulder Canyon Kettle Potato Chips Hickory BBQ",
    "img": "assets/p7.jpg",
    "size": "Family Size (6",
    "badge": null,
    "price": "$5.87"
  }
];

function nowCardHTML(p) {
  const lineClass = p.line.toLowerCase() === "bronze" ? "bronze" : "gold";
  return `
  <div class="now-card">
    <div class="now-thumb">
      <button class="now-add" onclick="addToCart()" aria-label="Add ${p.name}">Add</button>
      ${p.badge ? `<span class="now-protein">${p.badge.v}<small>${p.badge.k}</small></span>` : ""}
      <img src="${p.img}" alt="${p.name}" loading="lazy" />
    </div>
    <div class="now-body">
      <div class="now-format"><span class="tag line ${lineClass}"><span class="dot"></span> ${p.line}</span> · ${p.format}</div>
      <h3>${p.name}</h3>
      <div class="now-foot"><span class="now-size">${p.size}</span><span class="now-price">${p.price}</span></div>
    </div>
  </div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("prodGrid");
  if (grid) grid.innerHTML = PRODUCTS.map(cardHTML).join("");
  const nowGrid = document.getElementById("nowGrid");
  if (nowGrid) nowGrid.innerHTML = NOW_PRODUCTS.map(nowCardHTML).join("");
  // restore cart count
  const c = sessionStorage.getItem("cartCount");
  if (c) setCartCount(parseInt(c, 10));
});

// Utz Brands, Inc. Now address check -> reveal grid
function nowCheck() {
  const el = document.getElementById("nowAddrState");
  const grid = document.getElementById("nowGridWrap");
  if (el) el.classList.add("show");
  if (grid) grid.classList.add("show");
}

// ---------- Cart ----------
function setCartCount(n) {
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = n);
  sessionStorage.setItem("cartCount", n);
}
function addToCart() {
  const el = document.querySelector(".cart-count");
  const n = (el ? parseInt(el.textContent, 10) : 0) + 1;
  setCartCount(n);
  toast("Added to cart · eligible for 1-hour delivery ⚡");
}

// ---------- Homepage address availability ----------
function checkAvailability() {
  const box = document.getElementById("availResult");
  if (box) box.classList.add("show");
}

// ---------- PDP: purchase modes ----------
function setMode(mode) {
  document.querySelectorAll(".buy-mode").forEach(b => b.classList.toggle("active", b.dataset.mode === mode));
  const isOneHr = mode === "onehr";
  const mod = document.getElementById("onehrModule");
  const stdBenefits = document.getElementById("stdBenefits");
  const stdBuyRow = document.getElementById("stdBuyRow");
  if (mod) mod.style.display = isOneHr ? "block" : "none";
  if (stdBenefits) stdBenefits.style.display = isOneHr ? "none" : "grid";
  if (stdBuyRow) stdBuyRow.style.display = isOneHr ? "none" : "flex";
  const addBtn = document.getElementById("addBtn");
  if (addBtn && !isOneHr) {
    addBtn.textContent = mode === "subscribe" ? "Subscribe — $17.99" : "Add to cart — $19.99";
  }
}
function pdpCheck() {
  const a = document.getElementById("pdpAvail");
  if (a) a.style.display = "block";
}
let q = 1;
function qty(d) {
  q = Math.max(1, q + d);
  const el = document.getElementById("qtyVal");
  if (el) el.textContent = q;
}

// ---------- Checkout v2: shipping + plan + totals ----------
const CO = { subtotal: 39.98, tax: 3.55, ship: 7.0, shipLabel: "1-Hour delivery" };

function selectShip(el) {
  document.querySelectorAll("#shipOpts .co-opt").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
  CO.ship = parseFloat(el.dataset.cost);
  CO.shipLabel = el.dataset.label || "Shipping";
  // show/hide the 1-hour routing note
  const note = document.getElementById("routeNote");
  if (note) note.style.display = el.classList.contains("onehr") ? "flex" : "none";
  updateCheckoutTotals();
}
function updateCheckoutTotals() {
  const total = CO.subtotal + CO.ship + CO.tax;
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set("sumShipLabel", CO.shipLabel);
  set("sumShip", CO.ship === 0 ? "FREE" : "$" + CO.ship.toFixed(2));
  set("sumTotal", "$" + total.toFixed(2));
  const inst = (total / 4).toFixed(2);
  set("instAmt", "$" + inst);
  const pb = document.getElementById("placeBtn");
  if (pb) pb.textContent = "Place order · $" + total.toFixed(2);
}
function selectPlan(el) {
  document.querySelectorAll("#planOpts .co-opt").forEach(o => o.classList.remove("selected"));
  el.classList.add("selected");
}
function placeOrder() {
  const oneHr = document.querySelector("#shipOpts .co-opt.selected.onehr");
  toast(oneHr ? "Order placed ⚡ Routing to nearest store — arriving in ~52 min"
              : "Order placed ✓ Thanks — your Utz Brands, Inc. order is confirmed.");
}
document.addEventListener("DOMContentLoaded", updateCheckoutTotals);

// ---------- Slide-out cart drawer + rewards meter ----------
const CART = {"name": "Dirty Kettle Style Potato Chips Salt & Vinegar", "line": "Kettle Chips", "img": "assets/p0.jpg", "unit": 19.99, "qty": 2, "sub": false};
const TIERS = [
  { key: "ship", label: "Free Shipping", at: 2, pos: 16 },
  { key: "gift", label: "Free Gift",     at: 3, pos: 58 },
  { key: "cart", label: "Free Carton",   at: 4, pos: 100 },
];

function injectCartDrawer() {
  if (document.getElementById("cartDrawer")) return;
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
    <aside class="cart-drawer" id="cartDrawer" aria-label="Your cart">
      <div class="cart-head">
        <h2>Your cart <span id="cartQtyHead">(2)</span></h2>
        <button class="cart-close" onclick="closeCart()" aria-label="Close cart">✕</button>
      </div>
      <div class="meter">
        <div class="meter-tiers" id="meterTiers"></div>
        <div class="meter-track"><div class="meter-fill" id="meterFill"></div><div id="meterNodes"></div></div>
        <div class="meter-msg" id="meterMsg"></div>
      </div>
      <div class="cart-eligible"><span>⚡</span> <span>This item is eligible for <b>1-hour delivery</b> in New York.</span></div>
      <div class="cart-body" id="cartBody"></div>
      <div class="cart-foot">
        <div class="cart-sub-toggle">
          <label><input type="checkbox" id="cartSub" onchange="toggleSub()" /> Subscribe to your cart &amp; save.</label>
          <span class="save">Save 10%</span>
        </div>
        <button class="cart-checkout" onclick="location.href='checkout.html'" id="cartCheckoutBtn">Checkout — $78</button>
        <div class="cart-fineprint">Taxes, discounts and shipping calculated at checkout.</div>
      </div>
    </aside>`;
  document.body.appendChild(wrap);
  renderCart();
}

function renderCart() {
  const q = CART.qty;
  // tiers
  const tiers = document.getElementById("meterTiers");
  if (tiers) tiers.innerHTML = TIERS.map(t => `<div class="meter-tier ${q >= t.at ? "done" : ""}">${t.label}</div>`).join("");
  // nodes
  const nodes = document.getElementById("meterNodes");
  if (nodes) nodes.innerHTML = TIERS.map(t => {
    const state = q >= t.at ? (q === t.at ? "current" : "done") : "";
    return `<div class="meter-node ${state}" style="left:${t.pos}%"><span class="lbl">${t.at} Carton${t.at>1?"s":""}</span></div>`;
  }).join("");
  // fill
  const fill = document.getElementById("meterFill");
  if (fill) {
    let pct = 6;
    if (q >= 4) pct = 100; else if (q === 3) pct = 58; else if (q === 2) pct = 16; else pct = 6;
    fill.style.width = pct + "%";
  }
  // message
  const msg = document.getElementById("meterMsg");
  if (msg) {
    if (q >= 4) msg.innerHTML = `🎉 You've unlocked a <b>free carton</b>!`;
    else if (q === 3) msg.innerHTML = `Add <b>1 more carton</b> to unlock a free carton.`;
    else if (q === 2) msg.innerHTML = `<span class="bolt">✓</span> Free shipping unlocked — add 1 more for a <b>free gift</b>.`;
    else msg.innerHTML = `Add <b>1 more carton</b> for free shipping.`;
  }
  // line item
  const body = document.getElementById("cartBody");
  if (body) body.innerHTML = `
    <div class="cart-line">
      <div class="im"><img src="${CART.img}" alt="" /></div>
      <div class="info">
        <div class="ln"><span class="dot"></span> ${CART.line}</div>
        <h3>${CART.name}</h3>
        <div class="pr">$${CART.unit.toFixed(2)}&nbsp; | &nbsp;1 Carton – 12 Bars.</div>
        <div class="sub-row"><span>Subscription:<br/>${CART.sub ? "Subscribe & Save 10%" : "One-Time Purchase"}</span><a href="#" onclick="event.preventDefault();toggleSubLink()">Edit</a></div>
        <div class="qty-row2">
          <div class="cart-stepper"><button onclick="cartQty(-1)">−</button><span id="cartLineQty">${CART.qty}</span><button onclick="cartQty(1)">+</button></div>
          <button class="rm" onclick="cartRemove()">Remove</button>
        </div>
      </div>
    </div>`;
  // header + checkout total
  const factor = CART.sub ? 0.9 : 1;
  const total = CART.qty * CART.unit * factor;
  const head = document.getElementById("cartQtyHead");
  if (head) head.textContent = `(${CART.qty})`;
  const btn = document.getElementById("cartCheckoutBtn");
  if (btn) btn.textContent = `Checkout — $${total.toFixed(total % 1 ? 2 : 0)}`;
  setCartCount(CART.qty);
}
function openCart() { injectCartDrawer(); requestAnimationFrame(() => { document.getElementById("cartOverlay").classList.add("open"); document.getElementById("cartDrawer").classList.add("open"); }); }
function closeCart() { const o=document.getElementById("cartOverlay"), d=document.getElementById("cartDrawer"); if(o)o.classList.remove("open"); if(d)d.classList.remove("open"); }
function cartQty(d) { CART.qty = Math.max(1, CART.qty + d); renderCart(); }
function cartRemove() { CART.qty = 1; renderCart(); }
function toggleSub() { CART.sub = document.getElementById("cartSub").checked; renderCart(); }
function toggleSubLink() { CART.sub = !CART.sub; const c=document.getElementById("cartSub"); if(c)c.checked=CART.sub; renderCart(); }

// ---------- Mobile hamburger menu ----------
function injectMobileMenu() {
  if (document.getElementById("mobileMenu")) return;
  const active = location.pathname.endsWith("utzsnacks-now.html") ? "brand-now" : "";
  const wrap = document.createElement("div");
  wrap.innerHTML = `
    <div class="menu-overlay" id="menuOverlay" onclick="closeMenu()"></div>
    <nav class="mobile-menu" id="mobileMenu" aria-label="Menu">
      <div class="mm-head">
        <span class="wordmark">Utz Brands, Inc.</span>
        <button class="mm-close" onclick="closeMenu()" aria-label="Close menu">✕</button>
      </div>
      <div class="mm-links">
        <a href="index.html#shop">Shop all</a>
        <a href="index.html#shop">Bars</a>
        <a href="index.html#shop">Pints</a>
        <a href="index.html#shop">Bundle</a>
        <a href="utzsnacks-now.html" class="${active === "brand-now" ? "active" : ""}">Utz Brands, Inc. Now</a>
      </div>
      <div class="mm-cta"><a href="utzsnacks-now.html" class="btn btn-white btn-block">⚡ Check your address</a></div>
      <div class="mm-sub">
        <a href="#">Store locator</a>
        <a href="#">Wholesale</a>
        <a href="checkout.html" onclick="event.preventDefault();closeMenu();openCart()">Cart</a>
      </div>
    </nav>`;
  document.body.appendChild(wrap);
}
function openMenu() { injectMobileMenu(); requestAnimationFrame(() => { document.getElementById("menuOverlay").classList.add("open"); document.getElementById("mobileMenu").classList.add("open"); }); }
function closeMenu() { const o = document.getElementById("menuOverlay"), m = document.getElementById("mobileMenu"); if (o) o.classList.remove("open"); if (m) m.classList.remove("open"); }

// ---------- tiny toast ----------
function toast(msg) {
  let t = document.getElementById("__toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "__toast";
    t.style.cssText = "position:fixed;left:50%;bottom:70px;transform:translateX(-50%);background:#0a0a0a;color:#fff;padding:13px 22px;border-radius:999px;font-family:var(--mono),monospace;font-size:13px;z-index:200;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:opacity .25s ease;";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.style.opacity = "1";
  clearTimeout(t._h);
  t._h = setTimeout(() => { t.style.opacity = "0"; }, 2600);
}
