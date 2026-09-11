import './style.css';

const icons = {
  suitcase: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M10.2 9.8V7.2c0-1.1.9-2 2-2h7.6c1.1 0 2 .9 2 2v2.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><rect x="5.1" y="9.2" width="21.8" height="17.1" rx="3" fill="#7fc789" stroke="currentColor" stroke-width="2.2"/><path d="M11 9.2v17.1M21 9.2v17.1M5.6 14.4h20.8" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,
  clock: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11.2" fill="#93caf0" stroke="currentColor" stroke-width="2.2"/><path d="M16 9.1v7.4l5.2 3" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  map: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5.2 7.8 12 5l8 3.1L26.8 5v19.2L20 27l-8-3.1-6.8 3.1Z" fill="#7bc681" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 5v18.9M20 8.1V27" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  smile: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11" fill="#fff" stroke="currentColor" stroke-width="2.2"/><circle cx="12.1" cy="13.7" r="1.35" fill="currentColor"/><circle cx="19.9" cy="13.7" r="1.35" fill="currentColor"/><path d="M11.5 18.3c1.2 2.2 3 3.3 4.5 3.3s3.3-1.1 4.5-3.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

const barcode = `<svg viewBox="0 0 24 67" role="img" aria-label="条形码"><g fill="#25313d"><rect y="0" width="21" height="2" rx=".5"/><rect y="4" width="21" height="2" rx=".5"/><rect y="8" width="21" height="3" rx=".5"/><rect y="13" width="21" height="2" rx=".5"/><rect y="17" width="21" height="2" rx=".5"/><rect y="21" width="21" height="3" rx=".5"/><rect y="26" width="21" height="2" rx=".5"/><rect y="30" width="21" height="2" rx=".5"/><rect y="34" width="21" height="3" rx=".5"/><rect y="39" width="21" height="2" rx=".5"/><rect y="43" width="21" height="2" rx=".5"/><rect y="47" width="21" height="3" rx=".5"/><rect y="52" width="21" height="2" rx=".5"/><rect y="56" width="21" height="2" rx=".5"/><rect y="60" width="21" height="3" rx=".5"/><rect y="65" width="21" height="2" rx=".5"/></g></svg>`;

const trips = [
  { image: '/assets/switzerland.jpg', place: '瑞士 · 因特拉肯', date: '2023.10.01  —  10.08', nights: '8天7晚', note: 'Nice\nTrip!' },
  { image: '/assets/thailand.jpg', place: '泰国 · 普吉岛', date: '2023.05.20  —  05.26', nights: '7天6晚', note: '☼' },
  { image: '/assets/dali.jpg', place: '中国 · 大理', date: '2023.03.10  —  03.15', nights: '6天5晚', note: '山海\n都很值得♡' },
];

const chevron = () => '<span class="chevron" aria-hidden="true">›</span>';
const historyCard = (trip) => `<article class="history-card" tabindex="0" data-place="${trip.place}"><div class="history-photo" style="background-image:url('${trip.image}')"></div><div class="history-info"><h3>${trip.place}</h3><p class="trip-date">${trip.date}</p><span class="nights">${trip.nights}</span></div><div class="history-note"><span>${trip.note.replace('\n', '<br>')}</span></div></article>`;

document.querySelector('#app').innerHTML = `
  <div class="page">
    <main class="phone" aria-label="旅行行程首页">
      <div class="scroll-area">
        <header class="status-bar"><span class="time">9:41</span><div class="status-icons" aria-hidden="true"><span class="signal"><i></i><i></i><i></i><i></i></span><span class="wifi"></span><span class="battery"><b></b></span></div></header>
        <section class="banner" aria-label="出发吧，去看更大的世界"><img src="/assets/banner.png" alt="出发吧，去看更大的世界" /></section>
        <section class="trip-section upcoming-section"><div class="section-heading"><div class="heading-title"><span class="section-icon suitcase-icon">${icons.suitcase}</span><h2>待出行</h2></div><button class="section-count" type="button" data-action="upcoming">1个行程 ${chevron()}</button></div><article class="upcoming-card" tabindex="0" aria-label="日本东京，2024年4月12日至18日"><div class="upcoming-photo" style="background-image:url('/assets/santorini.jpg')"><span class="photo-copy">See<br>Good<br>World&nbsp;⌣</span></div><div class="ticket-body"><h3>日本 · 东京</h3><p class="ticket-subtitle">在樱花下，遇见更好的自己</p><div class="dashed-rule"></div><p class="ticket-date">2024.04.12&nbsp;&nbsp;—&nbsp;&nbsp;04.18 <span class="plane">✈</span></p><span class="nights ticket-nights">7天6晚</span></div><div class="ticket-barcode">${barcode}</div></article></section>
        <section class="trip-section history-section"><div class="section-heading"><div class="heading-title"><span class="section-icon clock-icon">${icons.clock}</span><h2>历史行程</h2></div><button class="section-count" type="button" data-action="history">3个行程 ${chevron()}</button></div><div class="history-list">${trips.map(historyCard).join('')}</div><button class="more-history" type="button" data-action="more">查看更多历史行程 ${chevron()}</button></section>
        <div class="scroll-spacer" aria-hidden="true"></div>
      </div>
      <nav class="bottom-nav" aria-label="主导航"><button class="nav-item is-active" type="button" data-tab="trips"><span class="nav-icon">${icons.map}</span><span>行程</span></button><button class="add-button" type="button" aria-label="新建行程" data-action="add"><span>＋</span></button><button class="nav-item" type="button" data-tab="profile"><span class="nav-icon">${icons.smile}</span><span>我的</span></button></nav>
    </main><div class="toast" role="status" aria-live="polite"></div>
  </div>`;

const toast = document.querySelector('.toast');
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('is-visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 1800); }
document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => { const action = button.dataset.action; if (action === 'add') showToast('新建行程功能已打开'); if (action === 'more') showToast('已展示全部历史行程'); if (action === 'upcoming') showToast('当前有 1 个待出行程'); if (action === 'history') showToast('当前有 3 个历史行程'); }));
document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => { document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('is-active')); item.classList.add('is-active'); showToast(item.dataset.tab === 'profile' ? '我的' : '行程'); }));
document.querySelectorAll('.history-card, .upcoming-card').forEach((card) => card.addEventListener('click', () => showToast(card.dataset.place ? `已选择 ${card.dataset.place}` : '已选择日本 · 东京行程')));
