// ═══════════════ SCREEN TEMPLATES ═══════════════

const walletScreen = `
<div class="fade-in">

  <!-- Balance card -->
  <div class="glass-card balance-card">
    <div class="bal-amount">$1,452.80</div>
    <div class="bal-streaming">+ $0.16 streaming now</div>
    <div class="bal-sub">streaming in real time</div>
  </div>

  <!-- Chart card -->
  <div class="glass-card" style="padding:0;">
    <div class="chart-tabs-row">
      <button class="ctab active" onclick="switchTab(this, 'today')">Today</button>
      <button class="ctab" onclick="switchTab(this, 'week')">This Week</button>
    </div>
    <div class="chart-wrap">
      <svg class="chart-svg" id="main-chart" viewBox="0 0 362 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#22c55e" stop-opacity="0.2"/>
            <stop offset="100%" stop-color="#22c55e" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <line x1="0" y1="100" x2="362" y2="100" stroke="#e5e7eb" stroke-dasharray="4 4"/>
        <line x1="0" y1="70"  x2="362" y2="70"  stroke="#e5e7eb" stroke-dasharray="4 4"/>
        <line x1="0" y1="40"  x2="362" y2="40"  stroke="#e5e7eb" stroke-dasharray="4 4"/>
        <path id="chart-fill-path" d="M0,108 Q50,105 100,100 Q160,92 210,78 Q255,62 300,42 Q330,28 355,14 L362,12 L362,120 L0,120 Z" fill="url(#chartFill)"/>
        <path id="chart-line-path" d="M0,108 Q50,105 100,100 Q160,92 210,78 Q255,62 300,42 Q330,28 355,14 L362,12" stroke="#22c55e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <circle id="chart-dot" cx="355" cy="14" r="4" fill="#22c55e"/>
        <circle id="chart-dot-outer" cx="355" cy="14" r="8" fill="rgba(34,197,94,.18)"/>
        <text x="158" y="54" fill="#9ca3af" font-size="10" font-family="Inter" class="chart-label">+$0.16</text>
        <text x="220" y="40" fill="#9ca3af" font-size="10" font-family="Inter" class="chart-label">+$0.12</text>
        <text x="50"  y="80" fill="#9ca3af" font-size="10" font-family="Inter" class="chart-label">+$0.04</text>
      </svg>
      <div class="chart-axis" id="chart-axis"><span>9AM</span><span>12PM</span><span>3PM</span></div>
    </div>
  </div>

  <!-- Cash Out button: use the dedicated green Cashout Icon -->
  <div class="btn-cashout-wrap">
    <button class="btn-cashout">
      <img src="Cashout Icon.png" alt="Cash Out" class="cashout-icon">
      Cash Out Instantly
    </button>
  </div>

  <!-- Spend / Send -->
  <div class="action-row">
    <button class="btn-action">
      Spend <span class="caret"><i class="fa-solid fa-chevron-down"></i></span>
    </button>
    <button class="btn-action">
      Send
    </button>
  </div>

  <!-- Recent Activity -->
  <div class="recent-wrap">
    <p class="section-head">Recent Activity</p>
    <div class="glass-card act-card">
      <div class="act-item">
        <div class="act-icon ai-green"><i class="fa-solid fa-check"></i></div>
        <div class="act-info">
          <div class="act-title">Earned &middot; DoorDash</div>
          <div class="act-sub">Streamed 2 minutes ago</div>
        </div>
        <div class="act-amount">$45.58</div>
      </div>
      <div class="act-item">
        <div class="act-icon ai-blue"><i class="fa-solid fa-cart-shopping"></i></div>
        <div class="act-info">
          <div class="act-title">Spent &middot; Groceries</div>
          <div class="act-sub">Spent 12 minutes ago</div>
        </div>
        <div class="act-amount">$32.10</div>
      </div>
      <div class="act-item">
        <div class="act-icon ai-teal"><i class="fa-solid fa-bolt"></i></div>
        <div class="act-info">
          <div class="act-title">Instant Cash Out</div>
          <div class="act-sub">$1,452 available instantly</div>
        </div>
        <div class="visa-chip">
          <span class="visa-text">VISA</span>
          <i class="fa-solid fa-credit-card" style="color:rgba(255,255,255,.7);font-size:11px;"></i>
        </div>
      </div>
    </div>
    <div class="tagline">No fees, no delays. Your money is yours instantly.</div>
  </div>

</div>`;

