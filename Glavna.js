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
        navigacija.innerHTML="Navijacija";
        this.conteiner.appendChild(navigacija);

        const glavniDeo=document.createElement("div");
        glavniDeo.className="GlavniDeo";
        glavniDeo.innerHTML="GlavniDeo";
        this.conteiner.appendChild(glavniDeo);

        const korpa=document.createElement("div");
        korpa.className="Korpa";
        korpa.innerHTML="Korpa";
        this.conteiner.appendChild(korpa);
        
        this.footer=document.createElement("div");
        this.footer.className="Footer";
        this.footer.innerHTML="Footer";
        host.appendChild(this.footer);
    }
}