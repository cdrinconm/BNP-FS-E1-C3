import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { NoticiasService } from '../domain/noticias.service'
import { registerElement } from '@nativescript/angular';
import { PullToRefresh } from '@nativescript-community/ui-pulltorefresh';
registerElement('PullToRefresh', () => PullToRefresh);

@Component({
  selector: 'Componente2',
  templateUrl: './componente2.component.html'
})
export class Componente2Component implements OnInit {
  resultados: Array<any> = [];
  
  constructor(public noticias:NoticiasService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.resultados.push({Usuario: "Pablo", Fecha: "21/07/1979", Texto: "Gracias."});
    this.resultados.push({Usuario: "Pablo2", Fecha: "22/07/1979", Texto: "Gracias2."});
    this.resultados.push({Usuario: "Pablo3", Fecha: "23/07/1979", Texto: "Gracias3."});
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onPull(e) {
    const pullRefresh = e.object;
    setTimeout(() => {
      this.resultados.push({Usuario: "Pablo"+this.resultados.length, Fecha: "23/07/1979", Texto: "Gracias"+this.resultados.length});
      pullRefresh.refreshing = false;
    }, 2000);
   } 
   
}