// ─── Stream Feed ───────────────────────────────────────────────────────────────
const streamScreen = `
<div class="fade-in screen-top">
  <p class="s-title">Stream Feed</p>
  <div class="glass-card tx-list">
    <div class="tx-item">
      <div class="tx-icon ti-green"><i class="fa-solid fa-briefcase"></i></div>
      <div class="tx-info">
        <div class="tx-title">DoorDash Payout</div>
        <div class="tx-sub">Incoming Stream &bull; 2 mins ago</div>
      </div>
      <div class="tx-amt tx-pos">+$45.58</div>
    </div>
    <div class="tx-item">
      <div class="tx-icon ti-blue"><i class="fa-solid fa-cart-shopping"></i></div>
      <div class="tx-info">
        <div class="tx-title">Walmart</div>
        <div class="tx-sub">Direct Spend &bull; 12 mins ago</div>
      </div>
      <div class="tx-amt tx-neg">-$32.10</div>
    </div>
    <div class="tx-item">
      <div class="tx-icon ti-teal"><i class="fa-solid fa-earth-americas"></i></div>
      <div class="tx-info">
        <div class="tx-title">Mom (Mexico City)</div>
        <div class="tx-sub">Sent Home &bull; 1 hr ago</div>
      </div>
      <div class="tx-amt tx-neg">-$100.00</div>
    </div>
    <div class="tx-item">
      <div class="tx-icon ti-green"><i class="fa-solid fa-briefcase"></i></div>
      <div class="tx-info">
        <div class="tx-title">DoorDash Payout</div>
        <div class="tx-sub">Incoming Stream &bull; 3 hrs ago</div>
      </div>
      <div class="tx-amt tx-pos">+$67.20</div>
    </div>
    <div class="tx-item">
      <div class="tx-icon ti-blue"><i class="fa-solid fa-store"></i></div>
      <div class="tx-info">
        <div class="tx-title">7-Eleven</div>
        <div class="tx-sub">Direct Spend &bull; 5 hrs ago</div>
      </div>
      <div class="tx-amt tx-neg">-$8.40</div>
    </div>
  </div>
</div>`;

// ─── Send Home ─────────────────────────────────────────────────────────────────
const sendScreen = `
<div class="fade-in screen-top">
  <div class="glass-card" style="padding:0;">
    <div class="form-pad">
      <div class="zero-badge">⚡ Zero-Fee Transfer</div>
      <p class="s-title" style="margin-bottom:18px;">Send Home</p>
      <div class="inp-group">
        <label>You Send (USDC)</label>
        <input type="number" id="send-amount" value="100" min="1" oninput="calcRate()">
      </div>
      <div class="rate-row">
        <i class="fa-solid fa-arrow-right-arrow-left"></i>
        <span>1 USDC = 17.10 MXN &bull; Live rate</span>
      </div>
      <div class="inp-group">
        <label>They Receive (MXN)</label>
        <input type="number" id="recv-amount" value="1710" readonly>
      </div>
      <div class="inp-group">
        <label>Send To</label>
        <div style="background:rgba(255,255,255,.9);border-radius:14px;border:1.5px solid rgba(0,0,0,.08);padding:13px 16px;font-size:15px;font-weight:600;color:var(--text);">
          <i class="fa-solid fa-user" style="color:var(--muted);margin-right:10px;"></i>Mom &bull; ·····4521
        </div>
      </div>
      <button class="btn-primary" style="margin-top:6px;">
        Send $<span id="send-display">100.00</span> USDC Instantly
      </button>
    </div>
  </div>
</div>`;

