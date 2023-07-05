var dayjs = require('dayjs');

const now = dayjs();

module.exports = {
    nowData:now,
    nowTime(){
        return dayjs().format("YYYY-MM-DD HH:mm:ss");
    },
    getYearMonthDay(){
        return dayjs().format("YYYY-MM-DD");
    },
    getMonthDayHourMinute(){
        return dayjs().format("MM-DD HH:mm");
    },
    getHourMinute(){
        return dayjs().format("HH:mm");
    }
}