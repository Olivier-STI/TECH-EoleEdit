function LogServer(msg : String, FLAG : Number) {
    var d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var fullDate = date+' '+hours;

    if (FLAG === 1)
        console.log(fullDate + " ", '\x1b[32m [OK] \x1b[0m', msg)
    if (FLAG === 2)
        console.log(fullDate + " ", '\x1b[31m [KO] \x1b[0m', msg)
}

export default LogServer