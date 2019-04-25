import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { Select } from '@ngxs/store';
import { PropState } from './store/states/prop.state';

@Component({
  selector: 'app-store',
  template: `<h1>{{someProp$ | async}} | {{someOtherProp$ | async}}</h1>`
})
export class StoreComponent  {
  @Select(PropState.getSomeProp)
  someProp$: Observable<string>

  @Select(PropState.getSomeOtherProp)
  someOtherProp$: Observable<string>
}
