function rot13(str) {


    var A = 0;
    var newArray = [];
    var long = str.length;
    for (var i = 0; i < long; i++) {

        A = str.charCodeAt(i);

        if (A < 65) {

            newArray.push(String.fromCharCode(A));
        } else if (A < 78) {
            newArray.push(String.fromCharCode(A + 13));
        } else if (A > 90) {
            newArray.push(String.fromCharCode(A));
        } else {

            newArray.push(String.fromCharCode(A - 13));

        }


    }

    return newArray.join("");
}


rot13("SERR PBQR PNZC");


rot13("SERR PBQR PNZC");