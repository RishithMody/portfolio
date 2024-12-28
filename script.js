function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  function openProjectPreview(url) {
      window.open(url, '_blank');
  }
  
  document.addEventListener('DOMContentLoaded', function() {
      const projectPreviews = document.querySelectorAll('.project-preview');
      projectPreviews.forEach(preview => {
          preview.addEventListener('click', function() {
              const projectUrl = this.closest('.color-container')
                                   .querySelector('.btn-container .project-btn:last-child')
                                   .getAttribute('onclick')
                                   .match(/'([^']+)'/)[1];
              window.open(projectUrl, '_blank');
          });
      });
  });
  
  // Add progress bar functionality
  window.addEventListener('scroll', () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.querySelector(".progress-bar").style.width = scrolled + "%";
  });
  
  // Dark mode toggle
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('img');
  
  themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDark);
      
      // Switch icon based on dark mode state
      themeIcon.src = isDark ? '/public/sun.png' : '/public/moon.png';
  });
  
  // Check for saved theme preference on load
  if (localStorage.getItem('darkMode') === 'true') {
      document.body.classList.add('dark-mode');
      themeIcon.src = '/public/sun.png';
  }
  