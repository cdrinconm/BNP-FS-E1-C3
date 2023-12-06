import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { NoticiasService } from '../domain/noticias.service'
import { PullToRefresh } from "nativescript-pulltorefresh";

@Component({
  selector: 'Componente2',
  templateUrl: './componente2.component.html'
})
export class Componente2Component implements OnInit {
  resultados: Array<String> = [];
  
  constructor(public noticias:NoticiasService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.noticias.agregar("Hola Componente2");
    this.resultados.push("Hola Componente2");
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
/*
  onPull(e) {
    console.log(e);
    let contador = this.resultados.length + 1;
    let saludos = "Hola " + contador;

    const pullRefresh = e.object;
    setTimeout(() => {
        this.resultados.push(saludos);
        pullRefresh.refreshing = false;
    }),
        2000;
  }*/

  onPull(e) {
    console.log(e);
    const pullRefresh = e.object;
    setTimeout(() => {
    this.resultados.push("xxxxxxx");
    pullRefresh.refreshing = false;
    }, 2000);
   } 
   
}