// ─── Retail Cash-Out ───────────────────────────────────────────────────────────
const cashScreen = `
<div class="fade-in screen-top">
  <p class="s-title">Retail Cash-Out</p>
  <div class="glass-card" style="padding:20px;text-align:center;">
    <p style="font-size:13px;color:var(--muted);margin-bottom:2px;">Show this code at the register</p>
    <div class="qr-box"><i class="fa-solid fa-qrcode"></i></div>
    <div class="barcode-label">9483 1204 5591</div>
    <p style="font-size:12px;color:var(--muted);">Valid for 15 minutes</p>
  </div>
  <div class="glass-card" style="padding:18px;">
    <p class="s-title" style="font-size:15px;margin-bottom:10px;">📍 Nearest Fee-Free Locations</p>
    <div class="loc-item">
      <div><div class="loc-name">🛒 Walmart Supercenter</div><div class="loc-dist">0.8 mi &bull; Open now</div></div>
      <button class="btn-dir">Directions</button>
    </div>
    <div class="loc-item">
      <div><div class="loc-name">🏪 7-Eleven</div><div class="loc-dist">1.2 mi &bull; Open 24hrs</div></div>
      <button class="btn-dir">Directions</button>
    </div>
    <div class="loc-item">
      <div><div class="loc-name">🛍 Dollar General</div><div class="loc-dist">1.7 mi &bull; Open now</div></div>
      <button class="btn-dir">Directions</button>
    </div>
  </div>
</div>`;

// ─── Safety & Education Hub ────────────────────────────────────────────────────
const learnScreen = `
<div class="fade-in screen-top">
  <p class="s-title">Safety &amp; Education</p>

  <div class="glass-card learn-hero card-pad">
    <div class="learn-hero-icon">🛡️</div>
    <h3>Your GENIUS Act Protections</h3>
    <p>Under the GENIUS Act, your USDC is always backed 1:1 by U.S. Treasury bills and cash. Your funds are fully protected and redeemable at any time — not an investment.</p>
  </div>

  <div class="glass-card learn-card card-pad">
    <h3>💡 How Stablecoins Work</h3>
    <p>A stablecoin is a digital dollar worth exactly $1.00, always. No volatility — it moves instantly, like a text message, anywhere in the world for nearly zero cost.</p>
    <button class="read-more">Learn more <i class="fa-solid fa-arrow-right fa-xs"></i></button>
  </div>

  <div class="glass-card learn-card card-pad">
    <h3>🌎 Why Send with StreamPay?</h3>
    <p>Traditional remittances take 3–5 days and charge 5–8% in fees. With StreamPay, your family receives full value in seconds — zero fees, every time.</p>
    <button class="read-more">See comparison <i class="fa-solid fa-arrow-right fa-xs"></i></button>
  </div>

  <div class="glass-card learn-card card-pad">
    <h3>🔒 Is my money insured?</h3>
    <p>StreamPay holds your USDC in regulated, FDIC-eligible custodians. Your principal is never at risk — it's not invested in volatile assets.</p>
    <button class="read-more">View protections <i class="fa-solid fa-arrow-right fa-xs"></i></button>
  </div>
</div>`;

// ═══════════════ ROUTING ═══════════════

const screenMap = {
  wallet: walletScreen,
  stream: streamScreen,
  send:   sendScreen,
  cash:   cashScreen,
  learn:  learnScreen,
};

const appContent = document.getElementById('app-content');
const navItems   = document.querySelectorAll('.nav-item');

function switchScreen(id) {
  appContent.innerHTML = screenMap[id] || walletScreen;
  navItems.forEach(item => {
    const isActive = item.dataset.target === id;
    item.classList.toggle('active', isActive);
    const sWrap = item.querySelector('.nav-s-wrap');
    if (sWrap) sWrap.classList.toggle('active-s', isActive);
  });
  closeProfile();
}

navItems.forEach(item => {
  item.addEventListener('click', () => switchScreen(item.dataset.target));
});

