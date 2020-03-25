'use strict';

{
  // 取得した要素を指定した定数で扱えるようにする
  const open =document.getElementById('open');
  const close =document.getElementById('close');
  const modal =document.getElementById('modal');
  const mask =document.getElementById('mask');

  // クリックするとhiddenがオフになる
  open.addEventListener('click',()=>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  })

  close.addEventListener('click',()=>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  })
  mask.addEventListener('click',()=>{
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  })
}