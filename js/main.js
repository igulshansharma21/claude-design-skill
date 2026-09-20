(() => {
  'use strict';

  /* ============================================================
     DATA
     ============================================================ */
  const MODELS = [
    {
      id: 'thar-roxx', name: 'Thar Roxx', tagline: 'Explore the Impossible',
      category: 'off-road', offroad: true, img: 'media/models/thar-roxx.png',
      priceMin: 12.99, priceMax: 20.99, onRoadEst: 1550000,
      engine: '2.0L mStallion Petrol / 2.2L mHawk Diesel',
      power: '150 PS / 130 PS', torque: '320 Nm / 300 Nm',
      seating: '5', drivetrain: 'RWD & 4WD', transmission: '6MT / 6AT'
    },
    {
      id: 'thar', name: 'Thar', tagline: 'Born Wild',
      category: 'off-road', offroad: true, img: 'media/models/thar.png',
      priceMin: 9.99, priceMax: 16.99, onRoadEst: 1250000,
      engine: '2.0L mStallion Petrol / 2.2L mHawk Diesel',
      power: '150 PS / 130 PS', torque: '320 Nm / 300 Nm',
      seating: '4', drivetrain: 'RWD & 4WD', transmission: '6MT / 6AT'
    },
    {
      id: 'scorpio-n', name: 'Scorpio-N', tagline: 'Presence Personified',
      category: 'family', offroad: true, img: 'media/models/scorpio-n.png',
      priceMin: 13.69, priceMax: 24.99, onRoadEst: 1650000,
      engine: '2.0L mStallion Petrol / 2.2L mHawk Diesel',
      power: '200 PS / up to 172 PS', torque: '380 Nm / up to 400 Nm',
      seating: '6 / 7', drivetrain: 'RWD & 4WD', transmission: '6MT / 6AT'
    },
    {
      id: 'scorpio-classic', name: 'Scorpio Classic', tagline: 'The Legend Continues',
      category: 'family', offroad: true, img: 'media/models/scorpio-classic.png',
      priceMin: 13.69, priceMax: 17.49, onRoadEst: 1500000,
      engine: '2.2L mHawk Diesel',
      power: '132 PS', torque: '300 Nm',
      seating: '7 / 9', drivetrain: 'RWD & 4WD', transmission: '6MT / 6AT'
    },
    {
      id: 'xuv700', name: 'XUV 7XO', tagline: 'Nothing Like Anything',
      category: 'family', offroad: false, img: 'media/models/xuv7xo.png',
      priceMin: 14.51, priceMax: 26.99, onRoadEst: 1750000,
      engine: '2.0L mStallion Petrol / 2.2L mHawk Diesel',
      power: '200 PS / up to 185 PS', torque: '380 Nm / up to 450 Nm',
      seating: '5 / 7', drivetrain: 'FWD & AWD', transmission: '6MT / 6AT'
    },
    {
      id: 'xuv-3xo', name: 'XUV 3XO', tagline: 'Astonish Every Time',
      category: 'compact', offroad: false, img: 'media/models/xuv-3xo.png',
      priceMin: 7.49, priceMax: 14.49, onRoadEst: 950000,
      engine: '1.2L Turbo-Petrol / 1.5L Diesel',
      power: 'up to 130 PS / 117 PS', torque: 'up to 230 Nm / 300 Nm',
      seating: '5', drivetrain: 'FWD', transmission: '6MT / AMT / 6AT'
    },
    {
      id: 'bolero', name: 'Bolero', tagline: 'Truly Tough',
      category: 'compact', offroad: true, img: 'media/models/bolero.png',
      priceMin: 9.90, priceMax: 12.28, onRoadEst: 1150000,
      engine: '1.5L mHawk Diesel',
      power: '75 PS', torque: '210 Nm',
      seating: '7', drivetrain: 'RWD', transmission: '5MT'
    }
  ];

  const CATEGORY_LABEL = { 'off-road': 'Off-Road', family: 'Family', compact: 'Compact' };

  const DEALERS = {
    'Mumbai': [
      { name: 'Mahindra First Choice — Andheri', addr: 'Link Road, Andheri West, Mumbai, MH 400053', phone: '022-4001-2200' },
      { name: 'Big Bloc Mahindra — Thane', addr: 'Ghodbunder Road, Thane West, MH 400607', phone: '022-4001-2299' }
    ],
    'Delhi NCR': [
      { name: 'Mahindra — Connaught Place', addr: 'Barakhamba Road, New Delhi 110001', phone: '011-4900-3300' },
      { name: 'Mahindra — Gurugram', addr: 'NH-48 Service Road, Gurugram, HR 122001', phone: '0124-450-1122' }
    ],
    'Bengaluru': [
      { name: 'Mahindra — Outer Ring Road', addr: 'ORR, Marathahalli, Bengaluru, KA 560037', phone: '080-4980-1155' },
      { name: 'Mahindra — Whitefield', addr: 'ITPL Main Road, Whitefield, Bengaluru, KA 560066', phone: '080-4980-1177' }
    ],
    'Pune': [
      { name: 'Mahindra — Hinjewadi', addr: 'Hinjewadi Phase 1, Pune, MH 411057', phone: '020-6740-2200' }
    ],
    'Chennai': [
      { name: 'Mahindra — OMR', addr: 'Old Mahabalipuram Road, Chennai, TN 600097', phone: '044-4900-2211' }
    ],
    'Hyderabad': [
      { name: 'Mahindra — Gachibowli', addr: 'Financial District, Gachibowli, Hyderabad, TG 500032', phone: '040-4970-3300' }
    ],
    'Ahmedabad': [
      { name: 'Mahindra — S.G. Highway', addr: 'S.G. Highway, Ahmedabad, GJ 380054', phone: '079-4890-1122' }
    ],
    'Jaipur': [
      { name: 'Mahindra — Tonk Road', addr: 'Tonk Road, Jaipur, RJ 302015', phone: '0141-490-1188' }
    ]
  };

  const REVIEWS = [
    { name: 'Rohan Deshmukh', meta: 'Thar Roxx Owner · Nashik', rating: 5, text: 'Took it straight from the showroom to a weekend trail near Igatpuri. The 4WD low-range shifted my expectations of what a factory SUV can do off-road.' },
    { name: 'Priya Nair', meta: 'XUV 7XO Owner · Kochi', rating: 5, text: 'ADAS on Kerala highways during monsoon season has genuinely made long drives less stressful. The cabin tech still feels ahead of cars twice the price.' },
    { name: 'Authorized Dealer Partner', meta: 'Mahindra — Gurugram', rating: 5, text: 'Scorpio-N and XUV 7XO bookings dominate our waitlist. Customers consistently mention the safety ratings as the deciding factor over competitors.' },
    { name: 'Karan Mehta', meta: 'Scorpio Classic Owner · Ahmedabad', rating: 4, text: 'Bought it for the family business and it hasn’t missed a service interval in three years. Ground clearance is unmatched on our village roads.' },
    { name: 'Ananya Iyer', meta: 'XUV 3XO Owner · Bengaluru', rating: 5, text: 'My first car and it doesn’t feel like an entry SUV at all — panoramic sunroof and the ADAS pack on a compact SUV was the deciding factor.' },
    { name: 'Authorized Dealer Partner', meta: 'Mahindra — Chennai', rating: 4, text: 'Bolero remains our highest-volume mover in Tier 2 markets — fleet buyers trust the low cost of ownership more than any spec sheet.' }
  ];

  /* ============================================================
     HEADER: scroll state + mobile nav
     ============================================================ */
  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.innerHTML = open
      ? '<svg class="icon" aria-hidden="true"><use href="#icon-close"></use></svg>'
      : '<svg class="icon" aria-hidden="true"><use href="#icon-menu"></use></svg>';
  });
  mainNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.innerHTML = '<svg class="icon" aria-hidden="true"><use href="#icon-menu"></use></svg>';
  }));

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ============================================================
     COUNTERS
     ============================================================ */
  function animateCount(el) {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimal || '0', 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      el.textContent = decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString('en-IN');
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = decimals ? target.toFixed(decimals) : Math.round(target).toLocaleString('en-IN');
    }
    requestAnimationFrame(tick);
  }
  const counters = document.querySelectorAll('[data-count]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduceMotion) {
    const cIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { animateCount(entry.target); cIo.unobserve(entry.target); }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => cIo.observe(el));
  } else {
    counters.forEach(el => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimal || '0', 10);
      el.textContent = decimals ? target.toFixed(decimals) : Math.round(target).toLocaleString('en-IN');
    });
  }

  /* ============================================================
     LINEUP: render + filter
     ============================================================ */
  const modelGrid = document.getElementById('modelGrid');

  function modelCardHtml(m) {
    return `
    <article class="model-card" data-category="${m.category}">
      <div class="model-card-media">
        <span class="model-card-badge">${CATEGORY_LABEL[m.category]}</span>
        <img class="model-card-photo" src="${m.img}" alt="Mahindra ${m.name}" loading="lazy" width="602" height="339">
      </div>
      <h3 class="model-card-name">${m.name}</h3>
      <p class="model-card-tagline">${m.tagline}</p>
      <div class="model-card-specs">
        <div class="model-spec">
          <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-gauge"></use></svg>
          <span><span class="model-spec-label">Power</span><span class="model-spec-value">${m.power}</span></span>
        </div>
        <div class="model-spec">
          <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-drivetrain"></use></svg>
          <span><span class="model-spec-label">Drivetrain</span><span class="model-spec-value">${m.drivetrain}</span></span>
        </div>
        <div class="model-spec">
          <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-seat"></use></svg>
          <span><span class="model-spec-label">Seating</span><span class="model-spec-value">${m.seating} Seater</span></span>
        </div>
        <div class="model-spec">
          <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-transmission"></use></svg>
          <span><span class="model-spec-label">Transmission</span><span class="model-spec-value">${m.transmission}</span></span>
        </div>
      </div>
      <div class="model-card-footer">
        <div>
          <span class="model-price-label">Ex-showroom, onwards*</span>
          <p class="model-price">₹${m.priceMin.toFixed(2)} Lakh</p>
        </div>
        <a href="#test-drive" class="model-card-cta">Book Test Drive <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-arrow-right"></use></svg></a>
      </div>
    </article>`;
  }

  function renderModels(filter) {
    const list = filter === 'all' ? MODELS : MODELS.filter(m => m.category === filter);
    modelGrid.innerHTML = list.map(modelCardHtml).join('');
  }
  renderModels('all');

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => { b.classList.remove('is-active'); b.setAttribute('aria-selected', 'false'); });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      renderModels(btn.dataset.filter);
    });
  });

  /* ============================================================
     COMPARE
     ============================================================ */
  const compareSelects = [document.getElementById('compareA'), document.getElementById('compareB'), document.getElementById('compareC')];
  const compareTable = document.getElementById('compareTable');

  compareSelects.forEach((sel, i) => {
    sel.innerHTML = '<option value="">— Select a model —</option>' + MODELS.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
    sel.value = MODELS[i] ? MODELS[i].id : '';
    sel.addEventListener('change', renderCompare);
  });

  const COMPARE_ROWS = [
    { key: 'tagline', label: 'Tagline' },
    { key: 'priceRange', label: 'Ex-Showroom Price*' },
    { key: 'engine', label: 'Engine' },
    { key: 'power', label: 'Max Power' },
    { key: 'torque', label: 'Max Torque' },
    { key: 'seating', label: 'Seating' },
    { key: 'drivetrain', label: 'Drivetrain' },
    { key: 'transmission', label: 'Transmission' }
  ];

  function renderCompare() {
    const chosen = compareSelects.map(s => MODELS.find(m => m.id === s.value)).filter(Boolean);
    if (!chosen.length) {
      compareTable.innerHTML = '<tr><td style="padding:24px;color:var(--text-on-light-muted)">Select at least one model above to compare.</td></tr>';
      return;
    }
    const head = `<thead><tr><th>Spec</th>${chosen.map(m => `<th>${m.name}</th>`).join('')}</tr></thead>`;
    const body = COMPARE_ROWS.map(row => {
      const cells = chosen.map(m => {
        const val = row.key === 'priceRange' ? `₹${m.priceMin.toFixed(2)} – ${m.priceMax.toFixed(2)} Lakh` : m[row.key];
        return `<td>${val}</td>`;
      }).join('');
      return `<tr><th scope="row">${row.label}</th>${cells}</tr>`;
    }).join('');
    compareTable.innerHTML = head + `<tbody>${body}</tbody>`;
  }
  renderCompare();

  /* ============================================================
     SALES CHART (bar)
     ============================================================ */
  const SALES_DATA = [
    { label: 'Jan', value: 47800 },
    { label: 'Feb', value: 49600 },
    { label: 'Mar', value: 60272 },
    { label: 'Apr', value: 56331 },
    { label: 'May', value: 58021 },
    { label: 'Jun', value: 60393 }
  ];
  const salesChart = document.getElementById('salesChart');
  const maxVal = Math.max(...SALES_DATA.map(d => d.value));
  salesChart.innerHTML = SALES_DATA.map(d => `
    <div class="bar-col">
      <span class="bar-val">${(d.value / 1000).toFixed(1)}k</span>
      <div class="bar" data-height="${(d.value / maxVal) * 100}"></div>
      <span class="bar-label">${d.label}</span>
    </div>`).join('');

  function growBars() {
    salesChart.querySelectorAll('.bar').forEach(bar => {
      bar.style.height = bar.dataset.height + '%';
    });
  }
  if ('IntersectionObserver' in window) {
    const chartIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { growBars(); chartIo.disconnect(); } });
    }, { threshold: 0.4 });
    chartIo.observe(salesChart);
  } else { growBars(); }

  /* ============================================================
     EMI CALCULATOR
     ============================================================ */
  const emiModel = document.getElementById('emiModel');
  const emiPrice = document.getElementById('emiPrice');
  const emiDown = document.getElementById('emiDown');
  const emiTenure = document.getElementById('emiTenure');
  const emiRate = document.getElementById('emiRate');
  const emiDownVal = document.getElementById('emiDownVal');
  const emiTenureVal = document.getElementById('emiTenureVal');
  const emiRateVal = document.getElementById('emiRateVal');
  const emiOutput = document.getElementById('emiOutput');
  const emiLoanAmt = document.getElementById('emiLoanAmt');
  const emiDownAmt = document.getElementById('emiDownAmt');
  const emiInterestAmt = document.getElementById('emiInterestAmt');

  emiModel.innerHTML = MODELS.map(m => `<option value="${m.id}">${m.name}</option>`).join('');

  function inr(n) {
    return '₹' + Math.round(n).toLocaleString('en-IN');
  }

  function setPriceFromModel() {
    const m = MODELS.find(x => x.id === emiModel.value);
    emiPrice.value = m ? m.onRoadEst : 0;
    computeEmi();
  }

  function computeEmi() {
    const price = parseFloat(emiPrice.value) || 0;
    const downPct = parseFloat(emiDown.value);
    const years = parseFloat(emiTenure.value);
    const rate = parseFloat(emiRate.value);

    emiDownVal.textContent = downPct + '%';
    emiTenureVal.textContent = years + (years === 1 ? ' yr' : ' yrs');
    emiRateVal.textContent = rate.toFixed(1) + '%';

    const downAmt = price * (downPct / 100);
    const loan = Math.max(price - downAmt, 0);
    const monthlyRate = rate / 12 / 100;
    const n = years * 12;
    let emi = 0;
    if (loan > 0 && monthlyRate > 0) {
      emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    } else if (loan > 0) {
      emi = loan / n;
    }
    const totalPayment = emi * n;
    const totalInterest = Math.max(totalPayment - loan, 0);

    emiOutput.textContent = Math.round(emi).toLocaleString('en-IN');
    emiLoanAmt.textContent = inr(loan);
    emiDownAmt.textContent = inr(downAmt);
    emiInterestAmt.textContent = inr(totalInterest);
  }

  emiModel.addEventListener('change', setPriceFromModel);
  [emiPrice, emiDown, emiTenure, emiRate].forEach(el => el.addEventListener('input', computeEmi));
  setPriceFromModel();

  /* ============================================================
     REVIEWS RAIL
     ============================================================ */
  const reviewRail = document.getElementById('reviewRail');
  function initials(name) {
    return name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  }
  reviewRail.innerHTML = REVIEWS.map(r => `
    <article class="review-card">
      <svg class="review-quote-icon" aria-hidden="true"><use href="#icon-quote"></use></svg>
      <div class="review-stars" aria-label="${r.rating} out of 5 stars">
        ${Array.from({ length: 5 }).map((_, i) => `<svg class="icon icon-sm" aria-hidden="true" style="opacity:${i < r.rating ? 1 : .25}"><use href="#icon-star"></use></svg>`).join('')}
      </div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-person">
        <span class="review-avatar" aria-hidden="true">${initials(r.name)}</span>
        <span>
          <span class="review-name">${r.name}</span><br>
          <span class="review-meta">${r.meta}</span>
        </span>
      </div>
    </article>`).join('');

  document.getElementById('reviewPrev').addEventListener('click', () => {
    reviewRail.scrollBy({ left: -360, behavior: 'smooth' });
  });
  document.getElementById('reviewNext').addEventListener('click', () => {
    reviewRail.scrollBy({ left: 360, behavior: 'smooth' });
  });

  /* ============================================================
     DEALER LOCATOR
     ============================================================ */
  const dealerCity = document.getElementById('dealerCity');
  const dealerList = document.getElementById('dealerList');
  const cities = Object.keys(DEALERS);
  dealerCity.innerHTML = cities.map(c => `<option value="${c}">${c}</option>`).join('');

  function renderDealers(city) {
    const list = DEALERS[city] || [];
    dealerList.innerHTML = list.map(d => `
      <div class="dealer-card">
        <div>
          <p class="dealer-name">${d.name}</p>
          <p class="dealer-addr">${d.addr}</p>
          <a class="dealer-phone" href="tel:${d.phone.replace(/[^0-9]/g, '')}">
            <svg class="icon icon-sm" aria-hidden="true"><use href="#icon-phone"></use></svg> ${d.phone}
          </a>
        </div>
        <span class="dealer-badge">Authorized Dealer</span>
      </div>`).join('');
  }
  dealerCity.addEventListener('change', () => renderDealers(dealerCity.value));
  renderDealers(cities[0]);

  /* ============================================================
     TEST DRIVE FORM
     ============================================================ */
  const tdForm = document.getElementById('tdForm');
  const tdModel = document.getElementById('tdModel');
  const tdCity = document.getElementById('tdCity');
  tdModel.innerHTML = MODELS.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
  tdCity.innerHTML = '<option value="">— Select your city —</option>' + cities.map(c => `<option value="${c}">${c}</option>`).join('');

  function showError(fieldId, msg) {
    const errEl = document.getElementById('err-' + fieldId);
    const input = document.getElementById(fieldId);
    errEl.textContent = msg;
    input.closest('.field').classList.toggle('has-error', !!msg);
  }

  tdForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('tdName').value.trim();
    if (!name) { showError('tdName', 'Please enter your name.'); valid = false; } else showError('tdName', '');

    const phone = document.getElementById('tdPhone').value.trim();
    if (!/^[0-9]{10}$/.test(phone)) { showError('tdPhone', 'Enter a valid 10-digit mobile number.'); valid = false; } else showError('tdPhone', '');

    const email = document.getElementById('tdEmail').value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('tdEmail', 'Enter a valid email address.'); valid = false; } else showError('tdEmail', '');

    const city = tdCity.value;
    if (!city) { showError('tdCity', 'Please select your city.'); valid = false; } else showError('tdCity', '');

    const successEl = document.getElementById('tdSuccess');
    if (!valid) {
      successEl.hidden = true;
      const firstError = tdForm.querySelector('.has-error input, .has-error select');
      if (firstError) firstError.focus();
      return;
    }

    successEl.hidden = false;
    tdForm.reset();
  });

  /* ============================================================
     Smooth-scroll offset for fixed header on anchor nav
     ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 84;
      window.scrollTo({ top: y, behavior: reduceMotion ? 'auto' : 'smooth' });
    });
  });

})();
