import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HelloWorldComponent],
  imports: [
    CommonModule,
    
  ],
  exports: [
    HelloWorldComponent
  ]
})
export class ComponentsModule { }
