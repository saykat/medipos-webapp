
import {CommonModule} from "@angular/common";
import {CustomMatrialModule} from "../../custom-matrial.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {DataTablesModule} from "angular-datatables";
import {NgModule} from "@angular/core";
import {ReportsRoutingModule} from "./reports-routing.module";
import {SalesReportComponent} from "./sales-report/sales-report.component";
import {PurchaseReportComponent} from "./purchase-report/purchase-report.component";
import {SalesService} from "../../services/sales.service";
import {PurchaseService} from "../../services/purchase.service";
import {NgxPaginationModule} from 'ngx-pagination';
import {NgDatepickerModule} from 'ng2-datepicker';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    CustomMatrialModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    NgxPaginationModule,
    NgDatepickerModule
  ],
  declarations: [
    SalesReportComponent,
    PurchaseReportComponent
  ],
  providers: [
    SalesService,
    PurchaseService
  ]
})
export class ReportsModule { }
