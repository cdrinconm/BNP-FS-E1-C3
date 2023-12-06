import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { NuevoServicioService } from '../domain/nuevoservicio.service'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'Componente1',
  templateUrl: './componente1.component.html'
})
export class Componente1Component implements OnInit {
  constructor(public nuevoservicio:NuevoServicioService, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    this.nuevoservicio.incluir("Hola Componente1");
    this.nuevoservicio.incluir("Hola2 Componente1");
    this.nuevoservicio.incluir("Hola3 Componente1");
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  onItemTap(s): void {
    console.dir(s);
    this.routerExtensions.navigate(['/componente2'], {
      transition: {
        name: 'fade',
      },
    })
  }
}
