
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-npm-detail',
  template: `
    <a [href]="info?.collected.metadata.links.npm" target="_blank" style="text-decoration: none; color: black;">
    <mdc-card class="demo-card" style="margin-bottom: 20px; border: 1px solid #EA2039" outlined>
      <mdc-ripple class="demo-card-article">
        <span class="demo-card-article__title" mdcHeadline5 style="color: #EA2039">
          <mdc-icon fontSet="mdi" fontIcon="mdi-npm" style="font-size: 40px; vertical-align: middle;"></mdc-icon>
        </span>
        <span style="margin: 0;"><strong>License: {{ info?.collected.metadata.license }}</strong></span>

        <div fxLayout="row"
              fxLayout.xs="column"
              fxFlexFill
              style="text-align: center">
          <div fxFlex="33">
            <h4 style="margin: 2px 0;"><mdc-icon fontSet="mdi" fontIcon="mdi-star"></mdc-icon> {{ info?.collected.github?.starsCount || 0 }} starts</h4>
          </div>
          <div fxFlex="33">
            <h4 style="margin: 2px 0;"><mdc-icon fontSet="mdi" fontIcon="mdi-package-variant"></mdc-icon> {{ dependenciesNumber }} dependencies</h4>
          </div>
          <div fxFlex="33">
            <h4 style="margin: 2px 0;"><mdc-icon fontSet="mdi" fontIcon="mdi-package-variant-closed"></mdc-icon> {{ info?.collected.npm.dependentsCount }} dependents</h4>
          </div>
        </div>

        <mdc-chip-set>
          <mdc-chip style="background: #EA2039; color: white;" *ngFor="let tag of info?.collected.metadata.keywords" >
            <mdc-chip-text>{{ tag }}</mdc-chip-text>
          </mdc-chip>
        </mdc-chip-set>
      </mdc-ripple>
    </mdc-card>
    </a>
  `
})

export class NpmDetailComponent implements OnInit {

  get dependenciesNumber() {
    return this.info && this.info.collected.metadata.dependencies ? Object.keys(this.info.collected.metadata.dependencies).length : 0;
  }

  @Input() info: any = null;

  constructor() { }

  ngOnInit() { }
}
