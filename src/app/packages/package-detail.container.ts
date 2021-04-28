
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { switchMap, tap, catchError } from 'rxjs/operators';
import { PackageService } from './package.service';
import { Package } from './package.model';

@Component({
  selector: 'app-package-detail-container',
  template: `
    <div class="home-container">
      <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '3px' }"></ngx-loading>
      <mdc-card class="demo-card" style="margin-bottom: 20px;" outlined>
        <mdc-ripple class="demo-card-article">
          <app-package-header *ngIf="pkg$ | async as pkg" [pkg]="pkg"></app-package-header>
        </mdc-ripple>
      </mdc-card>
      <app-npm-detail *ngIf="npm$ | async as npm" [info]="npm"></app-npm-detail>
      <div class="markdown-body">
        <markdown [data]="readme$ | async" lineNumbers [start]="5"></markdown>
      </div>
    </div>
  `
})

export class PackageDetailContainerComponent implements OnInit {

  loading = false;

  pkg$ = new BehaviorSubject<Package>(null);
  npm$ = new BehaviorSubject<any>(null);
  readme$ = new BehaviorSubject('');

  constructor(
    private service: PackageService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loading = true;
    this.route.params.pipe(

      switchMap(params => this.service.findByNpm(params.name.replace('%2F', '/'))),
      tap(pkg => this.pkg$.next(pkg)),

      switchMap(
        pkg => forkJoin([
          this.service.fetchNpm(pkg).pipe(
            catchError(() => of(null)),
            tap(npm => this.npm$.next(npm))
          ),
          this.service.fetchReadme(pkg).pipe(tap(readme => this.readme$.next(readme)))
        ])
      ),

    ).subscribe(() => this.loading = false);
  }
}
