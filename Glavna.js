export class Glavna{
    constructor(){
        this.conteiner=null;
    }
    crtaj(host){
        this.conteiner=document.createElement("div");
        this.conteiner.className="Glavni-div";
        host.appendChild(this.conteiner);

        const panel=document.createElement("div");
        panel.className="Panel";
        panel.innerHTML="PANEL"
        this.conteiner.appendChild(panel);

        const navigacija=document.createElement("div");
        navigacija.className="navigacija";
        navigacija.innerHTML="Navijacija";
        this.conteiner.appendChild(navigacija);
    }
}