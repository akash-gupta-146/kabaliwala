import { Component, Input, AfterContentInit } from "@angular/core";

@Component({
  selector: 'nl-img',
  template: `
    <img *ngIf="src" [src]="src">
    <img *ngIf="!src" src="assets/imgs/default-user-image.png">
  `
})
export class ImageHandler {

  @Input()
  src: any;

  constructor() {
  }

}