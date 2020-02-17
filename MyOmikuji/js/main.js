'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ["大吉","吉","凶","中吉","末吉"];
    // btn.textContent = results[Math.floor(Math.random() * results.length )];
    const n = Math.random();
    if(n < 0.05){
      btn.textContent = "大吉";
    }else if(n < 0.3){
      btn.textContent = "中吉";
    }else{
      btn.textContent = "凶";
    }


  });
}