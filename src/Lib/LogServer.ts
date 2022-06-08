let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

function LogServer(msg : String, FLAG : Number) {
    if (FLAG === 1)
        console.log(year + "-" + month + "-" + date + " ", '\x1b[32m [OK] \x1b[0m', msg)
    if (FLAG === 2)
        console.log(year + "-" + month + "-" + date + " ", '\x1b[31m [KO] \x1b[0m', msg)
}

export default LogServer