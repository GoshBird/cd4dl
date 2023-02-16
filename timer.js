const tday = document.getElementById("tday");
const thour = document.getElementById("thour");
const tmin = document.getElementById("tmin");
const tsec = document.getElementById("tsec");
const tmsec = document.getElementById("tmsec");
const hday = document.getElementById("hday");
const hhour = document.getElementById("hhour");
const hmin = document.getElementById("hmin");
const hsec = document.getElementById("hsec");
const hmsec = document.getElementById("hmsec");

function tcountdown() {
    const now = new Date(); // 現在時刻を取得
    const tomorrow = new Date("February 14, 2023 15:00:00 GMT+09:00");
    const diff = tomorrow.getTime() - now.getTime();

    // ミリ秒から単位を修正
    const calcDay = Math.floor(diff / 1000 / 60 / 60 / 24);
    const calcHour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const calcMin = Math.floor(diff / 1000 / 60) % 60;
    const calcSec = Math.floor(diff / 1000) % 60;
    const calcmSec = Math.floor(diff / 10)% 100;

    // 取得した時間を表示（2桁表示
    tday.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;
    thour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
    tmin.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
    tsec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
    tmsec.innerHTML = calcmSec < 10 ? '0' + calcmSec : calcmSec;
}

function hcountdown() {
    const now = new Date(); // 現在時刻を取得
    const tomorrow = new Date("February 20, 2023 8:40:00 GMT+09:00");
    const diff = tomorrow.getTime() - now.getTime();

    // ミリ秒から単位を修正
    const calcDay = Math.floor(diff / 1000 / 60 / 60 / 24);
    const calcHour = Math.floor(diff / 1000 / 60 / 60) % 24;
    const calcMin = Math.floor(diff / 1000 / 60) % 60;
    const calcSec = Math.floor(diff / 1000) % 60;
    const calcmSec = Math.floor(diff / 10)% 100;

    // 取得した時間を表示（2桁表示
    hday.innerHTML = calcDay < 10 ? '0' + calcDay : calcDay;
    hhour.innerHTML = calcHour < 10 ? '0' + calcHour : calcHour;
    hmin.innerHTML = calcMin < 10 ? '0' + calcMin : calcMin;
    hsec.innerHTML = calcSec < 10 ? '0' + calcSec : calcSec;
    hmsec.innerHTML = calcmSec < 10 ? '0' + calcmSec : calcmSec;
}
// tcountdown();
hcountdown();
// setInterval(tcountdown,10);
setInterval(hcountdown,10);