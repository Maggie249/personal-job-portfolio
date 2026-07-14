/**
 * main.js - 个人求职官网交互逻辑
 * 包含：导航动态、技能动画、联系方式复制、移动端菜单
 */

// ========== 顶部导航滚动样式 ==========
const navbar = document.getElementById('navbar');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 50) {
    navbar.classList.add('scrolled', 'shadow-sm');
  } else {
    navbar.classList.remove('scrolled', 'shadow-sm');
  }
  lastScrollY = scrollY;
});

// ========== 移动端汉堡菜单 ==========
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  menuOpen.classList.toggle('hidden');
  menuClose.classList.toggle('hidden');
});

// 点击链接后自动关闭菜单
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuOpen.classList.remove('hidden');
    menuClose.classList.add('hidden');
  });
});

// ========== 技能进度条入场动画 ==========
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkills = () => {
  skillBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight - 60 && !bar.classList.contains('animated')) {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
      bar.classList.add('animated');
    }
  });
};

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);

// ========== 联系方式复制 ==========
const contactItems = document.querySelectorAll('.contact-item[data-copy]');
const toast = document.getElementById('copy-toast');
let toastTimer = null;

contactItems.forEach((item) => {
  item.addEventListener('click', () => {
    const text = item.getAttribute('data-copy');
    navigator.clipboard.writeText(text).then(() => {
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    }).catch(() => {
      // 备用复制方式
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      toast.classList.add('show');
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => {
        toast.classList.remove('show');
      }, 2000);
    });
  });
});

// ========== 导航高亮监听 ==========
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const updateActiveNav = () => {
  let current = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', updateActiveNav);
window.addEventListener('load', updateActiveNav);
