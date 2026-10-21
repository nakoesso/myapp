import { Component, contentChild, ElementRef, effect } from '@angular/core';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.html'
})
export class PropertyCard {
    image = contentChild<ElementRef<HTMLImageElement>>('imageRef')

    constructor() { 
        effect(() => {
             console.log(this.image()?.nativeElement);
        })
       
    }
} 