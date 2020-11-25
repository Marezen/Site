export class Glavna{
    constructor(){
        this.conteiner=null;
        this.footer=null;
    }
    crtaj(host){
        const panel=document.createElement("div");
        panel.className="Panel";
        panel.innerHTML="PANEL"
        host.appendChild(panel);

        this.conteiner=document.createElement("div");
        this.conteiner.className="Glavni-div";
        host.appendChild(this.conteiner);

        const navigacija=document.createElement("div");
        navigacija.className="navigacija";
        this.conteiner.appendChild(navigacija);
        this.crtajNavigaciju(navigacija);

        const glavniDeo=document.createElement("div");
        glavniDeo.className="GlavniDeo";
        glavniDeo.innerHTML="GlavniDeo";
        this.conteiner.appendChild(glavniDeo);

        const korpa=document.createElement("div");
        korpa.className="Korpa";
        korpa.innerHTML="Korpa";
        this.conteiner.appendChild(korpa);ss
        
        this.footer=document.createElement("div");
        this.footer.className="Footer";
        this.footer.innerHTML="Footer";
        host.appendChild(this.footer);
    }
    crtajNavigaciju(host){
        const l1=document.createElement("label");
        l1.innerHTML="Pocetna".link("Index.html");
        host.appendChild(l1);

        const l2=document.createElement("label");
        l2.innerHTML="Kontakt";
        host.appendChild(l2);

        const l3=document.createElement("label");
        l3.innerHTML="About";
        host.appendChild(l3);

        const l4=document.createElement("label");
        l4.innerHTML="Help";
        host.appendChild(l4);
    }
}