
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdcRippleModule } from '@angular-mdc/web/ripple';
import { MdcButtonModule } from '@angular-mdc/web/button';
import { MdcIconModule } from '@angular-mdc/web/icon';
import { MdcCardModule } from '@angular-mdc/web/card';
import { MdcListModule } from '@angular-mdc/web/list';
import { MdcTopAppBarModule } from '@angular-mdc/web/top-app-bar';
import { MdcChipsModule } from '@angular-mdc/web/chips';
import { MdcTextFieldModule } from '@angular-mdc/web/textfield';
import { NgxLoadingModule } from 'ngx-loading';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TooltipModule } from '@teamhive/ngx-tooltip';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MdcRippleModule,
    MdcButtonModule,
    MdcIconModule,
    MdcTopAppBarModule,
    MdcCardModule,
    MdcListModule,
    MdcChipsModule,
    MdcTextFieldModule,
    NgxLoadingModule,
    NgSelectModule,
    TooltipModule,
    MarkdownModule
  ]
})
export class UIModule {}
