 const toggleSidebarBtn = document.querySelector('#toggle-sidebar');
 const nav = document.querySelector('nav');

toggleSidebarBtn.addEventListener('click', toggleSidebar);


 function toggleSidebar() {
  nav.classList.toggle('close');
  console.log('Hi');
 }