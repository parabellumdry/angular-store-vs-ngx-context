import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-context',
  template: `
  <context-consumer></context-consumer>
  <h1>{{ someProp }} | {{ someOtherProp }}</h1>
  `
})
export class ContextComponent  {
}
