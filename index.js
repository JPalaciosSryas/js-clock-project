let clock = document.getElementById('clock');
let dateScreen = document.getElementById('date');
let ordinal = document.getElementById('ordinal');
let yearScreen = document.getElementById('year');

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
    let t = setInterval(() => {startTime()}, 1000);
}

startTime();

// if (x > 10) {
//     console.log('true')
// } else {
//     console.log('false')
// };

// x > 10 ? console.log('true') : console.log('false');

startDate = () => {
    var ord;
    var today = new Date();
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var currentDay = today.getDate();
    var currentMonth = months[today.getMonth()];
    var currentYear = today.getFullYear();
    if (currentDay == 1) {
        ord = 'st'
    } else if (currentDay == 3) {
        ord = 'rd'
    } else if (currentDay == 2) {
        ord = 'nd'
    } else  {
        ord = 'th'
    }

    var date = currentMonth + " " + currentDay; 
    var year = currentYear;
    dateScreen.innerText = date;
    ordinal.innerText = ord + ' ';
    yearScreen.innerText = year;
}
startDate();