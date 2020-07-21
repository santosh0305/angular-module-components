import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ControlsComponent } from "./controls.component";
import { ImageComponent } from './image/image.component';
import { TextboxComponent } from './textbox/textbox.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ControlsComponent, ImageComponent, TextboxComponent]
})
export class ControlsModule {}
