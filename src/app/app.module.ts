import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIModule } from './ui/ui.module';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgxLoadingModule } from 'ngx-loading';
import { TooltipModule } from '@teamhive/ngx-tooltip';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    UIModule,
    TooltipModule.forRoot({}),
    NgxLoadingModule.forRoot({}),
    MarkdownModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
