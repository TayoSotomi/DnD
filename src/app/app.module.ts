import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonutsComponent } from './Component/donuts/donuts.component';
import { DonutDetailsComponent } from './Component/donut-details/donut-details.component';
import { FamousPersonDetailComponent } from './Component/famous-person-detail/famous-person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutsComponent,
    DonutDetailsComponent,
    FamousPersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
