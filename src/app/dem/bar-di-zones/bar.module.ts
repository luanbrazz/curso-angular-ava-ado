import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarDiZonesComponent } from './bar-di-zones.component';
import { BarUnidadeConfig, BAR_UNIDADE_CONFIG } from './bar.config';

@NgModule({
  declarations: [
    BarDiZonesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BarDiZonesComponent
  ]
})
export class BarDiZonesModule {
  static forRoot(arg0: { unidadeId: number; unidadeToken: string; }): any[] | import("@angular/core").Type<any> | ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
  // static forRoot(config: BarUnidadeConfig) : ModuleWithProviders {
  //   return {
  //     NgModule: BarDiZonesModule,
  //     providers: [
  //       { provide: 'ConfigManualUnidade', useValue: config },
  //       { provide: BAR_UNIDADE_CONFIG, useValue: config }
  //     ]
  //   }
  // }
 }
