function showModal(name, title, desc) {
  document.getElementById('modal-content').innerHTML =
    `<span class="close-btn" onclick="hideModal(event)">&times;</span>
     <h2>${name}</h2>
     <h4>${title}</h4>
     <p>${desc}</p>`;
  document.getElementById('modal-bg').classList.add('active');
}
function hideModal(e) {
  if (e.target.classList.contains('modal-bg') || e.target.classList.contains('close-btn')) {
    document.getElementById('modal-bg').classList.remove('active');
  }
}