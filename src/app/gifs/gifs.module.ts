import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GifsPageComponent, BusquedaComponent, ResultadosComponent],
  exports: [GifsPageComponent],
})
export class GifsModule {}
