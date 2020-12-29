import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductListingComponent } from './features/product/product-listing/product-listing.component';
import { ProductItemComponent } from './features/product/product-item/product-item.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ShopingListComponent } from './features/shoping-list/shoping-list.component';
import { ProductService } from './features/product/product.service';
import { TestComponent } from './test/test.component';
import { ProductAddComponent } from './features/product/product-add/product-add.component';
import { ErrorPageComponent } from './core/core/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProductListingComponent,
    ProductItemComponent,
    DropdownComponent,
    ShopingListComponent,
    TestComponent,
    ProductAddComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'product-listing', pathMatch: 'full'},
      {path: 'product-listing', component: ProductListingComponent},
      {path: 'product-add', component: ProductAddComponent},
      {path: 'product-edit/:id', component: ProductAddComponent},
      {path: '**', component: ErrorPageComponent},
    ], { scrollPositionRestoration: 'top'}),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
