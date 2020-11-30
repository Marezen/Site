import {Glavna} from "./Glavna.js";
import {Artikli} from "./Artikli.js";

var a1=new Artikli('Kolacic 1',1000,"./Logo.jpg");
var a2=new Artikli('Kolacic 2',1000,"./Logo.jpg");
var a2=new Artikli('Kolacic 2',1000,"./Logo.jpg");
var a3=new Artikli('Kolacic 3',1000,"./Logo.jpg");
var a4=new Artikli('Kolacic 4',1000,"./Logo.jpg");
var a5=new Artikli('Kolacic 5',1000,"./Logo.jpg");
var a6=new Artikli('Kolacic 6',1000,"./Logo.jpg");
var a7=new Artikli('Kolacic 7',1000,"./Logo.jpg");
var a8=new Artikli('Kolacic 8',1000,"./Logo.jpg");



const g=new Glavna ();
g.dodajArtikle(a1);
g.dodajArtikle(a2);
g.dodajArtikle(a3);
g.dodajArtikle(a4);
g.dodajArtikle(a5);
g.dodajArtikle(a6);
g.dodajArtikle(a7);
g.dodajArtikle(a8);
g.dodajArtikle(a1);
g.dodajArtikle(a2);
g.dodajArtikle(a3);
g.dodajArtikle(a4);
g.dodajArtikle(a5);
g.dodajArtikle(a6);
g.dodajArtikle(a7);
g.dodajArtikle(a8);
g.crtaj(document.body);