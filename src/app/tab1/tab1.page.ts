import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private iab: InAppBrowser) {}

  ngOnInit(){
  }

  //Abrir link Catastro en navegador con InAppBrowser
  //Lo abro con boton
  async openUrl() {
    this.iab.create(`https://www1.sedecatastro.gob.es/Cartografia/mapa.aspx`, `_self`,Option);
  }
}
