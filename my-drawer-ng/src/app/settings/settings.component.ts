import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import * as app from "tns-core-modules/application";
import * as dialogs from "tns-core-modules/ui/dialogs";
import * as Toast from "nativescript-toasts";

@Component({
  selector: 'Settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  doLater(fn) { setTimeout(fn, 1000); }

    ngOnInit(): void {/*
        this.doLater(() =>
            dialogs.action("Iniciar sesión?", "Cancelar!", ["Si", "No"])
                .then((result) => {
                    console.log("resultado: " + result);
                    if (result === "Si") {
                        this.doLater(() =>
                            dialogs.alert({
                                title: "Aviso ",
                                message: "Has aceptado.",
                                okButtonText: "ok"
                            }).then(() => console.log("Cerrado 1!")));
                    } else if (result === "No") {
                        this.doLater(() =>
                            dialogs
                                .alert({
                                    title: "Atención ",
                                    message: "Has cancelado.",
                                    okButtonText: "ok"
                                })
                                .then(() => console.log("Cerrado 2!"))
                        );
                    }
                }));
    
        const toastOptions: Toast.ToastOptions = { text: "Hi there!", duration: 3000 };
        this.doLater(() => Toast.show(toastOptions));*/
    

    }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }
}
