import './style.css';

const icons = {
  suitcase: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M10.2 9.8V7.2c0-1.1.9-2 2-2h7.6c1.1 0 2 .9 2 2v2.6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><rect x="5.1" y="9.2" width="21.8" height="17.1" rx="3" fill="#7fc789" stroke="currentColor" stroke-width="2.2"/><path d="M11 9.2v17.1M21 9.2v17.1M5.6 14.4h20.8" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>`,
  clock: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11.2" fill="#93caf0" stroke="currentColor" stroke-width="2.2"/><path d="M16 9.1v7.4l5.2 3" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  map: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5.2 7.8 12 5l8 3.1L26.8 5v19.2L20 27l-8-3.1-6.8 3.1Z" fill="#7bc681" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 5v18.9M20 8.1V27" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  smile: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11" fill="#fff" stroke="currentColor" stroke-width="2.2"/><circle cx="12.1" cy="13.7" r="1.35" fill="currentColor"/><circle cx="19.9" cy="13.7" r="1.35" fill="currentColor"/><path d="M11.5 18.3c1.2 2.2 3 3.3 4.5 3.3s3.3-1.1 4.5-3.3" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
};

const profileIcons = {
  settings: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m13.6 4.8.7-1.8h3.4l.7 1.8 2.1.9 1.7-.8 2.4 2.4-.8 1.7.9 2.1 1.8.7v3.4l-1.8.7-.9 2.1.8 1.7-2.4 2.4-1.7-.8-2.1.9-.7 1.8h-3.4l-.7-1.8-2.1-.9-1.7.8-2.4-2.4.8-1.7-.9-2.1-1.8-.7v-3.4l1.8-.7.9-2.1-.8-1.7 2.4-2.4 1.7.8 2.1-.9Z" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="16" cy="13.5" r="4" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  bell: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7.4 22.1h17.2c-1.7-1.7-2.3-3.7-2.3-7.2 0-4-2.4-6.5-6.3-6.5s-6.3 2.5-6.3 6.5c0 3.5-.6 5.5-2.3 7.2Z" fill="#fff" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M13.7 25.2c.6.9 1.3 1.3 2.3 1.3s1.7-.4 2.3-1.3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="25.3" cy="7" r="3.2" fill="#f56350" stroke="#fff" stroke-width="1.4"/></svg>`,
  pin: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 28s8.1-8.2 8.1-14.1A8.1 8.1 0 1 0 7.9 14C7.9 19.8 16 28 16 28Z" fill="#66be76" stroke="#142f4a" stroke-width="2"/><circle cx="16" cy="13.8" r="3" fill="#fff" stroke="#142f4a" stroke-width="1.5"/></svg>`,
  compass: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="10" fill="#d8f2f8" stroke="#15334b" stroke-width="2"/><path d="m20.3 11.7-2.8 5.8-5.8 2.8 2.8-5.8Z" fill="#3ca5ce" stroke="#15334b" stroke-width="1.3" stroke-linejoin="round"/><circle cx="16" cy="16" r="1.3" fill="#15334b"/></svg>`,
  footprints: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11.3 7.1c2.1.2 3.5 2.4 3.1 4.9s-2 4.1-4 3.9-3.3-2.4-2.9-4.8 1.7-4.2 3.8-4Z" fill="#5fc382" stroke="#15334b" stroke-width="1.8"/><path d="M21.8 16.1c2.1.2 3.5 2.4 3.1 4.9s-2 4.1-4 3.9-3.3-2.4-2.9-4.8 1.7-4.2 3.8-4Z" fill="#5fc382" stroke="#15334b" stroke-width="1.8"/><circle cx="10" cy="4.8" r="1.2" fill="#15334b"/><circle cx="13.4" cy="5.3" r="1.1" fill="#15334b"/><circle cx="20.5" cy="13.7" r="1.2" fill="#15334b"/><circle cx="23.8" cy="14.1" r="1.1" fill="#15334b"/></svg>`,
  mountain: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m4.3 25 8.8-15.2L17 17l2.9-4.6L28 25Z" fill="#80cee8" stroke="#173a58" stroke-width="1.8" stroke-linejoin="round"/><path d="m9 25 4.1-7.1 2.7 3.3 2.5-3.8 5.4 7.6" fill="#4da7c8" stroke="#173a58" stroke-width="1.4" stroke-linejoin="round"/><path d="m11.4 12.7 1.7-2.9 2.1 3.3" fill="#fff" stroke="#173a58" stroke-width="1.1"/></svg>`,
  trophy: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M11 7.2h10v6.1c0 3.3-2.1 5.7-5 5.7s-5-2.4-5-5.7Z" fill="#ffd34f" stroke="#173a58" stroke-width="1.8"/><path d="M11 9H7.7v3.1c0 2.8 1.9 4.6 4.5 4.7M21 9h3.3v3.1c0 2.8-1.9 4.6-4.5 4.7" fill="none" stroke="#173a58" stroke-width="1.8"/><path d="M16 19v4.4M11.6 26h8.8M13 23.4h6" fill="none" stroke="#173a58" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  camera: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 10.5h4l1.5-2.4h7l1.5 2.4h4v12H7Z" fill="#82c875" stroke="#173a58" stroke-width="1.8" stroke-linejoin="round"/><circle cx="16" cy="16.5" r="4.3" fill="#fff5b3" stroke="#173a58" stroke-width="1.8"/><circle cx="16" cy="16.5" r="1.5" fill="#69acd0"/></svg>`,
  traveler: `<svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="19.2" cy="6.7" r="3" fill="#ffd36b" stroke="#173a58" stroke-width="1.7"/><path d="M14.3 12.2c2.1-1.4 5.1-.9 6.3 1.3l1.2 2.1-3.1 1.8-1.3-2.1-1.1 6.7 4.9 4.3-2.1 2.2-6.5-5.7c-.9-.8-1.3-2-1.1-3.2l1.1-5.7-2.8 1.8-2.2-2.3 5.7-3.2Z" fill="#62bf78" stroke="#173a58" stroke-width="1.7" stroke-linejoin="round"/><path d="m12.5 21.2-3.4 7M19.2 22.8l5 5.3" fill="none" stroke="#173a58" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  map: `<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m5 8 7-3 8 3 7-3v19l-7 3-8-3-7 3Z" fill="#79c96f" stroke="#173a58" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 5v19M20 8v19" fill="none" stroke="#173a58" stroke-width="1.8"/></svg>`,
};

