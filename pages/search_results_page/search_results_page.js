const main_content = document.getElementById('main__content__result');
let verticalFilterCurrent = 'filter_post';
const page_num = document.getElementById('page-num');

setTimeout(function () {
  document.getElementById('post_list').classList.add('loaded');
}, 300);

document.getElementById('filter_post').classList.add('clicked');

$.get('../../assets/posts.html', function (data) {
  $('#main__content__result').html($(data));
});

document.getElementById('filter_post').addEventListener('click', function () {
  if (verticalFilterCurrent == 'filter_post') return;
  page_num.style.visibility = 'visible';
  document.getElementById(verticalFilterCurrent).classList.remove('clicked');
  document.getElementById('filter_post').classList.add('clicked');
  verticalFilterCurrent = 'filter_post';
  $.get('../../assets/posts.html', function (data) {
    $('#main__content__result').html($(data));
  });
  setTimeout(function () {
    document.getElementById('post_list').classList.add('loaded');
  }, 100);
});

document.getElementById('filter_product').addEventListener('click', function () {
  if (verticalFilterCurrent == 'filter_product') return;
  page_num.style.visibility = 'visible';
  document.getElementById(verticalFilterCurrent).classList.remove('clicked');
  verticalFilterCurrent = 'filter_product';
  document.getElementById(verticalFilterCurrent).classList.add('clicked');
  $.get('../../assets/products.html', function (data) {
    $('#main__content__result').html($(data));
  });
  setTimeout(function () {
    document.getElementById('products').classList.add('loaded');
  }, 100);
});

document.getElementById('filter_user').addEventListener('click', function () {
  if (verticalFilterCurrent == 'filter_user') return;
  page_num.style.setProperty('visibility', 'hidden');
  document.getElementById(verticalFilterCurrent).classList.remove('clicked');
  verticalFilterCurrent = 'filter_user';
  document.getElementById(verticalFilterCurrent).classList.add('clicked');
  $.get('../../assets/users.html', function (data) {
    $('#main__content__result').html($(data));
  });
});