'use strict';

const regForm = document.getElementById('regForm');
if (regForm) {
  regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    ['fName','lName','email','stuId','dept','year'].forEach(id => {
      const el  = document.getElementById(id);
      const err = document.getElementById(id + 'Err');
      if (!el || !err) return;
      if (!el.value.trim()) {
        el.classList.add('error'); err.classList.add('show'); valid = false;
      } else {
        el.classList.remove('error'); err.classList.remove('show');
      }
    });
    const em  = document.getElementById('email');
    const emE = document.getElementById('emailErr');
    if (em?.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value)) {
      em.classList.add('error');
      if (emE) { emE.textContent = 'Enter a valid email address.'; emE.classList.add('show'); }
      valid = false;
    }
    if (valid) { showToast('Student registered successfully.', 'success'); regForm.reset(); }
    else { showToast('Please correct the errors above.', 'error'); }
  });

  regForm.querySelectorAll('.form-control').forEach(el => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      const err = document.getElementById(el.id + 'Err');
      if (err) err.classList.remove('show');
    });
  });
}

function filterTable() {
  const q      = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
  const status = (document.getElementById('filterStatus')?.value || '').toLowerCase();

  document.querySelectorAll('#stuTable tbody tr').forEach(row => {
    const text       = row.textContent.toLowerCase();
    const matchQ     = !q || text.includes(q);
    const matchStatus= !status || text.includes(status);
    row.style.display = (matchQ && matchStatus) ? '' : 'none';
  });
}

document.getElementById('searchInput')?.addEventListener('input', filterTable);
document.getElementById('filterStatus')?.addEventListener('change', filterTable);

document.querySelectorAll('.btn-view').forEach(b => {
  b.addEventListener('click', () => showToast(`Viewing record: ${b.dataset.name}`, 'info'));
});
document.querySelectorAll('.btn-edit').forEach(b => {
  b.addEventListener('click', () => showToast(`Editing: ${b.dataset.name}`, 'info'));
});