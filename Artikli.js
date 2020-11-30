export class Artikli{
    constructor(naz,cena,slika)
    {
        this.naziv=naz;
        this.cena=cena;
        this.slika=slika;
    }
    
    get Naziv (){
        return this.naziv;
    }

    set Naziv(n){
        this.naziv=n;
    }

    get Cena(){
        return this.cena;
    }

    set Cena(c){
        this.cena=c;
    }
    get Slika(){
        return this.slika;
    }

    set Slika(s){
        this.slika=s;
    }

}