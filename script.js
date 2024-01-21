function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(szamok) {
    var dbSzam = 0;
    for (var i = 0; i < szamok.length; i++) {
        if (szamok[i] % 2 == 0) {
            dbSzam++;
        }
    }
    return dbSzam;
}
function fuggvenyhivasPalindrom(szoveg) {
    var tesztSzoveg = szoveg.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (tesztSzoveg === tesztSzoveg.split("").reverse().join("")) {
        return true;
    }
    else {
        return false;
    }
}
