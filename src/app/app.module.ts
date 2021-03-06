import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {FormsModule} from '@angular/forms';
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import {AuthGuard} from "./guards/auth.guard";
import {SimpleNotificationsModule} from "angular2-notifications";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ANIMATION_TYPES, LoadingModule} from 'ngx-loading';
import {DataTablesModule} from "angular-datatables";
import {CartService} from "./services/cart.service";
import {PurchaseCartService} from "./services/purchase.cart.service";
import {StorageService} from './services/storage.service';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {HttpClientService} from './services/httpClient';
import {NgxPaginationModule} from 'ngx-pagination';
import {ModalDialogModule} from 'ngx-modal-dialog';
import {NgxSmartModalModule} from 'ngx-smart-modal';
import {AccountService} from './services/account.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    NoopAnimationsModule,
    DataTablesModule,
    Ng4LoadingSpinnerModule.forRoot(),
    NgxSmartModalModule.forRoot()
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    {
    provide: LocationStrategy,
    useClass: HashLocationStrategy
    },
    CartService,
    PurchaseCartService,
    StorageService,
    HttpClientService,
    AuthService,
    AuthGuard,
    AccountService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
