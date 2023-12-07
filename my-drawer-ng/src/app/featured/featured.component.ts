import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, GestureEventData, GridLayout } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular';
import * as app from "tns-core-modules/application";

@Component({
  selector: 'Featured',
  templateUrl: './featured.component.html',
})
export class FeaturedComponent implements OnInit {
  constructor(private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
}

ngOnInit(): void {
    // Init your component properties here.
}

onDrawerButtonTap(): void {/*
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();*/
}

onNavButtom(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
        transition: {
            name: "fade"
        }
    });
}

onLongPress(args: GestureEventData) {
    console.log("Objeto que lanzo el evento: " + args.object);
    console.log("Vista que lanzo el evento: " + args.view);
    console.log("Nombre del evento: " + args.eventName);

    const grid = <GridLayout>args.object;
    grid.rotate = 0;
    grid.animate({
        rotate: 360,
        duration: 2000
    });
}
}

