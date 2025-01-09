import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.page.html',
  styleUrls: ['./new-job.page.scss'],
})
export class NewJobPage implements OnInit {

  iconNameCus: string = 'chevron-down-outline'; // ไอคอนเริ่มต้น
  iconNameTran: string = 'chevron-down-outline';
  iconNamePrice: string = 'chevron-down-outline';
  iconNameMisc: string = 'chevron-down-outline';
  iconNameItem: string = 'chevron-down-outline';
  iconvisibleKyc: string = 'chevron-down-outline';
  iconvisibleStart: string = 'chevron-down-outline';


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

  customOptions = {
    header: 'Select an Option',
    icon: 'star', // เปลี่ยนไอคอนเป็น 'star'
  };

  toggleRowCus() {
    this.iconNameCus = this.iconNameCus === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleCus = !this.isRowvisibleCus;
  }

  toggleRowTran() {
    this.iconNameTran = this.iconNameTran === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleTran = !this.isRowvisibleTran;
  }

  toggleRowPricing() {
    this.iconNamePrice = this.iconNamePrice === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisiblePricing = !this.isRowvisiblePricing;
  }

  toggleRowItem() {
    this.iconNameItem = this.iconNameItem === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleItem = !this.isRowvisibleItem;
  }

  toggleRowMisc() {
    this.iconNameCus = this.iconNameCus === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleMisc = !this.isRowvisibleMisc;
  }

  toggleRowKyc() {
    this.iconNameCus = this.iconNameCus === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleKyc = !this.isRowvisibleKyc;
  }

  toggleRowStart() {
    this.iconNameCus = this.iconNameCus === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleStart = !this.isRowvisibleStart;
  }
  
}
