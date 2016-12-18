import { customElement, children } from 'aurelia-framework';
import { BusyIndicator } from './busyindicator';
import { inject } from 'aurelia-framework';

@inject ( BusyIndicator )
export class App {
  
  heading = "Building Busy Indicator";
      
   constructor(public stack: BusyIndicator){
         console.log('Проверка!');
      }

}

