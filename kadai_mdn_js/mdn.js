// 今日の日付を出力する関数
const showToday = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  console.log(`${year}年${month}月${day}日`);

}

// 関数を呼び出す
showToday();
