document.addEventListener('DOMContentLoaded', () => {
  if (!sessionStorage.getItem('welcomeShown')) {
    alert("👋 WELCOME!! to my Portfolio!!\nExplore my Resume, Project and can contact me.");
    sessionStorage.setItem('welcomeShown', 'true');
  };
})

const Name = document.querySelector('.names');

Name.addEventListener('mouseenter', () => {
  Name.style.color = 'navy';
  Name.style.transition = 'color 0.3s ease';
});

Name.addEventListener('mouseleave', () => {
  Name.style.color = '';
});

const Logo = document.querySelector('.logo');
if (Logo) {
  Logo.style.cursor = 'pointer';
  Logo.addEventListener('click', () => {
    window.location.href= 'index.html';
  });
}
