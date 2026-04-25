// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Section navigation (tab-style swap)
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const navList = document.querySelector('.nav-list');
const hamburger = document.querySelector('.hamburger');

function showSection(sectionId, workTab) {
  // Hide all sections, show target
  sections.forEach(s => s.classList.remove('active'));
  const target = document.getElementById(sectionId);
  if (target) target.classList.add('active');

  // Update nav active state
  navLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.section === sectionId);
  });

  // If we're on Work Highlights and have a specific tab to open
  if (sectionId === 'work' && workTab) {
    showWorkTab(workTab);
  }

  // Close mobile menu
  navList.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');

  // Scroll to top of content
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = link.dataset.section;
    history.pushState(null, '', '#' + section);
    showSection(section);
  });
});

// Work Highlights tabs (deeply linkable)
const workTabs = document.querySelectorAll('.work-tab');
const workPanels = document.querySelectorAll('.work-panel');

function showWorkTab(tabId) {
  workTabs.forEach(t => t.classList.toggle('active', t.dataset.tab === tabId));
  workPanels.forEach(p => p.classList.toggle('active', p.id === 'work-' + tabId));
}

workTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    showWorkTab(tabId);
    history.replaceState(null, '', '#work/' + tabId);
  });
});

// Hamburger menu
hamburger.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  hamburger.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Handle URL hash on load and back/forward navigation
function handleHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) {
    showSection('about');
    return;
  }
  // Support deep links like #work/apple
  if (hash.includes('/')) {
    const [section, sub] = hash.split('/');
    showSection(section, sub);
  } else {
    showSection(hash);
  }
}

window.addEventListener('popstate', handleHash);
handleHash();
