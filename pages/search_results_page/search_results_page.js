const main_content = document.getElementById('main__content__result');
let verticalFilterCurrent = 'filter_post';
let currentPage = 'post_list';
const page_num = document.getElementById('page-num');

setTimeout(function () {
  document.getElementById('post_list').classList.add('loaded');
}, 300);

document.getElementById('filter_post').classList.add('clicked');

document.getElementById(currentPage).style.visibility = 'visible';

document.getElementById('filter_post').addEventListener('click', function () {
  if (verticalFilterCurrent == 'filter_post') return;
  page_num.style.visibility = 'visible';
  document.getElementById(verticalFilterCurrent).classList.remove('clicked');
  document.getElementById(currentPage).classList.remove('loaded');
  document.getElementById(currentPage).style.display = 'none';
  verticalFilterCurrent = 'filter_post';
  document.getElementById(verticalFilterCurrent).classList.add('clicked');
  currentPage = 'post_list';
  setTimeout(function () {
    document.getElementById(currentPage).style.display = 'flex';
    setTimeout(function () {
      document.getElementById(currentPage).classList.add('loaded');
    }, 100);
  }, 100);
});

document.getElementById('filter_product').addEventListener('click', function () {
  if (verticalFilterCurrent == 'filter_product') return;
  page_num.style.visibility = 'visible';
  document.getElementById(verticalFilterCurrent).classList.remove('clicked');
  document.getElementById(currentPage).classList.remove('loaded');
  document.getElementById(currentPage).style.display = 'none';
  verticalFilterCurrent = 'filter_product';
  document.getElementById(verticalFilterCurrent).classList.add('clicked');
  currentPage = 'products';
  setTimeout(function () {
    document.getElementById(currentPage).style.display = 'grid';
    setTimeout(function () {
      document.getElementById(currentPage).classList.add('loaded');
    }, 100);
  }, 100);
});

document.getElementById('filter_user').addEventListener('click', function () {
  if (verticalFilterCurrent == 'filter_user') return;
  page_num.style.setProperty('visibility', 'hidden');
  document.getElementById(verticalFilterCurrent).classList.remove('clicked');
  document.getElementById(currentPage).classList.remove('loaded');
  document.getElementById(currentPage).style.display = 'none';
  verticalFilterCurrent = 'filter_user';
  document.getElementById(verticalFilterCurrent).classList.add('clicked');
  currentPage = 'users';
  console.log(document.getElementById(currentPage));
  setTimeout(function () {
    document.getElementById(currentPage).style.display = 'flex';
    setTimeout(function () {
      document.getElementById(currentPage).classList.add('loaded');
    }, 100);
  }, 100);
});