import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.page.html',
  styleUrls: ['./new-job.page.scss'],
})
export class NewJobPage implements OnInit {

  date_c: any;
  time_c: any;
  time: any;

  date_des: any;
  time_des: any;
  time_d: any;

  iconNameCus: string = 'chevron-down-outline'; // ไอคอนเริ่มต้น
  iconNameTran: string = 'chevron-down-outline';
  iconNamePrice: string = 'chevron-down-outline';
  iconNameMisc: string = 'chevron-down-outline';
  iconNameItem: string = 'chevron-down-outline';
  iconNameKyc: string = 'chevron-down-outline';
  iconNameStart: string = 'chevron-down-outline';
  iconNameFilght: string = 'chevron-down-outline';


  isRowvisibleCus: boolean = false;
  isRowvisibleTran: boolean = false;
  isRowvisiblePricing: boolean = false;
  isRowvisibleMisc: boolean = false;
  isRowvisibleItem: boolean = false;
  isRowvisibleKyc: boolean = false;
  isRowvisibleStart: boolean = false;
  isRowvisibleFilght: boolean = false;

  constructor(private popoverController: PopoverController) { }

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
    this.iconNameMisc = this.iconNameMisc === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleMisc = !this.isRowvisibleMisc;
  }

  toggleRowKyc() {
    this.iconNameKyc = this.iconNameKyc === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleKyc = !this.isRowvisibleKyc;
  }

  toggleRowStart() {
    this.iconNameStart = this.iconNameStart === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleStart = !this.isRowvisibleStart;
  }

  toggleRowFilght() {
    this.iconNameFilght = this.iconNameFilght === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline';
    this.isRowvisibleFilght = !this.isRowvisibleFilght;
  }

  // ฟังก์ชันปิด Popover
  async closePopover() {
    const popover = await this.popoverController.getTop();
    if (popover) {
      await popover.dismiss();
    }
  }

  // ฟังก์ชันเรียกเมื่อเลือกวันที่
  onDateChange(event: any) {
    this.date_c = this.formatDate(event.detail.value);
    this.closePopover()
  }

  onDateChange_Des(event: any) {
    this.date_des = this.formatDate(event.detail.value);
    this.closePopover()
  }

  onTimeChange(event: any) {
    this.time = event.detail.value
    // console.log(this.time);
  }

  onTimeChange_Des(event: any) {
    this.time_d = event.detail.value
    // console.log(this.time);
  }

  close_des() {
    this.closePopover();
    this.time_c = this.formatTime(this.time);
    // console.log(this.time_c);
  }

  close() {
    this.closePopover();
    this.time_des = this.formatTime(this.time_d);
    // console.log(this.time_c);
  }

  formatDate(isoString: string): string {
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  formatTime(isoString: string): string {
    const date = new Date(isoString);
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${hour}:${minute}`;
  }

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    document.querySelectorAll('ion-segment-button').forEach((button) => {
      button.classList.toggle('selected', button.getAttribute('value') === selectedValue);
    });
  }

}
