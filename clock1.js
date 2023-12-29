let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function num() {

    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();


    let hRoat = 30 * hh + mm / 2;
    let mRoat = 6*mm;
    let sRoat = 6*ss;

    hr.style.transform = `rotate(${hRoat}deg)`
    min.style.transform = `rotate(${mRoat}deg)`
    sec.style.transform = `rotate(${sRoat}deg)`

}

setInterval(num,1000)