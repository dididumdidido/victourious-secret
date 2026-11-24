/* ============================================================
   SITE SETTINGS — edit these, no other code changes needed.
   Form endpoints: create free forms at https://formspree.io
   (or similar) and paste each form's URL below. Until then the
   forms run in "preview mode" and nothing is sent anywhere.
   ============================================================ */
const SITE = {
  name: "Victorious Secret",
  shortName: "VS",
  tagline: "Take back your power. Find small victories on the road to healing.",
  contactEmail: "",            // e.g. "hello@yourdomain.org"
  forms: {
    survey:   "",              // e.g. "https://formspree.io/f/xxxxxxx"
    provider: "",
    newsletter: ""
  }
};

const MARK = `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 92 C 34 78, 10 62, 12 40 C 14 22, 34 16, 46 30 C 56 42, 56 72, 50 92 Z" fill="#dfa25f" style="mix-blend-mode:multiply"/><path d="M46 80 C 42 64, 44 42, 58 31 C 70 22, 90 26, 90 43 C 90 60, 68 70, 46 80 Z" fill="#d2aec2" style="mix-blend-mode:multiply"/></svg>`;
const MOON = `<svg viewBox="0 0 200 200" aria-hidden="true"><defs><mask id="mc"><rect width="200" height="200" fill="#fff"/><circle cx="128" cy="82" r="72" fill="#000"/></mask></defs><circle cx="96" cy="104" r="82" fill="currentColor" mask="url(#mc)"/></svg>`;
const DECO = `<svg class="deco" viewBox="0 0 200 160" aria-hidden="true"><defs><mask id="dm"><rect width="200" height="160" fill="#fff"/><circle cx="128" cy="62" r="58" fill="#000"/></mask></defs><circle cx="100" cy="82" r="66" fill="#cfc7ba" mask="url(#dm)"/><path d="M104 132 C 84 114, 58 96, 60 72 C 62 52, 86 46, 98 62 C 108 76, 110 108, 104 132 Z" fill="#dfa25f" style="mix-blend-mode:multiply"/><path d="M98 116 C 94 98, 96 74, 112 62 C 126 52, 148 56, 148 76 C 148 96, 124 106, 98 116 Z" fill="#d2aec2" style="mix-blend-mode:multiply"/><circle cx="160" cy="124" r="10" fill="#2b3f47"/><circle cx="40" cy="40" r="7" fill="#2b3f47"/></svg>`;

/* ---------- shared header + footer ---------- */
const NAV = [
  ["index.html", "Home"],
  ["survey.html", "Take the Survey"],
  ["results.html", "Results"],
  ["resources.html", "Find Help"],
  ["stories.html", "Stories"],
  ["petition.html", "Petition"],
  ["providers.html", "For Providers"],
  ["about.html", "About"]
];

function renderChrome() {
  const here = location.pathname.split("/").pop() || "index.html";
  const links = NAV.map(([href, label]) =>
    `<li><a href="${href}"${href === here ? ' aria-current="page"' : ""}>${label}</a></li>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <a class="skip" href="#main">Skip to content</a>
    <div class="crisis">In crisis right now? <a href="tel:988">Call 988, then press 1</a> (Veterans &amp; Military Crisis Line) or text <a href="sms:838255">838255</a>.
      Sexual assault support: <a href="https://www.safehelpline.org" target="_blank" rel="noopener">DoD Safe Helpline</a> 877-995-5247.</div>
    <header class="site"><div class="wrap nav">
      <a class="brand" href="index.html">${MARK}${SITE.name}</a>
      <button class="menu-btn" aria-expanded="false" aria-controls="navlist">Menu</button>
      <ul id="navlist">${links}</ul>
    </div></header>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site"><div class="moon-bg" style="color:#efe6d6">${MOON}</div><div class="wrap">
      <div class="cols">
        <div><h4>${SITE.name}</h4><p>Helping service members and veterans affected by harassment, sexual harassment, or assault take back their power — and find small victories on the road to healing.</p></div>
        <div><h4>Explore</h4><p><a href="survey.html">Anonymous survey</a><br><a href="results.html">Survey results</a><br><a href="resources.html">Find help</a><br><a href="providers.html">List your practice</a></p></div>
        <div><h4>Stay in the loop</h4>
          <form class="js-form" data-form="newsletter">
            <input type="email" name="email" placeholder="Email (optional, ~1/month)" aria-label="Email" required style="margin-bottom:8px">
            <button class="btn btn-gold" type="submit">Join the list</button>
            <p class="thanks" style="margin-top:8px">Thank you — you're on the list.</p>
          </form></div>
      </div>
      <p class="fine">${SITE.name} is a community project in early development and is not affiliated with the Department of Defense, the VA, or any branch of service. Nothing on this site is legal or medical advice. Listings are informational only — always verify a provider before engaging. &copy; ${new Date().getFullYear()}</p>
    </div></footer>`);

  const head = document.querySelector(".page-head");
  if (head) head.insertAdjacentHTML("beforeend", DECO);

  const btn = document.querySelector(".menu-btn"), ul = document.getElementById("navlist");
  btn.addEventListener("click", () => {
    const open = ul.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
}

/* ---------- forms (Formspree-compatible) ---------- */
function wireForms() {
  document.querySelectorAll("form.js-form").forEach(form => {
    form.addEventListener("submit", async e => {
      e.preventDefault();
      const endpoint = SITE.forms[form.dataset.form];
      const thanks = form.querySelector(".thanks") || document.querySelector(`.thanks[data-for="${form.dataset.form}"]`);
      const done = msg => {
        if (thanks) { if (msg) thanks.textContent = msg; thanks.classList.add("show"); }
        form.querySelectorAll("button[type=submit]").forEach(b => b.disabled = true);
        if (form.dataset.hideOnDone) form.querySelectorAll(form.dataset.hideOnDone).forEach(el => el.style.display = "none");
        form.dispatchEvent(new CustomEvent("vs:submitted"));
      };
      if (!endpoint) {
        console.info("[preview mode] form data:", Object.fromEntries(new FormData(form)));
        done(thanks && thanks.dataset.preview ? thanks.dataset.preview : null);
        return;
      }
      try {
        const r = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!r.ok) throw new Error(r.status);
        done();
      } catch (err) {
        alert("Sorry — that didn't go through. Please try again in a moment.");
      }
    });
  });
}

/* ---------- fade-up on scroll ---------- */
function wireReveal() {
  const els = document.querySelectorAll("section:not(.hero) .card, section:not(.hero) h2, .page-head h1");
  if (!("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: .12 });
  els.forEach((el, i) => { el.classList.add("reveal"); el.style.transitionDelay = (i % 3) * 90 + "ms"; io.observe(el); });
}

document.addEventListener("DOMContentLoaded", () => { renderChrome(); wireForms(); wireReveal(); });
