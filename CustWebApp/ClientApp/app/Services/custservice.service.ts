import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class CustomerService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl;
    }

    getCustomers() {
        return this._http.get(this.myAppUrl + 'api/Customer/Index')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCustomerById(id: number) {
        return this._http.get(this.myAppUrl + "api/Customer/Details/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    addCustomer(customer) {
        return this._http.post(this.myAppUrl + 'api/Customer/Create', customer)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    updateCustomer(customer) {
        return this._http.put(this.myAppUrl + 'api/Customer/Edit', customer)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deleteCustomer(id) {
        return this._http.delete(this.myAppUrl + "api/Customer/Delete/" + id)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}