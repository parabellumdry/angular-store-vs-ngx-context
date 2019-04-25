
export class SetSomeProp {
  static readonly type = '[Prop] SetSomeProp';

  constructor(public payload: string) {}
}


export class SetSomeOtherProp {
  static readonly type = '[Prop] SetSomeOtherProp';

  constructor(public payload: string) {}
}
