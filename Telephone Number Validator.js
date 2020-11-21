function telephoneCheck(str) {
    var a = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

    if (str.match(a)) {
        return true;
    } else if (!str.match(a)) {
        return false;
    } else {
        return false;
    }

}