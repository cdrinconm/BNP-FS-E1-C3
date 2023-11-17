import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { NoticiasService } from '../domain/noticias.service'

@Component({
  selector: 'Search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  constructor(public noticias:NoticiasService) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.noticias.agregar("Hola");
    this.noticias.agregar("Hola2");
    this.noticias.agregar("Hola3");
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
