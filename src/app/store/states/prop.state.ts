import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Prop } from '../models/prop';
import { SetSomeOtherProp, SetSomeProp } from '../actions/prop.actions';

@State<Prop.State>({
  name: 'PropState',
  defaults: {
    someProp: 'Some Prop',
    someOtherProp: 'Some Other Prop'
  },
})
export class PropState {
  @Selector()
  static getSomeProp({ someProp }: Prop.State): string {
    return someProp;
  }

  @Selector()
  static getSomeOtherProp({ someOtherProp }: Prop.State): string {
    return someOtherProp;
  }

  @Action(SetSomeProp)
  setSomeProp({ patchState }: StateContext<Prop.State>, { payload }: SetSomeProp) {
    patchState({ someProp: payload });
  }


  @Action(SetSomeOtherProp)
  setOtherSomeProp({ patchState }: StateContext<Prop.State>, { payload }: SetSomeOtherProp) {
    patchState({ someOtherProp: payload });
  }

}
