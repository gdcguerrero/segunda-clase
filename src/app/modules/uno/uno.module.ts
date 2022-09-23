import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnoComponent } from './component/uno/uno.component';

@NgModule({
  declarations: [
    UnoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UnoComponent
  ]
})
export class UnoModule { }
