import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { Componente1RoutingModule } from '../componente1/componente1-routing.module'
import { Componente1Component } from '../componente1/componente1.component'
import { NoticiasService } from '../domain/noticias.service'

@NgModule({
  imports: [NativeScriptCommonModule, Componente1RoutingModule],
  declarations: [Componente1Component],
  providers: [NoticiasService],
  schemas: [NO_ERRORS_SCHEMA],
})
export class Componente1Module {}
