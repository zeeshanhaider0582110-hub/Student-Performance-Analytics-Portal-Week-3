'use strict';

const sidebar  = document.getElementById('sidebar');
const overlay  = document.getElementById('sidebarOverlay');
const hamburger= document.getElementById('hamburger');

hamburger?.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
});
overlay?.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
});

function showToast(msg, type = 'info') {
  const icons = { success: '✓', error: '✕', info: 'i' };
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<strong>${icons[type]}</strong> ${msg}`;
  document.getElementById('toast-wrap').appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

document.getElementById('notifBtn')?.addEventListener('click', () => {
  showToast('3 notifications: 2 assignments due, 1 grade posted.', 'info');
});