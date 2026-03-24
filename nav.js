/* ═══════════════════════════════════════════════
   TRAVELWISE — SHARED NAV + FOOTER + THEME
   ═══════════════════════════════════════════════ */
(function () {

  /* ── Theme ── */
  var saved = localStorage.getItem('tw-theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);

  window.twToggleTheme = function () {
    var cur = document.documentElement.getAttribute('data-theme');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('tw-theme', next);
    var btn = document.getElementById('tw-theme-btn');
    if (btn) btn.textContent = next === 'dark' ? '🌙' : '☀️';
  };

  /* ── Active page detection ── */
  function active(href) {
    var page = window.location.pathname.split('/').pop() || 'index.html';
    return page === href ? ' class="nav-link active"' : ' class="nav-link"';
  }

  /* ── Logo SVG ── */
  var logoSVG = '<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="twng" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#6C2BD9"/><stop offset="1" stop-color="#00C9FF"/></linearGradient></defs><path d="M8 20L20 8L32 20M14 14V30H26V14" stroke="url(#twng)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="20" cy="22" r="3" fill="url(#twng)"/></svg>';

  /* ── NAV HTML ── */
  var navHTML = '<div id="cursor-glow"></div>\n' +
  '<div class="announce-bar" id="tw-announce">' +
    '✈ <strong>SUMMER SALE:</strong> Flat ₹2,500 off on international flights! Use code <strong>SUMMER25</strong>' +
    '&nbsp;·&nbsp; Ends March 31' +
    '<button class="ab-close" onclick="document.getElementById(\'tw-announce\').style.display=\'none\'" title="Close">✕</button>' +
  '</div>' +
  '<nav id="dp-nav">' +
    '<div class="nav-inner">' +
      '<a href="index.html" class="logo">' +
        '<div class="logo-icon">' + logoSVG + '</div>' +
        '<div class="logo-text"><span>Travel</span><span>Wise</span></div>' +
      '</a>' +
      '<ul class="nav-links" style="list-style:none;display:flex;align-items:center;gap:2px;margin:0;padding:0">' +
        '<li><a href="flights.html"' + active('flights.html') + '>✈ Flights</a></li>' +
        '<li><a href="hotels.html"' + active('hotels.html') + '>🏨 Hotels</a></li>' +
        '<li><a href="holidays.html"' + active('holidays.html') + '>🌴 Holidays</a></li>' +
        '<li><a href="trains.html"' + active('trains.html') + '>🚂 Trains</a></li>' +
        '<li><a href="offers.html"' + active('offers.html') + '>🏷 Offers</a></li>' +
        '<li><a href="guide.html"' + active('guide.html') + '>📍 Guide</a></li>' +
      '</ul>' +
      '<div class="nav-cta">' +
        '<button class="theme-toggle" id="tw-theme-btn" onclick="twToggleTheme()" title="Toggle theme">' + (saved === 'dark' ? '🌙' : '☀️') + '</button>' +
        '<a href="my-trips.html" class="btn-ghost">My Trips</a>' +
        '<a href="login.html" class="btn-primary"><span>Login</span></a>' +
      '</div>' +
      '<button class="dp-hamburger" id="tw-hamburger"><span></span><span></span><span></span></button>' +
    '</div>' +
  '</nav>' +
  '<div class="mobile-menu" id="tw-mobile-menu">' +
    '<a href="flights.html" class="nav-link">✈ Flights</a>' +
    '<a href="hotels.html" class="nav-link">🏨 Hotels</a>' +
    '<a href="holidays.html" class="nav-link">🌴 Holidays</a>' +
    '<a href="trains.html" class="nav-link">🚂 Trains</a>' +
    '<a href="offers.html" class="nav-link">🏷 Offers</a>' +
    '<a href="guide.html" class="nav-link">📍 Guide</a>' +
    '<a href="my-trips.html" class="nav-link">🗺 My Trips</a>' +
    '<a href="login.html" class="nav-link">👤 Login / Sign Up</a>' +
  '</div>';

  /* ── Footer logo SVG (different gradient ID) ── */
  var fLogoSVG = '<svg viewBox="0 0 40 40" fill="none"><defs><linearGradient id="twfg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stop-color="#6C2BD9"/><stop offset="1" stop-color="#00C9FF"/></linearGradient></defs><path d="M8 20L20 8L32 20M14 14V30H26V14" stroke="url(#twfg)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="20" cy="22" r="3" fill="url(#twfg)"/></svg>';

  /* ── FOOTER HTML ── */
  var footerHTML = '<footer id="dp-footer">' +
    '<div class="footer-inner">' +
      '<div class="footer-top reveal">' +
        '<div>' +
          '<div class="footer-brand-logo">' +
            '<div class="logo-icon" style="width:34px;height:34px;border-radius:9px;background:linear-gradient(135deg,#6C2BD9,#00C9FF);display:flex;align-items:center;justify-content:center;">' + fLogoSVG + '</div>' +
            '<span>Travel</span><span>Wise</span>' +
          '</div>' +
          '<p class="footer-desc">Your all-in-one travel companion. Flights, hotels, holidays and more — all at the best prices with zero compromise on experience.</p>' +
          '<div class="footer-socials">' +
            '<a href="#" class="social-btn" title="Instagram">ig</a>' +
            '<a href="#" class="social-btn" title="Twitter">tw</a>' +
            '<a href="#" class="social-btn" title="Facebook">fb</a>' +
            '<a href="#" class="social-btn" title="YouTube">yt</a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h5>Explore</h5>' +
          '<a href="flights.html">Flights</a>' +
          '<a href="hotels.html">Hotels</a>' +
          '<a href="holidays.html">Holidays</a>' +
          '<a href="trains.html">Trains</a>' +
          '<a href="offers.html">Offers</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h5>Company</h5>' +
          '<a href="about.html">About Us</a>' +
          '<a href="careers.html">Careers</a>' +
          '<a href="blog.html">Blog</a>' +
          '<a href="press.html">Press</a>' +
          '<a href="contact.html">Contact</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h5>Support</h5>' +
          '<a href="help.html">Help Center</a>' +
          '<a href="my-trips.html">My Trips</a>' +
          '<a href="refunds.html">Refunds</a>' +
          '<a href="safety.html">Travel Safety</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h5>Legal</h5>' +
          '<a href="privacy.html">Privacy Policy</a>' +
          '<a href="terms.html">Terms of Use</a>' +
          '<a href="cookies.html">Cookie Policy</a>' +
          '<a href="sitemap.html">Sitemap</a>' +
        '</div>' +
      '</div>' +
      '<div class="footer-wordmark">TravelWise</div>' +
      '<div class="footer-bottom">' +
        '<span>© 2026 TravelWise. All rights reserved. Built for explorers.</span>' +
        '<div class="pay-icons">' +
          '<span class="pay-icon">VISA</span>' +
          '<span class="pay-icon">MC</span>' +
          '<span class="pay-icon">UPI</span>' +
          '<span class="pay-icon">AMEX</span>' +
          '<span class="pay-icon">PAYPAL</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</footer>';

  /* ── Mobile bottom nav ── */
  var mobileNavHTML = '<nav class="mobile-nav" id="tw-bottom-nav">' +
    '<div class="mobile-nav-items">' +
      '<div class="mobile-nav-item" onclick="location.href=\'index.html\'">' +
        '<div class="mobile-nav-icon">🏠</div><span>Home</span>' +
      '</div>' +
      '<div class="mobile-nav-item" onclick="location.href=\'flights.html\'">' +
        '<div class="mobile-nav-icon">✈</div><span>Flights</span>' +
      '</div>' +
      '<div class="mobile-nav-item" onclick="location.href=\'hotels.html\'">' +
        '<div class="mobile-nav-icon">🏨</div><span>Hotels</span>' +
      '</div>' +
      '<div class="mobile-nav-item" onclick="location.href=\'my-trips.html\'">' +
        '<div class="mobile-nav-icon">🗺</div><span>Trips</span>' +
      '</div>' +
      '<div class="mobile-nav-item" onclick="location.href=\'login.html\'">' +
        '<div class="mobile-nav-icon">👤</div><span>Profile</span>' +
      '</div>' +
    '</div>' +
  '</nav>';

  /* ── Inject ── */
  function inject() {
    var navRoot = document.getElementById('nav-root');
    if (navRoot) navRoot.outerHTML = navHTML;

    var footRoot = document.getElementById('footer-root');
    if (footRoot) footRoot.outerHTML = footerHTML + mobileNavHTML;

    /* Hamburger */
    var ham = document.getElementById('tw-hamburger');
    var mob = document.getElementById('tw-mobile-menu');
    if (ham && mob) {
      ham.addEventListener('click', function () {
        mob.classList.toggle('open');
      });
      document.addEventListener('click', function (e) {
        if (!ham.contains(e.target) && !mob.contains(e.target)) mob.classList.remove('open');
      });
    }

    /* Navbar scroll effect */
    var nav = document.getElementById('dp-nav');
    if (nav) {
      window.addEventListener('scroll', function () {
        nav.classList.toggle('scrolled', window.scrollY > 10);
      });
    }

    /* Cursor glow */
    var glow = document.getElementById('cursor-glow');
    if (glow) {
      document.addEventListener('mousemove', function (e) {
        glow.style.left = e.clientX + 'px';
        glow.style.top  = e.clientY + 'px';
        glow.style.opacity = '1';
      });
      document.addEventListener('mouseleave', function () { glow.style.opacity = '0'; });
    }

    /* Scroll reveal */
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('revealed'); io.unobserve(en.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
    } else {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('revealed'); });
    }

    /* Mobile bottom nav active state */
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.mobile-nav-item').forEach(function (item) {
      var href = (item.getAttribute('onclick') || '').match(/href='([^']+)'/);
      if (href && href[1] === page) item.classList.add('active');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

  /* ── Global toast ── */
  window.twToast = function (msg, dur) {
    var t = document.getElementById('tw-toast');
    if (!t) return;
    t.innerHTML = msg;
    t.classList.add('show');
    clearTimeout(t._tid);
    t._tid = setTimeout(function () { t.classList.remove('show'); }, dur || 3000);
  };

  /* ── Re-observe reveals after dynamic content ── */
  window.twObserveReveals = function () {
    if (!window._twIO) return;
    document.querySelectorAll('.reveal:not(.revealed)').forEach(function (el) { window._twIO.observe(el); });
  };

})();
