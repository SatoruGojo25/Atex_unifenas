
(function(){
  const rootEl = document.documentElement;
  const KEY = 'site-theme'; // 'light' | 'dark'
  const toggleBtn = document.getElementById('themeToggle');
  const iconSun = document.getElementById('iconSun');

  const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  function applyTheme(theme){
    if(theme === 'dark'){
      rootEl.setAttribute('data-theme','dark');
      toggleBtn?.setAttribute('aria-pressed','true');
      if(iconSun) iconSun.style.transform = 'rotate(40deg) scale(0.9)';
    } else {
      rootEl.removeAttribute('data-theme');
      toggleBtn?.setAttribute('aria-pressed','false');
      if(iconSun) iconSun.style.transform = 'rotate(0deg) scale(1)';
    }
  }

  function getInitialTheme(){
    try{
      const stored = localStorage.getItem(KEY);
      if(stored === 'light' || stored === 'dark') return stored;
    }catch(e){}
    return systemPrefersDark ? 'dark' : 'light';
  }

  function toggleTheme(){
    const current = rootEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try{ localStorage.setItem(KEY, next); }catch(e){}
  }

  const initial = getInitialTheme();
  applyTheme(initial);

  if(window.matchMedia){
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener && mq.addEventListener('change', e => {
      try{
        const stored = localStorage.getItem(KEY);
        if(!stored){
          applyTheme(e.matches ? 'dark' : 'light');
        }
      }catch(er){}
    });
  }

  toggleBtn?.addEventListener('click', toggleTheme);

  document.addEventListener('keydown', (ev) => {
    if(ev.key.toLowerCase() === 't') toggleTheme();
  });
})();
