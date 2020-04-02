import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mdc-top-app-bar fixed [scrollTarget]="fixedContent">
      <mdc-top-app-bar-row>
        <mdc-top-app-bar-section style="cursor: pointer;" align="start" [routerLink]="['']">
          <mdc-icon fontSet="mdi" fontIcon="mdi-angular" style="font-size: 40px; color: white;">
          </mdc-icon>
          <span class="mdc-top-app-bar__title">
            Angular Packages
          </span>
        </mdc-top-app-bar-section>
          <mdc-top-app-bar-section align="end">
            <a href="https://github.com/d3v0ps/angular-packages">
              <mdc-icon fontSet="mdi" fontIcon="mdi-github" style="font-size: 40px; color: white;">
              </mdc-icon>
            </a>
          </mdc-top-app-bar-section>
      </mdc-top-app-bar-row>
    </mdc-top-app-bar>
    <div class="app-bar-content" #fixedContent>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {}
