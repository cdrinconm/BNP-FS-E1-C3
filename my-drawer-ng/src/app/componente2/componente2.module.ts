import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Componente2RoutingModule } from './componente2-routing.module'
import { Componente2Component } from './componente2.component'
import { NoticiasService } from '../domain/noticias.service'

@NgModule({
  imports: [NativeScriptCommonModule, Componente2RoutingModule],
  declarations: [Componente2Component],
  providers: [NoticiasService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Componente2Module {}
