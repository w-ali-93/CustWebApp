import { NgModule } from '@angular/core';
import { CustomerService } from './services/custservice.service'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchCustomerComponent } from './components/fetchcustomer/fetchcustomer.component'
import { createcustomer } from './components/addcustomer/AddCustomer.component'

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        FetchCustomerComponent,
        createcustomer,
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'fetch-customer', component: FetchCustomerComponent },
            { path: 'register-customer', component: createcustomer },
            { path: 'customer/edit/:id', component: createcustomer },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [CustomerService]
})
export class AppModuleShared {
}  