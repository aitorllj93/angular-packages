
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-package-header',
  template: `
    <h2 class="demo-card-article__title" mdcHeadline5>
      <i class="circle-icon"
        ngxTooltip [tooltipContent]="pkg.category"
        [ngClass]="{
          'circle-component': pkg.category === 'Component',
          'circle-ui': pkg.category === 'UI Kit',
          'circle-sp': pkg.category === 'Service Provider',
          'circle-tool': pkg.category === 'Tool'
        }"></i>

      <a [routerLink]="[pkgUrl]" style="color: black; text-decoration: none;">
        <span style="padding: 0 0.5em; cursor: pointer;">{{ pkg.npm }}</span>
      </a>
      <a href="https://github.com/{{pkg.owner}}/{{pkg.repo}}" target="_blank"
        ngxTooltip tooltipContent="GitHub">
        <mdc-icon fontSet="mdi" fontIcon="mdi-github" style="cursor:pointer; color: black;"></mdc-icon>
      </a>
      <a href="{{pkg.url}}" target="_blank"
        ngxTooltip tooltipContent="Homepage" >
        <mdc-icon fontSet="mdi" fontIcon="mdi-home" style="cursor:pointer; color: black;"></mdc-icon>
      </a>
    </h2>

    <p class="demo-card-article__snippet" mdcBody2>
      {{ pkg.description }}
    </p>
    <mdc-chip-set>
      <mdc-chip *ngFor="let tag of pkg.tags" (click)="tagClick.emit({ event: $event, tag: tag })">
        <mdc-chip-text>{{ tag }}</mdc-chip-text>
      </mdc-chip>
    </mdc-chip-set>
  `
})

export class PackageHeaderComponent implements OnInit {

  @Output() headerClick = new EventEmitter();
  @Output() githubClick = new EventEmitter();
  @Output() homepageClick = new EventEmitter();
  @Output() tagClick = new EventEmitter();

  @Input() pkg: Package;

  get pkgUrl() {
    return this.pkg.npm.replace('/', '%2F');
  }

  constructor() { }

  ngOnInit() { }
}
