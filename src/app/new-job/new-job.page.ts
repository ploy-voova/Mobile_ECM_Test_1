import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.page.html',
  styleUrls: ['./new-job.page.scss'],
})
export class NewJobPage implements OnInit {

  isRowvisibleCus: boolean = false;
  isRowvisibleTran: boolean = false;
  isRowvisiblePricing: boolean = false;
  isRowvisibleMisc: boolean = false;
  isRowvisibleItem: boolean = false;
  isRowvisibleKyc: boolean = false;
  isRowvisibleStart: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleRowCus() {
    this.isRowvisibleCus = !this.isRowvisibleCus;
  }

  toggleRowTran() {
    this.isRowvisibleTran = !this.isRowvisibleTran;
  }

  toggleRowPricing() {
    this.isRowvisiblePricing = !this.isRowvisiblePricing;
  }

  toggleRowItem() {
    this.isRowvisibleItem = !this.isRowvisibleItem;
  }

  toggleRowMisc() {
    this.isRowvisibleMisc = !this.isRowvisibleMisc;
  }

  toggleRowKyc() {
    this.isRowvisibleKyc = !this.isRowvisibleKyc;
  }

  toggleRowStart() {
    this.isRowvisibleStart = !this.isRowvisibleStart;
  }
  
}
