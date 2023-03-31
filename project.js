
setInterval(() => {
    a = new Date()
    let date = a.toDateString()
    let time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds()
    document.getElementById('times').innerHTML = time
    document.getElementById('date').innerHTML = date;
}, 1000);