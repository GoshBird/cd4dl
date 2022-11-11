const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

function countdown() {
    const now = new Date(); // 現在時刻を取得
    const tomorrow = new Date("2 15, 2023 12:00:00 GMT+09:00");
    const diff = tomorrow.getTime() - now.getTime();

    // ミリ秒から単位を修正
    const calcDay = Math.floor(diff / 1000 / 60 / 60 / 24);
    const calcHour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const calcMin = Math.floor(diff / 1000 / 60) % 60;
    const calcSec = Math.floor(diff / 1000) % 60;

    // 取得した時間を表示（2桁表示
    day.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;
    hour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
    min.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
    sec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
}
countdown();
setInterval(countdown,1000);