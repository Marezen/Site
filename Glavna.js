export class Glavna{
    constructor(){
        this.conteiner=null;
        this.footer=null;
        this.DesniDeo=null;
    }
    //glavni deo
    crtaj(host){

        //dodatan jedan deo,iznad, da ima 2 DIV elementa
        //u prvom je slika,kao LOGO,a desno naslov ili tako nesto
        const gornjiDeo = document.createElement("div");
        gornjiDeo.className = "GornjiDeo";
        host.appendChild(gornjiDeo);
        //u njemu ova 2
        const Logo = document.createElement("div");
        Logo.className="Logo";
        
        gornjiDeo.appendChild(Logo);

        //slideshow
        this.DesniDeo = document.createElement("div");
        this.DesniDeo.className="DesniDeo";
        gornjiDeo.appendChild(this.DesniDeo);


        //basic deo:
        const navigacija=document.createElement("div");
        host.appendChild(navigacija);

        const panel=document.createElement("div");
        panel.className="Panel";
        host.appendChild(panel);

        this.crtajGlavniDeo(panel);
        this.crtajNavigaciju(navigacija);
        this.SlideShow(this.DesniDeo);
        
        this.footer=document.createElement("div");
        this.footer.className="Footer";
        this.footer.innerHTML="Footer";
        host.appendChild(this.footer);
    }

    //Slideshow funkcija
    SlideShow(host){
        var s1=document.createElement("img");
        s1.className="slike";
        s1.src="slika1.jpg";
        host.appendChild(s1);

        
        var i=-1;
       

        var s=this.DesniDeo.querySelector(".slike");
        var images=['slika1.jpg','slika2.jpg','slika3.jpg','slika4.jpg'];
        function menjaj(){
            i++;
            if(i>(images.length-1))
            {
                i=0;
            }
            s.setAttribute('src',images[i]);
        }
        function start()
        {
            setInterval(menjaj,3000);
        }
        start();
        
    }

    //navigacija  / LINKOVI
    crtajNavigaciju(host)
    {
        var List = document.createElement("ul");
        List.className= "sidenav";
        host.appendChild(List);

        var li1 = document.createElement("li");
        List.appendChild(li1);
        //pocetna
        var a1 = document.createElement('a');
        var link1 = document.createTextNode("Pocetna");
        a1.appendChild(link1);
        a1.className="Linkovi";
        a1.title= "Pocetna";
        a1.href =""; 
        li1.appendChild(a1);

        var li2 = document.createElement("li");
        List.appendChild(li2);
        //instagram
        var a2 = document.createElement('a');
        var link2 = document.createTextNode("Instagram");
        a2.appendChild(link2);
        a2.className="Linkovi";
        a2.title= "Facebook";
        a2.href ="https://www.instagram.com/makinislatkisi/"; 
        li2.appendChild(a2);

        var li3 = document.createElement("li");
        List.appendChild(li3);
        //Facebook
        var a3 = document.createElement('a');
        var link3 = document.createTextNode("Facebook");
        a3.appendChild(link3);
        a3.className="Linkovi";
        a3.title= "Facebook";
        a3.href ="https://www.facebook.com/makinislatkisi"; 
        li3.appendChild(a3);

        var li4 = document.createElement("li");
        List.appendChild(li4);
        //Kontakt
        var a4 = document.createElement('a');
        var link4 = document.createTextNode("Kontakt");
        a4.appendChild(link4);
        a4.className="Linkovi";
        a4.title= "Kontakt";
        a4.href =""; 
        li4.appendChild(a4);

        var li5 = document.createElement("li");
        List.appendChild(li5);
        //About
        var a5 = document.createElement('a');
        var link5 = document.createTextNode("About");
        a5.appendChild(link5);
        a5.style = "Poslednja";
        a5.title= "About";
        a5.href =""; 
        li5.appendChild(a5);

        var li6 = document.createElement("li");
        List.appendChild(li6);
        //Help
        var a6 = document.createElement('a');
        var link6 = document.createTextNode("Help");
        a6.appendChild(link6);
        a6.className="Linkovi";
        a6.title= "Help";
        a6.href =""; 
        li6.appendChild(a6);
    }

    //deo u kome ce 90% stvari da se desavaju
    crtajGlavniDeo(host)
    {
        //3 dela
        var navigacija2 = document.createElement("div");
        navigacija2.className="Navigacija2";
        host.appendChild(navigacija2); // levo 25%


        var ul1 = document.createElement("ul");
        ul1.className ="LevaNavigacija";
        navigacija2.appendChild(ul1);

        //prvi
        var li_1 = document.createElement("li");
        li_1.className="navigacija2_li";
        ul1.appendChild(li_1);
        var a_1 = document.createElement('a');
        var Pregled_Kolaca = document.createTextNode("Pregled svih kolaca");
        a_1.appendChild(Pregled_Kolaca);
        a_1.className="LinkLevo";
        a_1.title= "Prikazi sve kolace";
        a_1.onclick = function() {}
        li_1.appendChild(a_1);

        //drugi
        var li_2 = document.createElement("li");
        li_2.className="navigacija2_li";
        ul1.appendChild(li_2);
        var a_2 = document.createElement('a');
        var Pregled_Kolaca = document.createTextNode("TEMA");
        a_2.appendChild(Pregled_Kolaca);
        a_2.className="LinkLevo";
        a_2.title= "Odaberite temu";
        a_2.onclick = function() {}
        li_1.appendChild(a_2);

        //treci
        var li_3 = document.createElement("li");
        li_3.className="navigacija2_li";
        ul1.appendChild(li_3);
        var a_3 = document.createElement('a');
        var Pregled_Kolaca = document.createTextNode("Narucivanje");
        a_3.appendChild(Pregled_Kolaca);
        a_3.className="LinkLevo";
        a_3.title= "kliknite da biste izabrali kolaz za narucivanje";

        a_3.onclick = function() {}
        li_1.appendChild(a_3);

        //desni deo sa slikama
        const RadniDeo = document.createElement("div");
        RadniDeo.className="RadniDeo"; // to je srednji deo taj
        RadniDeo.innerHTML = "Radni deo";
        host.appendChild(RadniDeo); // desno 75%

        //desno listBox kao ,koji bi sadrzao sve stvari koje su selektovane
        //const Korpa = document.createElement("div");
    }
}