const scrollToTop = document.querySelector('.scroll-to-top');
scrollToTop.addEventListener('click', e => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});
const header = document.querySelector('header');
window.onscroll = e => {
  header.className = window.scrollY > window.outerHeight ? 'active' : '';
};
const anchors = document.querySelectorAll('nav ul li a');
anchors.forEach(anchor => {
  anchor.onclick = () => {
    anchors.forEach(anchor => {
      anchor.classList.remove('active');
    });
    anchor.classList.add('active');
  };
});
const bg = document.querySelector('.bg');
const bullets = document.querySelectorAll('.bullets li');
bullets.forEach((bullet, indx) => {
  bullet.onclick = () => {
    bullets.forEach(bullet => {
      bullet.classList.remove('active');
    });
    bullet.classList.add('active');
    bg.style.backgroundImage = `url(../images/landing${indx}.jpg)`;
  };
});

const toggleMenu = document.querySelector('.toggle-menu');

toggleMenu.onclick = () => {
  toggleMenu.classList.toggle('active');
};

const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
leftArrow.onclick = () => {
  let activeBullet = document.querySelector('.bullets .active');
  let parent = activeBullet.parentElement;
  let currentIndx = Array.prototype.indexOf.call(parent.children, activeBullet);
  let newIndex = currentIndx - 1 >= 0 ? currentIndx - 1 : bullets.length - 1;
  bullets[currentIndx].classList.remove('active');
  bullets[newIndex].classList.add('active');
  bg.style.backgroundImage = `url(../images/landing${newIndex}.jpg)`;
};
rightArrow.onclick = () => {
  let activeBullet = document.querySelector('.bullets .active');
  let parent = activeBullet.parentElement;
  let currentIndx = Array.prototype.indexOf.call(parent.children, activeBullet);
  let newIndex = currentIndx + 1 <= bullets.length - 1 ? currentIndx + 1 : 0;
  bullets[currentIndx].classList.remove('active');
  bullets[newIndex].classList.add('active');
  bg.style.backgroundImage = `url(../images/landing${newIndex}.jpg)`;
};
const shuffles = document.querySelectorAll('.shuffle li');

shuffles.forEach(shuffle => {
  shuffle.onclick = () => {
    if (shuffle.dataset.filter === 'all') {
      document.querySelectorAll('.box').forEach(box => {
        box.style.display = 'block';
      });
    } else {
      document.querySelectorAll('.box').forEach(box => {
        box.style.display = 'none';
      });
      let targets = document.querySelectorAll(`.${shuffle.dataset.filter}`);
      targets.forEach(box => {
        box.style.display = 'block';
      });
    }
    shuffles.forEach(shuffle => {
      shuffle.classList.remove('active');
    });
    shuffle.classList.add('active');
  };
});
const cols = document.querySelectorAll('[class^="col"]');
const moveList = document.querySelectorAll('.move-list li');
moveList.forEach((item, indx) => {
  item.onclick = () => {
    cols.forEach(col => {
      col.classList.remove('active');
    });
    document.querySelector('.col-' + (indx + 1)).classList.add('active');
    moveList.forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  };
});