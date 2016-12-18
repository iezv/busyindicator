import { inject, customElement, children, child } from 'aurelia-framework';

@customElement('busy-indicator')
@inject(Element)
export class BusyIndicator {
  isBusy: boolean;

  constructor(private element: Element) {
    this.element = element;
  }

 
  bind(){
    console.log(this.element);
    var busy = this.element.getAttribute('busy');
    console.log(busy);

    if (busy==="true") {
      this.isBusy = true; 
    }
    else this.isBusy = false;
  }

}


