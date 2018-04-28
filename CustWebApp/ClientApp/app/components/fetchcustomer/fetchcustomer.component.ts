import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/custservice.service'

@Component({
    templateUrl: './fetchcustomer.component.html'
})

export class FetchCustomerComponent {
    public custList: CustomerData[];

    constructor(public http: Http, private _router: Router, private _customerService: CustomerService) {
        this.getCustomers();
    }

    getCustomers() {
        this._customerService.getCustomers().subscribe(
            data => this.custList = data
        )
    }

    delete(customerID) {
        var ans = confirm("Do you want to delete customer with id: " + customerID);
        if (ans) {
            this._customerService.deleteCustomer(customerID).subscribe((data) => {
                this.getCustomers();
            }, error => console.error(error))
        }
    }
}

interface CustomerData {
    id: number;
    firstname: string;
    lastname: string;
}  