const countFifty = () => {

  // 50までカウントする
  for (let i = 1; i <= 50; i++) {

    // 10ごとにカウント
    if (i % 10 == 0){
      console.log("今" + i + "回ループしました。");
    }

    // 4で割れる数のカウント
    if (i % 4 == 0) {
      console.log("4で割れる数です。" + i);
    }
  }
  alert("50回カウントが終わりました。");
}

countFifty();