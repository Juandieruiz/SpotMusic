import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgBroken]'
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('Esta imagen no existe');
    elNative.src = '../../../assets/img/unavailable.png';
  }

  // TODO: HOST = huesped
  constructor(private elHost: ElementRef) {

  } 

}
