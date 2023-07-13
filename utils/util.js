const formatTime = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${[year, month, day].map(formatNumber).join("/")} ${[
        hour,
        minute,
        second,
    ]
        .map(formatNumber)
        .join(":")}`;
};
// 去除0 参数 日期 如 2020-07-08 返回为 2020-7-8
function dislodgeZero(str) {
    let strArray = str.split("-");
    strArray = strArray.map(function (val) {
        if (val[0] == "0") {
            return (val = val.slice(1));
        } else {
            return val;
        }
    });
    return strArray.join("-");
}

const formatNumber = (n) => {
    n = n.toString();
    return n[1] ? n : `0${n}`;
};

module.exports = {
    formatTime,
    dislodgeZero,
};
