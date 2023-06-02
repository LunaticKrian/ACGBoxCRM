// 封装函数，判断当前时间状态：
export const getTimeStatus = () => {
    let message = ''
    let hour = new Date().getHours()
    if (hour <= 9) message = '早上'
    else if (hour <= 12) message = '上午'
    else if (hour <= 18) message = '下午'
    else message = '晚上'
    return message
}

