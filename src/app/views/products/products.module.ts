// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {CustomMatrialModule} from "../../custom-matrial.module";
import {ProductsRoutingModule} from "./products-routing.module";
import {AddProductComponent} from "./add-product/add-product.component";
import {AddMedicineGroup} from "./add-medicine-group/add-medicine-group";
import {AddCompanyComponent} from "./add-company/add-company.component";
import {FormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import {CompanyService} from "../../services/company.service";
import {CdkTableModule} from "@angular/cdk/table";
import {MatTableModule} from "@angular/material";
import {MedicineGroupService} from "../../services/medicine-group.service";
import {ProductService} from "../../services/product.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgxSmartModalModule} from "ngx-smart-modal";
import {NgxBarcodeModule} from "ngx-barcode";
import {NgxPaginationModule} from 'ngx-pagination';

// Components Routing


@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    CustomMatrialModule,
    FormsModule,
    DataTablesModule,
    HttpClientModule,
    NgxSmartModalModule.forRoot(),
    NgxBarcodeModule,
    NgxPaginationModule

  ],
  declarations: [
    AddProductComponent,
    AddMedicineGroup,
    AddCompanyComponent
  ],
  providers: [
    CompanyService,
    MedicineGroupService,
    ProductService
  ]
})
export class ProductsModule { }