const barcode = `<svg viewBox="0 0 24 67" role="img" aria-label="条形码"><g fill="#25313d"><rect y="0" width="21" height="2" rx=".5"/><rect y="4" width="21" height="2" rx=".5"/><rect y="8" width="21" height="3" rx=".5"/><rect y="13" width="21" height="2" rx=".5"/><rect y="17" width="21" height="2" rx=".5"/><rect y="21" width="21" height="3" rx=".5"/><rect y="26" width="21" height="2" rx=".5"/><rect y="30" width="21" height="2" rx=".5"/><rect y="34" width="21" height="3" rx=".5"/><rect y="39" width="21" height="2" rx=".5"/><rect y="43" width="21" height="2" rx=".5"/><rect y="47" width="21" height="3" rx=".5"/><rect y="52" width="21" height="2" rx=".5"/><rect y="56" width="21" height="2" rx=".5"/><rect y="60" width="21" height="3" rx=".5"/><rect y="65" width="21" height="2" rx=".5"/></g></svg>`;

const trips = [
  { image: '/assets/switzerland.jpg', place: '瑞士 · 因特拉肯', date: '2023.10.01  —  10.08', nights: '8天7晚', note: 'Nice\nTrip!' },
  { image: '/assets/thailand.jpg', place: '泰国 · 普吉岛', date: '2023.05.20  —  05.26', nights: '7天6晚', note: '☼' },
  { image: '/assets/dali.jpg', place: '中国 · 大理', date: '2023.03.10  —  03.15', nights: '6天5晚', note: '山海\n都很值得♡' },
];

