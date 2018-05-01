import {environment} from '../environments/environment';
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireAuthModule} from "angularfire2/auth";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {AngularFireModule} from "angularfire2";

import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ShoppingCardComponent} from './shopping-card/shopping-card.component';
import {CheckOutComponent} from './check-out/check-out.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {MyOrdersComponent} from './my-orders/my-orders.component';
import {AdminProductsComponent} from './admin/admin-products/admin-products.component';
import {AdminOrdersComponent} from './admin/admin-orders/admin-orders.component';
import {LoginComponent} from './login/login.component';

import {AuthService} from "./services/auth.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {UserService} from "./services/user.service";
import {AdminAuthGuardService} from "./services/admin-auth-guard.service";
import {ProductFormComponent} from './admin/product-form/product-form.component';
import {CategoryService} from "./services/category.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "./services/product.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CustomFormsModule} from "ng2-validation";

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCardComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    CategoryService,
    ProductService
  ],
  imports: [
    CustomFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'shopping-card', component: ShoppingCardComponent},
      {path: 'login', component: LoginComponent},

      {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path: 'order-Success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
      {path: 'my/order', component: MyOrdersComponent, canActivate: [AuthGuardService]},

      {
        path: 'admin/products/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },
      {
        path: 'admin/products',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService]
      },
      {
        path: 'admin/orders',
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
