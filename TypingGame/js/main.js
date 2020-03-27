'use strict';

{
  const words = [
    'apple',
    'sky',
    'precure',
    'blue',
    'middle',
    'set',
  ];
  let word;
  let loc;
  let score;
  let miss;
  const timeLimit = 3 * 1000;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');

//キー入力を読み込むと文字を_に変換する
  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++){
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  }

  //制限時間カウントダウン
  function updateTimer(){
    const timeLeft = startTime + timeLimit - Date.now(); //残り時間の計算
    timerLabel.textContent = (timeLeft / 1000).toFixed(2); //時間を表示

    //10msごとにタイマーの処理を呼ぶ
    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 10);

    if(timeLeft < 0){
      isPlaying = false;

      clearTimeout(timeoutId);
      timerLabel.textContent = '0.00';
      setTimeout(() => {
        showResult();
      }, 100);
      
      target.textContent = 'click to replay';
    }
  } 

  function showResult(){
    const accuracy = score + miss === 0 ? 0 : score / (score + miss) * 100;
    alert(`${score} letters, ${miss} misses, ${accuracy.toFixed(2)}% accuracy!`); //スコア、ミスの数、accurscy(小数点以下2桁)
  }

  window.addEventListener('click', () => {
    if(isPlaying === true) {
      return;
    }
    isPlaying = true;

    loc = 0;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    word = words[Math.floor(Math.random() * words.length)];

    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  });

  window.addEventListener('keydown', e => {
    if(isPlaying !== true){
      return;
    }
    if (e.key === word[loc]) {
      loc++;
      if(loc === word.length){
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      updateTarget();
      score++;
      scoreLabel.textContent = score;
    }else{
      miss++;
      missLabel.textContent = miss;
    }

  });
}