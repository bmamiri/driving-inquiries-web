import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { CarInquiry } from './carInquiry.model';
// import { Bill } from './bill.model';
// import { BalanceTransfer } from './balanceTransfer.model';
// import { AlertService } from '../services/alert.service';
// import { UserSignin } from './userSignin.model';
// import { PaymanContract } from './payman/paymanContract.model';

const baseUrl ="http://localhost:8080";
const carInquiryUrl = "/driving/fines/20808983/inquiry";
const billsUrl = "/api/bills";
const balanceTransfersUrl = "/api/balanceTransfers";
const automaticBillPaymentUrl = "/api/automatic-bill-payment";

@Injectable()
export class Repository {
    constructor(private http: HttpClient, private router: Router) {
    }

    getCarInquiry() {
        this.http.get(baseUrl + carInquiryUrl ).subscribe(response => this.carInquiry = response);
    }

    carInquiry: CarInquiry;
}