// ─── Chart tab data ──────────────────────────────────────────────────────────
const chartData = {
  today: {
    fillPath: 'M0,108 Q50,105 100,100 Q160,92 210,78 Q255,62 300,42 Q330,28 355,14 L362,12 L362,120 L0,120 Z',
    linePath: 'M0,108 Q50,105 100,100 Q160,92 210,78 Q255,62 300,42 Q330,28 355,14 L362,12',
    dotCx: '355', dotCy: '14',
    axis: ['9AM', '12PM', '3PM'],
    labels: [{x:50,y:80,t:'+$7.50'},{x:158,y:54,t:'+$12.16'},{x:220,y:40,t:'+$18.12'}]
  },
  week: {
    fillPath: 'M0,105 L55,88 L95,95 L140,75 L185,82 L235,58 L275,65 L320,38 L362,20 L362,120 L0,120 Z',
    linePath: 'M0,105 L55,88 L95,95 L140,75 L185,82 L235,58 L275,65 L320,38 L362,20',
    dotCx: '362', dotCy: '20',
    axis: ['Mon', 'Wed', 'Fri'],
    labels: [{x:30,y:82,t:'$1,390'},{x:145,y:54,t:'$1,420'},{x:240,y:40,t:'$1,445'}]
  }
};

function switchTab(el, tab) {
  document.querySelectorAll('.ctab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');

  const d = chartData[tab];
  if (!d) return;

  const fillPath = document.getElementById('chart-fill-path');
  const linePath = document.getElementById('chart-line-path');
  const dot      = document.getElementById('chart-dot');
  const dotOuter = document.getElementById('chart-dot-outer');
  const axis     = document.getElementById('chart-axis');

  if (fillPath) fillPath.setAttribute('d', d.fillPath);
  if (linePath) linePath.setAttribute('d', d.linePath);
  if (dot)      { dot.setAttribute('cx', d.dotCx); dot.setAttribute('cy', d.dotCy); }
  if (dotOuter) { dotOuter.setAttribute('cx', d.dotCx); dotOuter.setAttribute('cy', d.dotCy); }
  if (axis)     axis.innerHTML = d.axis.map(a => `<span>${a}</span>`).join('');

  // Swap data labels (remove old, add new)
  const chart = document.getElementById('main-chart');
  if (chart) {
    chart.querySelectorAll('.chart-label').forEach(l => l.remove());
    d.labels.forEach(l => {
      const t = document.createElementNS('http://www.w3.org/2000/svg','text');
      t.setAttribute('x', l.x); t.setAttribute('y', l.y);
      t.setAttribute('fill','#9ca3af'); t.setAttribute('font-size','10');
      t.setAttribute('font-family','Inter'); t.classList.add('chart-label');
      t.textContent = l.t;
      chart.appendChild(t);
    });
  }
}

// ─── Exchange rate calc ────────────────────────────────────────────────────────
function calcRate() {
  const amt  = parseFloat(document.getElementById('send-amount')?.value) || 0;
  const rate = 17.10;
  if (document.getElementById('recv-amount'))
    document.getElementById('recv-amount').value = (amt * rate).toFixed(2);
  if (document.getElementById('send-display'))
    document.getElementById('send-display').textContent = amt.toFixed(2);
}

// ─── Profile dropdown ──────────────────────────────────────────────────────────
function toggleProfile() {
  const dd  = document.getElementById('profile-dropdown');
  const ov  = document.getElementById('profile-overlay');
  const open = dd.classList.contains('hidden');
  dd.classList.toggle('hidden', !open);
  ov.classList.toggle('hidden', !open);
}
function closeProfile() {
  document.getElementById('profile-dropdown')?.classList.add('hidden');
  document.getElementById('profile-overlay')?.classList.add('hidden');
}
function goToLearn() {
  switchScreen('learn');
  closeProfile();
}

// ─── Init ──────────────────────────────────────────────────────────────────────
switchScreen('wallet');