const chevron = () => '<span class="chevron" aria-hidden="true">›</span>';
const historyCard = (trip) => `<article class="history-card" tabindex="0" data-place="${trip.place}"><div class="history-photo" style="background-image:url('${trip.image}')"></div><div class="history-info"><h3>${trip.place}</h3><p class="trip-date">${trip.date}</p><span class="nights">${trip.nights}</span></div><div class="history-note"><span>${trip.note.replace('\n', '<br>')}</span></div></article>`;

const profileAchievements = [
  { icon: profileIcons.mountain, title: '初到远方', detail: '去过5个城市' },
  { icon: profileIcons.camera, title: '摄影爱好者', detail: '打卡20个景点' },
  { icon: profileIcons.compass, title: '千里之行', detail: '累计里程3000km' },
  { icon: profileIcons.traveler, title: '行者无疆', detail: '去过10个城市' },
];
const profileCities = [
  { image: '/assets/santorini.jpg', name: '圣托里尼' },
  { image: '/assets/switzerland.jpg', name: '东京' },
  { image: '/assets/thailand.jpg', name: '威尼斯' },
  { image: '/assets/dali.jpg', name: '杭州' },
];

document.querySelector('#app').innerHTML = `
  <div class="page">
    <main class="phone" aria-label="旅行记录">
      <div class="scroll-area">
        <header class="status-bar"><span class="time">9:41</span><div class="status-icons" aria-hidden="true"><span class="signal"><i></i><i></i><i></i><i></i></span><span class="wifi"></span><span class="battery"><b></b></span></div></header>
        <div class="home-view">
          <section class="banner" aria-label="出发吧，去看更大的世界"><img src="/assets/banner.png" alt="出发吧，去看更大的世界" /></section>
          <section class="trip-section upcoming-section"><div class="section-heading"><div class="heading-title"><span class="section-icon suitcase-icon">${icons.suitcase}</span><h2>待出行</h2></div><button class="section-count" type="button" data-action="upcoming">1个行程 ${chevron()}</button></div><article class="upcoming-card" tabindex="0" aria-label="日本东京，2024年4月12日至18日"><div class="upcoming-photo" style="background-image:url('/assets/santorini.jpg')"><span class="photo-copy">See<br>Good<br>World&nbsp;⌣</span></div><div class="ticket-body"><h3>日本 · 东京</h3><p class="ticket-subtitle">在樱花下，遇见更好的自己</p><div class="dashed-rule"></div><p class="ticket-date">2024.04.12&nbsp;&nbsp;—&nbsp;&nbsp;04.18 <span class="plane">✈</span></p><span class="nights ticket-nights">7天6晚</span></div><div class="ticket-barcode">${barcode}</div></article></section>
          <section class="trip-section history-section"><div class="section-heading"><div class="heading-title"><span class="section-icon clock-icon">${icons.clock}</span><h2>历史行程</h2></div><button class="section-count" type="button" data-action="history">3个行程 ${chevron()}</button></div><div class="history-list">${trips.map(historyCard).join('')}</div><button class="more-history" type="button" data-action="more">查看更多历史行程 ${chevron()}</button></section>
          <div class="scroll-spacer" aria-hidden="true"></div>
        </div>
        <section class="profile-view" aria-label="我的旅行资料" hidden>
          <div class="profile-hero">
            <img src="/assets/profile-banner.png" alt="去更远的地方，遇见更好的自己" />
            <div class="profile-hero-actions"><button type="button" aria-label="设置" data-action="settings">${profileIcons.settings}</button><button type="button" aria-label="通知" data-action="notifications">${profileIcons.bell}</button></div>
          </div>
          <div class="profile-clouds" aria-hidden="true"></div>
          <div class="profile-content">
            <article class="profile-card profile-account-card">
              <div class="profile-main"><div class="profile-avatar" role="img" aria-label="旅行小达人的头像"></div><div class="profile-identity"><h1>旅行小达人</h1><div class="profile-meta"><span>ID: 12345678</span><span class="level-badge">♛ Lv.3</span></div><p>世界那么大，我想去看看 <span aria-hidden="true" class="profile-leaf">❧</span></p></div><button type="button" class="profile-arrow" aria-label="查看个人资料">${chevron()}</button></div>
              <div class="profile-stats"><div><span class="profile-stat-icon">${profileIcons.pin}</span><strong>8</strong><small>去过的城市</small></div><div><span class="profile-stat-icon">${profileIcons.compass}</span><strong>15</strong><small>完成的行程</small></div><div><span class="profile-stat-icon">${profileIcons.footprints}</span><strong>3,628 km</strong><small>累计里程</small></div><div><span class="profile-stat-icon">${profileIcons.mountain}</span><strong>28</strong><small>打卡景点</small></div></div>
            </article>
            <article class="profile-card achievement-card"><div class="profile-card-heading"><div class="profile-heading-icon">${profileIcons.trophy}</div><div><h2>旅行成就</h2><p>每一次出发，都是新的成长</p></div><button type="button" aria-label="查看更多成就">${chevron()}</button></div><div class="achievement-grid">${profileAchievements.map((item) => `<div class="achievement-item"><span class="achievement-icon">${item.icon}</span><strong>${item.title}</strong><small>${item.detail}</small></div>`).join('')}</div></article>
            <article class="profile-card cities-card"><div class="profile-card-heading"><div class="profile-heading-icon">${profileIcons.map}</div><div><h2>去过的城市</h2><p>去过8个城市，解锁了不同的风景</p></div><button type="button" aria-label="查看更多城市">${chevron()}</button></div><div class="city-grid">${profileCities.map((city) => `<div class="city-item"><div class="city-image" style="background-image:url('${city.image}')"></div><strong><span class="city-pin">●</span>${city.name}</strong></div>`).join('')}<button class="city-more" type="button" data-action="more-cities"><span>•••</span><strong>更多</strong></button></div></article>
          </div>
        </section>
      </div>
      <nav class="bottom-nav" aria-label="主导航"><button class="nav-item is-active" type="button" data-tab="trips"><span class="nav-icon">${icons.map}</span><span>行程</span></button><button class="add-button" type="button" aria-label="新建行程" data-action="add"><span>＋</span></button><button class="nav-item" type="button" data-tab="profile"><span class="nav-icon">${icons.smile}</span><span>我的</span></button></nav>
    </main><div class="toast" role="status" aria-live="polite"></div>
  </div>`;

