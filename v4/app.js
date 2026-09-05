(function () {
  const NAV_LINKS = [
    ['index.html', 'Home', 'index'],
    ['services.html', 'Services', 'services'],
    ['about.html', 'About', 'about'],
    ['mobile-apps.html', 'Mobile Apps', 'mobile-apps'],
  ];

  function pageId() {
    const file = window.location.pathname.split('/').pop() || 'index.html';
    return file.replace('.html', '') || 'index';
  }

  function buildNav(container, activeClass) {
    const active = pageId();
    NAV_LINKS.forEach(([href, label, id]) => {
      const a = document.createElement('a');
      a.href = href;
      a.textContent = label;
      if (id === active) a.classList.add(activeClass);
      container.appendChild(a);
    });
  }

  function mountSidebar() {
    const mount = document.querySelector('[data-sidebar]');
    if (!mount) return;

    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.className = 'logo';
    logo.innerHTML = '<img src="../assets/snapops_logo_black.svg" width="165" height="52" alt="SnapOps">';
    mount.appendChild(logo);

    const nav = document.createElement('nav');
    buildNav(nav, 'is-active');
    mount.appendChild(nav);

    const cta = document.createElement('a');
    cta.href = 'index.html#booking';
    cta.className = 'cta';
    cta.textContent = 'Book a call';
    mount.appendChild(cta);

    const contact = document.createElement('div');
    contact.className = 'contact';
    contact.innerHTML = 'Chris Becher<br><a href="mailto:chris@snapops.ca">chris@snapops.ca</a><br>&copy; ' + new Date().getFullYear() + ' SnapOps Consulting Inc.';
    mount.appendChild(contact);
  }

  function mountTopbar() {
    const mount = document.querySelector('[data-topbar]');
    if (!mount) return;

    const logo = document.createElement('a');
    logo.href = 'index.html';
    logo.innerHTML = '<img src="../assets/snapops_logo_black.svg" alt="SnapOps">';

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.textContent = 'Menu';

    const drawer = document.createElement('nav');
    drawer.hidden = true;
    drawer.className = 'mobile-drawer';
    buildNav(drawer, 'is-active');
    const cta = document.createElement('a');
    cta.href = 'index.html#booking';
    cta.textContent = 'Book a call';
    cta.className = 'mobile-drawer__cta';
    drawer.appendChild(cta);

    toggle.addEventListener('click', () => {
      drawer.hidden = !drawer.hidden;
      toggle.textContent = drawer.hidden ? 'Menu' : 'Close';
    });

    mount.appendChild(logo);
    mount.appendChild(toggle);
    mount.insertAdjacentElement('afterend', drawer);
  }

  mountSidebar();
  mountTopbar();
})();
