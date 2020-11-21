function checkCashRegister(price, cash, cid) {

    var currency = {
        "ONE HUNDRED": 10000,
        "TWENTY": 2000,
        "TEN": 1000,
        "FIVE": 500,
        "ONE": 100,
        "QUARTER": 25,
        "DIME": 10,
        "NICKEL": 5,
        "PENNY": 1
    };

    var cashy = cash * 100;
    var pricy = price * 100;
    var totalchange = Math.round(cashy - pricy);
    var totalchangers = totalchange;
    var change = [];
    var currentSum = 0;

    var totalcid = parseFloat(cid.reduce((acc, next) => {
        return acc +
            next[1]
    }, 0.0)).toFixed(2);

    function c(item) { return cid[1]; }
    var newCid = cid.filter((c));
    newCid.reverse();

    newCid.forEach((item, curr) => {
        curr = item[0];
        currentSum = item[1] * 100;
        var amount = 0;

        while (totalchange >= currency[item[0]] && currentSum >= 1) {
            amount += currency[item[0]];
            totalchange -= currency[item[0]];
            currentSum -= currency[item[0]];
        }
        amount = amount / 100;
        while (amount) {
            change.push([curr, amount]);
            break;
        }
    });

    if (totalchange > totalcid) { return { "status": 'INSUFFICIENT_FUNDS', "change": [] }; } else if (totalchange == 0 && totalchangers == totalcid * 100) { return { "status": 'CLOSED', "change": cid }; } else if (totalchange == totalcid) { return { "status": 'CLOSED', "change": cid }; } else if (totalcid > totalchange) { return { "status": 'OPEN', "change": change }; }

}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);