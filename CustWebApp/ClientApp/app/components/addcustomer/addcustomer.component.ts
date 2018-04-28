import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchCustomerComponent } from '../fetchcustomer/fetchcustomer.component';
import { CustomerService } from '../../services/custservice.service';

@Component({
    templateUrl: './AddCustomer.component.html'
})

export class createcustomer implements OnInit {
    customerForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _customerService: CustomerService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }

        this.customerForm = this._fb.group({
            id: 0,
            firstname: ['', [Validators.required]],
            lastname: ['', [Validators.required]]
        })
    }

    ngOnInit() {

        if (this.id > 0) {
            this.title = "Edit";
            this._customerService.getCustomerById(this.id)
                .subscribe(resp => this.customerForm.setValue(resp)
                , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.customerForm.valid) {           
            return;
        }

        if (this.title == "Create") {
            this._customerService.addCustomer(this.customerForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-customer']);
                }, error => this.errorMessage = error)
        }
        else if (this.title == "Edit") {
            this._customerService.updateCustomer(this.customerForm.value)
                .subscribe((data) => {
                    this._router.navigate(['/fetch-customer']);
                }, error => this.errorMessage = error)
        }
    }

    cancel() {
        this._router.navigate(['/fetch-customer']);
    }

    get firstname() { return this.customerForm.get('firstname'); }
    get lastname() { return this.customerForm.get('lastname'); }
}  
