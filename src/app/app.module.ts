import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TableElementComponent } from './table-element/table-element.component'
import {HttpClientModule} from '@angular/common/http'
import {DropdownDirective} from './directives/dropdown.directive'

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TableElementComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
