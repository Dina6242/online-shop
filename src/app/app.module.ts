import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductListingComponent } from './features/product/product-listing/product-listing.component';
import { ProductItemComponent } from './features/product/product-item/product-item.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { ShopingListComponent } from './features/shoping-list/shoping-list.component';
import { ProductService } from './features/product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProductListingComponent,
    ProductItemComponent,
    DropdownComponent,
    ShopingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
