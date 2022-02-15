import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsComponent } from './controls.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlsComponent, ImageComponent],
  exports: [ImageComponent],
})
export class ControlsModule {}
