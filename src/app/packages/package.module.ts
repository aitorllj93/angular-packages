
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UIModule } from '../ui/ui.module';
import { PackageHeaderComponent } from './package-header.component';
import { PackageListComponent } from './package-list.component';
import { PackageListContainerComponent } from './package-list.container';
import { PackageDetailContainerComponent } from './package-detail.container';
import { NpmDetailComponent } from './npm-detail.component';

@NgModule({
  imports: [
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: PackageListContainerComponent
      },
      {
        path: ':name',
        component: PackageDetailContainerComponent
      }
    ])
  ],
  exports: [
    RouterModule,
  ],
  declarations: [
    PackageHeaderComponent,
    PackageListComponent,
    PackageListContainerComponent,
    PackageDetailContainerComponent,
    NpmDetailComponent,
  ],
  providers: [],
})
export class PackageModule { }
