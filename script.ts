function osszesOszto(szam:number):number[]{

    var osztok:number[] = [];

    for(var i:number=1; i<=szam; i++){
         if(szam%i==0)
         {
            osztok.push(i);
         }
    }
    return osztok;
}

function parosDarab(szamok:number[]):number{

    var dbSzam:number = 0;
    for (var i:number=0; i<szamok.length; i++){
        if(szamok[i]%2==0){
            dbSzam++;
        }
    }
    return dbSzam;
}

function fuggvenyhivasPalindrom(szoveg:string):boolean{
    var tesztSzoveg = szoveg.toLowerCase().replace(/[^a-z0-9]/g, "");


    if(tesztSzoveg === tesztSzoveg.split("").reverse().join(""))
    {
        return true;
    }

    else{
        return false;
    }
}