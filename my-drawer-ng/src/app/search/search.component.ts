import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application, Color, View } from '@nativescript/core'
import { NoticiasService } from '../domain/noticias.service'

@Component({
  selector: 'Search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  resultados: Array<String> = [];

   @ViewChild("layout") layout: ElementRef;

    constructor(
        private noticias: NoticiasService/*,
        private store: Store<AppState>*/
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
      /*
        this.store
            .select(state => state.noticias.sugerida)
            .subscribe(data => {
                const f = data;
                if (f != null) {
                    Toast.show({
                        text: "Sugerimos leer: " + f.titulo,
                        duration: Toast.DURATION.SHORT
                    });
                }
            });*/
    }

    onDrawerButtonTap(): void {/*
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();*/
    }

    onDetalle(item): void {
        alert("Mostrar los detalles del elemento " + item);
    }

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
    }

  onItemTap(s): void {/*
    this.store.dispatch(
        new NuevaNoticiaAction(new Noticia(s.view.bindingContext))
    );*/
    console.dir(s)
  }

  onLongPress(s): void {
      console.log(s);
      //SocialShare.shareText(s, "Asunto: compartido desde el curso");
  }

  buscarAhora(s: string) {
    console.dir("buscarAhora() " + s);
    this.noticias.buscar(s).then(
        (r: any) => {
            console.log("resultados buscarAhora() " + JSON.stringify(r));
            this.resultados = r;
        },
        e => {
            console.log("Error buscarAhora() " + e);/*
            Toast.show({
                text: "Error en la busqueda",
                duration: Toast.DURATION.SHORT
            });*/
        }
    );
    /*
    this.resultados = this.noticias
        .buscar()
        .filter((x) => x.indexOf(s) >= 0);

    const layout = <View>this.layout.nativeElement;
    layout
        .animate({
            backgroundColor: new Color("blue"),
            duration: 300,
            delay: 150
        })
        .then(() =>
            layout.animate({
                backgroundColor: new Color("white"),
                duration: 300,
                delay: 150
            })
        );*/
}
}

