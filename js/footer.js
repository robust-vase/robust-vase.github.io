function createtime() {
    var now = new Date();
    var startTime = new Date("04/23/2022 00:00:00");
    var elapsedTimeInSeconds = (now - startTime) / 1000;
    var days = Math.floor(elapsedTimeInSeconds / 86400);
    var hours = Math.floor((elapsedTimeInSeconds % 86400) / 3600);
    var minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
    var seconds = Math.floor(elapsedTimeInSeconds % 60);

    if (String(hours).length == 1) {
        hours = "0" + hours;
    }
    if (String(minutes).length == 1) {
        minutes = "0" + minutes;
    }
    if (String(seconds).length == 1) {
        seconds = "0" + seconds;
    }

    // 计算当天工作时间和休息时间
    var workHours = 0;
    var restHours = 0;
    var workMinutes = minutes;
    var restMinutes = minutes;
    if (hours >= 8 && hours < 21) {
        workHours = hours - 8;
        restHours = 11;
        restMinutes = 0;
    } else if (hours >= 21 || hours < 8) {
        workMinutes = 0;
        if (hours >= 21) {
            workHours = 13;
        }
        restHours = hours >= 21 ? hours - 21 : (24 - 21) + hours;
    }


    let c = "";
    if (hours < 21 && hours >= 8) {
        c = `<div style="font-size:13px;font-weight:bold">花瓶居然存在了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class="fas fa-heartbeat"></i> <br> 花瓶努力工作呢～<br>今天已工作 ${workHours} 小时 ${workMinutes} 分，休息 ${restHours} 小时 ${restMinutes} 分</div>`;
    } else {
        c = `<div style="font-size:13px;font-weight:bold">花瓶居然存在了 ${days} 天 ${hours} 小时 ${minutes} 分 ${seconds} 秒 <i id="heartbeat" class="fas fa-heartbeat"></i> <br> 花瓶下班休息啦～<br>今天已工作 ${workHours} 小时 ${workMinutes} 分，休息 ${restHours} 小时 ${restMinutes} 分</div>`;
    }

    if (document.getElementById("workboard")) {
        document.getElementById("workboard").innerHTML = c;
    }
}

setInterval(() => {
    createtime();
}, 1000);
