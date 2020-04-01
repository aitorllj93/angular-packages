
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-package-list',
  template: `
    <mdc-card class="demo-card" outlined>
      <ng-container *ngFor="let pkg of pkgs">
        <mdc-ripple class="demo-card-article">
          <app-package-header [pkg]="pkg"
            (tagClick)="tagClick.emit({ tag: $event.tag, event: $event.event, pkg: pkg })">
          </app-package-header>
        </mdc-ripple>
        <mdc-list-divider></mdc-list-divider>
      </ng-container>
    </mdc-card>
  `
})

export class PackageListComponent implements OnInit {

  @Input() pkgs: Package[];

  @Output() tagClick = new EventEmitter<{ tag: string, event: MouseEvent, pkg: Package }>();

  constructor() { }

  ngOnInit() { }
}
