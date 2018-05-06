import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageHandler } from './image';

@NgModule({
  declarations: [ImageHandler],
  imports: [
    IonicPageModule.forChild(ImageHandler)
  ],
  exports: [ImageHandler]
})
export class ImageHandlerModule {}
