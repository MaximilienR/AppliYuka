import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()

export class TitleService {

  @Output()
  adapt:EventEmitter<string>=new EventEmitter();

  constructor() { }

adaptTitle(title:string){
  this.adapt.emit(title)
}
}
