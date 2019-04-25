import { Component } from '@angular/core';
import { interval } from 'rxjs'

// Store imports
import { Store } from '@ngxs/store';
import { SetSomeProp, SetSomeOtherProp } from './store/actions/prop.actions'

@Component({
  selector: 'my-app',
  template: `
    <a routerLink="/">Go to home</a> | 
    <a routerLink="/context">Go to context component</a> |
    <a routerLink="/store">Go to store component</a> |

      <br> 
      <br>

    router-outlet is below
    <context-provider provide="someProp someOtherProp">
      <router-outlet></router-outlet>
    </context-provider>
`
})
export class AppComponent {
  someProp = 'Some Prop';
  someOtherProp = 'Some Other Prop';

  constructor(private store: Store){}

  ngOnInit() {
    interval(1500).subscribe(index => {
      this.setContext(index)
      this.setStore(index)
    })
  }

  setContext(index: number) {
      this.someProp = `Some Prop ${index}`;
      this.someOtherProp = `Some Other Prop ${index}`;
  }

  setStore(index: number) {
    this.store.dispatch(new SetSomeProp(`Some Prop ${index}`))
    this.store.dispatch(new SetSomeOtherProp(`Some Other Prop ${index}`))
  }
}
