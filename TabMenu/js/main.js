'use strict';
// 該当するメニューとcontentに対してactiveクラスをつければよい

{
  const menuItems = document.querySelectorAll('.menu li a')
  const contents = document.querySelectorAll('.content')

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => { 
      //'a'はリンク先にページ遷移する機能を持つのでe(イベントオブジェクト)をよんで打ち消す
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active'); //アイテムをすべてオフにする
      });
      clickedItem.classList.add('active'); //クリックされたアイテムをオンにする
    

      contents.forEach(content => {
        content.classList.remove('active'); //アイテムをすべてオフにする
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });

}