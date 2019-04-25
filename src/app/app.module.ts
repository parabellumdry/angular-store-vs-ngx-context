import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxContextModule } from 'ngx-context'
import { ContextComponent } from './context.component';
import { StoreComponent } from './store.component';

import { NgxsModule } from '@ngxs/store'
import { PropState } from './store/states/prop.state';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxContextModule,
    NgxsModule.forRoot([PropState])],
  declarations: [AppComponent, ContextComponent, StoreComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
