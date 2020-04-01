
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Package } from './package.model';
import { PackageService } from './package.service';
import { tap, switchMap } from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-package-list-container',
  template: `
    <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '3px' }"></ngx-loading>
    <div class="home-container">

      <div fxLayout="row"
            fxLayout.xs="column"
            fxFlexFill >

        <div fxFlex="40" style="padding: 0 10px 0 0;">
        <mdc-text-field label="Text" fullwidth
          [(ngModel)]="filterText"
          (ngModelChange)="onFilterChange()"></mdc-text-field>
        </div>
        <div fxFlex="20" style="padding: 0 0 0">
          <ng-select
            [items]="categories$ | async"
            [multiple]="true"
            [closeOnSelect]="false"
            [searchable]="true"
            placeholder="Select categories"
            [(ngModel)]="filterCategories"
            (ngModelChange)="onFilterChange()">
            <ng-template ng-multi-label-tmp let-items="items" let-clear="clear">
              <div class="ng-value" *ngFor="let item of items | slice:0:2">
                <span class="ng-value-label">{{item}}</span>
                <span class="ng-value-icon right" (click)="clear(item)" aria-hidden="true">×</span>
              </div>
              <div class="ng-value" *ngIf="items.length > 2">
                <span class="ng-value-label">{{items.length - 2}} more...</span>
              </div>
            </ng-template>
          </ng-select>
        </div>
        <div fxFlex="40" style="padding: 0 0 0 10px;">
          <ng-select
            [items]="tags$ | async"
            [multiple]="true"
            [closeOnSelect]="false"
            [searchable]="true"
            placeholder="Select tags"
            [(ngModel)]="filterTags"
            (ngModelChange)="onFilterChange()">
            <ng-template ng-multi-label-tmp let-items="items" let-clear="clear">
              <div class="ng-value" *ngFor="let item of items | slice:0:2">
                <span class="ng-value-label">{{item}}</span>
                <span class="ng-value-icon right" (click)="clear(item)" aria-hidden="true">×</span>
              </div>
              <div class="ng-value" *ngIf="items.length > 2">
                <span class="ng-value-label">{{items.length - 2}} more...</span>
              </div>
            </ng-template>
          </ng-select>
        </div>

      </div>

      <a href="https://github.com/d3v0ps/angular-packages/issues" target="blank" style="text-decoration: none; color: #69511e !important;">
        <mdc-card class="demo-card" style="margin-bottom: 20px; background: #EAB543;" outlined>
          <mdc-ripple class="demo-card-article">
            Send me more packages
          </mdc-ripple>
        </mdc-card>
      </a>

      <ng-container *ngIf="filteredPkgs$ | async as pkgs">
        <h5>{{ pkgs.length }} packages</h5>
        <app-package-list [pkgs]="pkgs"
          (tagClick)="onTagClick($event)">
        </app-package-list>
      </ng-container>
    </div>
  `
})

export class PackageListContainerComponent implements OnInit {

  loading = false;

  pkgs$ = new BehaviorSubject<Package[]>([]);
  tags$ = new BehaviorSubject<string[]>([]);
  filteredPkgs$ = new BehaviorSubject<Package[]>([]);
  categories$ = new BehaviorSubject<string[]>([
    'Component',
    'Service Provider',
    'Tool',
    'UI Kit'
  ]);

  filterText = '';
  filterTags = [];
  filterCategories = [];

  constructor(
    private service: PackageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loading = true;
    this.service.fetchAll()
    .pipe(
      tap(result => this.pkgs$.next(result)),
      switchMap(() => this.service.fetchTags()),
      tap(tags => {
        this.tags$.next(tags);
        this.onFilterChange();
      })
    )
    .subscribe(() => this.loading = false);
  }

  onTagClick({ tag }) {
    this.filterTags = this.filterTags.includes(tag) ?
      _.remove(this.filterTags, filterTag => filterTag !== tag) :
      this.filterTags.concat(tag);

    this.onFilterChange();
  }

  onFilterChange() {
    this.filteredPkgs$.next(_.sortBy(this.pkgs$.value, ['category', 'npm']).filter(
      pkg => {
        const matchesTags = this.filterTags.length <= 0 || pkg.tags.some(
          tag => this.filterTags.includes(tag)
        );

        const matchesCategories = this.filterCategories.length <= 0 || this.filterCategories.includes(pkg.category);

        const matchesText = pkg.npm.toLowerCase().includes(this.filterText.toLowerCase()) ||
          pkg.description.toLowerCase().includes(this.filterText.toLowerCase());

        return matchesTags && matchesCategories && matchesText;
      }
    ));
  }
}
