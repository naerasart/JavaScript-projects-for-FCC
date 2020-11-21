function palindrome(str) {
    var A = /[^a-z0-9+]+/gi;
    var B = str.replace(A, "");
    var C = B.toLowerCase();
    var string = C.replace(/[^a-z0-9+]+/gi, "");
    var pali = string.toLowerCase().split("").reverse().join("");

    if (pali == string) {
        return true;
    }
    return false;
}

palindrome("eye");