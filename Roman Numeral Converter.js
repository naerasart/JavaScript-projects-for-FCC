function convertToRoman(num) {
    var decimals = ['1000', '900', '500', '400', ' 100', ' 90', ' 50', '40', '10', ' 9', '5', '4', '1'];
    var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X",
        "IX", "V", "IV", "I"
    ];
    var dec = 0;
    var rom = 0;
    var newArr = '';
    for (var i in decimals) {
        dec = decimals[i];
        rom = romans[i];
        while (dec <= num) {
            newArr += rom;
            num -= dec;
        }
    }
    console.log(newArr);

    return newArr;
};

convertToRoman(36);