let clock = document.getElementById('clock');

const startTime = () => {

    let timer = new Date();

    let hh = timer.getHours();
    let mm = timer.getMinutes();
    let ss = timer.getSeconds();
    let day = "AM";

    if (hh === 0) {
        hh = 12;
    }
    if (hh >= 12) {
        day = "PM";
    }
    if (hh > 12) {
        hh = hh - 12;
    }
    // if (hh < 10) {
    //     hh = '0' + hh;
    // } else {
    //     hh = hh;
    // }
    // if (mm < 10) {
    //     mm = '0' + mm;
    // } else {
    //     mm = mm;
    // }
    // if (ss < 10) {
    //     ss = '0' + ss;
    // } else {
    //     ss = ss;
    // }

    hh = hh < 10 ? '0' + hh : hh;
    mm = mm < 10 ? '0' + mm : mm;
    ss = ss < 10 ? '0' + ss : ss;

    let time = hh + ':' + mm + ':' + ss + ' ' + day;
    clock.innerText = time;
    let t = setTimeout(() => {startTime()}, 1000);
}

startTime();

// if (x > 10) {
//     console.log('true')
// } else {
//     console.log('false')
// };

// x > 10 ? console.log('true') : console.log('false');