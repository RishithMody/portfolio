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
