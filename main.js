(function(){
  // Footer year
  var yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');
  if(toggle && menu){
    toggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('show');
    });
  }
})(); 