const toast = document.querySelector('.toast');
let toastTimer;
function showToast(message) { toast.textContent = message; toast.classList.add('is-visible'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 1800); }
const homeView = document.querySelector('.home-view');
const profileView = document.querySelector('.profile-view');
document.querySelectorAll('[data-action]').forEach((button) => button.addEventListener('click', () => { const action = button.dataset.action; if (action === 'add') showToast('新建行程功能已打开'); if (action === 'more' || action === 'more-cities') showToast('已展示全部历史行程'); if (action === 'upcoming') showToast('当前有 1 个待出行程'); if (action === 'history') showToast('当前有 3 个历史行程'); if (action === 'settings') showToast('设置'); if (action === 'notifications') showToast('暂无新通知'); }));
document.querySelectorAll('.nav-item').forEach((item) => item.addEventListener('click', () => { document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('is-active')); item.classList.add('is-active'); const isProfile = item.dataset.tab === 'profile'; homeView.hidden = isProfile; profileView.hidden = !isProfile; document.querySelector('.bottom-nav').classList.toggle('profile-active', isProfile); document.querySelector('.scroll-area').scrollTop = 0; showToast(isProfile ? '我的' : '行程'); }));
document.querySelectorAll('.history-card, .upcoming-card').forEach((card) => card.addEventListener('click', () => showToast(card.dataset.place ? `已选择 ${card.dataset.place}` : '已选择日本 · 东京行程')));
