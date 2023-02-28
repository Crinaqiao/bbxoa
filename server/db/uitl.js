let getNewTime = (type) => {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() < 9 ? '0'+ (now.getMonth() + 1) : now.getMonth() + 1; //月
    var day = now.getDate() < 10 ? '0' + now.getDate() : now.getDate(); //日

    var hh = now.getHours() < 10 ? '0' + now.getHours() : now.getHours(); //时
    var mm = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes(); //分
    var ss = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds(); //秒

    switch (type){
        case 'y':
            return `${year}`;
        case 'y-m':
            return `${year}-${month}`;
        case 'y-m-d':
            return `${year}-${month}-${day}`;
        case 'y-m-d h:m':
            return `${year}-${month}-${day} ${hh}:${mm}`;
        case 'y-m-d h:m:s':
            return `${year}-${month}-${day} ${hh}:${mm}:${ss}`;
        default:
            return `${year}-${month}-${day} ${hh}:${mm}:${ss}`;
    }
};

module.exports = {
    getNewTime
}