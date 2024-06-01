import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductosApiComponent } from './components/api-rest/productos-api/productos-api.component';
import { ProductoDetailsApiComponent } from './components/api-rest/producto-details-api/producto-details-api.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:productId', component: ProductDetailsComponent },
    { path: 'products-api', component: ProductosApiComponent },
    { path: 'products-api/:id', component: ProductoDetailsApiComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
    
];
