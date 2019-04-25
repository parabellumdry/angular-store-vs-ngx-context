import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContextComponent } from './context.component'
import { StoreComponent } from './store.component'

export const routes: Routes = [
  {
    path: 'context',
    component: ContextComponent,
  },
  {
    path: 'store',
    component: StoreComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
