import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyBankAppComponent } from './MyBankApp/bank.component';
import { MyLoginAppComponent } from './MyLoginForm/login.component';
import { ngIFComponent } from './TestIF/testngIf.component';
import { productComponent } from './ProductCRUD/procrud.component';
import { EmployeeCRUDComponent } from './employee-crud/employee-crud.component';
import { AngularAssignmentsComponent } from './angular-assignments/angular-assignments.component';
import { ProductSearchComponent } from './product-search/product-search.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { EmpCRUDSearchFilterComponent } from './emp-crud-search-filter/emp-crud-search-filter.component';
import { FilterPipe } from './emp-crud-search-filter/myfilter.component';
import { FilterNamePipe } from './product-search/myNamefilter.pipe';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { discountFilterPipe} from './product-search/discountFilter.pipe';
import { DatabindingComponent } from './databinding/databinding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddparentComponent } from './OutputDecorator/addparent/addparent.component';
import { AddchildComponent } from './OutputDecorator/addchild/addchild.component';
import { MsgComponent } from './databinding/msg.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { CustomerListComponent } from './InputOutputCustomer/customer-list.component';
import { CustomerDetailsComponent } from './InputOutputCustomer/customer-details.component';
import { ProductListComponent } from './InputOutputProduct/product-list.component';
import { ProductDetailsComponent } from './InputOutputProduct/product-details/product-details.component';
import { ValidFormComponent } from './FormsDemo/valid-form/valid-form.component';
import { ContactComponent } from './FormsDemo/contact/contact.component';
import { CheckboxdemoComponent } from './FormsDemo/checkboxdemo/checkboxdemo.component';
import { ModelContactComponent } from './FormsDemo/model-contact/model-contact.component';
import { PersonComponent } from './FormsDemo/person/person.component';
import { CustomvalidComponent } from './FormsDemo/CustomValidator/customvalid/customvalid.component';
import { ModelFormComponent } from './ModelDrivenDemo/model-form/model-form.component';
import { TemplateFormComponent } from './TemplateDrivenDemo/template-form/template-form.component';
import { HelloMessageComponent } from './HelloServiceDemo/hello-message/hello-message.component';
import { ProductComComponent } from './ProductServiceDemo/product-com/product-com.component';
import { FirstObservableComponent } from './ObservableDemo/first-observable/first-observable.component';
import { SecondObservableComponent } from './ObservableDemo/second-observable/second-observable.component';
import { HttpClientDemoComponent } from './ObservableDemo/http-client-demo/http-client-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    MyCalculatorComponent,
    MyBankAppComponent,
    MyLoginAppComponent,
    ngIFComponent,
    productComponent,
    EmployeeCRUDComponent,
    AngularAssignmentsComponent,
    ProductSearchComponent,
    NgSwitchComponent,
    EmpCRUDSearchFilterComponent,
    FilterPipe,
    FilterNamePipe,
    ExponentialStrengthPipe,
    discountFilterPipe,
    DatabindingComponent,
    AddparentComponent,
    AddchildComponent,
    MsgComponent,
    TestPipeComponent,
    AttributeDemoComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ValidFormComponent,
    ContactComponent,
    CheckboxdemoComponent,
    ModelContactComponent,
    PersonComponent,
    CustomvalidComponent,
    ModelFormComponent,
    TemplateFormComponent,
    HelloMessageComponent,
    ProductComComponent,
    FirstObservableComponent,
    SecondObservableComponent,
    HttpClientDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
   bootstrap: [AppComponent]
//bootstrap: [EmployeeCRUDComponent]
})
export class AppModule { }
