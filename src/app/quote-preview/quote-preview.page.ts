import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { baseUrl } from 'BaseUrl';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quote-preview',
  templateUrl: './quote-preview.page.html',
  styleUrls: ['./quote-preview.page.scss'],
})
export class QuotePreviewPage implements OnInit {
  q_id: string | null = '';
  journey: any;
  movement: any;
  movementsByJourney: any;
  key: any;
  date_j: any;
  time_j: any;

  date_c: any;
  time_c: any;
  time: any;
  dt_q: any;

  isdropCus : boolean = false;
  isdropTran : boolean = false;
  isdropPrice : boolean = false;
  isdropMisc : boolean = false;


  constructor(private router: ActivatedRoute, private popoverController: PopoverController, private alertController: AlertController) {

  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.q_id = params.get('quoteId');
    });

    this.journey_quote();


  }

  toggleCus(){
    this.isdropCus = !this.isdropCus;
  }

  isdrop: boolean[][] = [];
  currentOpen: { journeyIndex: number; mmIndex: number } | null = null; // เก็บตำแหน่งของอันที่เปิดอยู่

  async toggleDrop(journeyIndex: number, mmIndex: number) {
    if (this.currentOpen && (this.currentOpen.journeyIndex !== journeyIndex || this.currentOpen.mmIndex !== mmIndex)) {
      const alert = await this.alertController.create({
        header: 'Destination has not been set.',
        message: 'Please drag the locate pointer to the requied destination.',
        buttons: [
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              console.log('OK clicked');
            },
          },
        ],
      });

      await alert.present();
      return; // ไม่ให้ทำการเปิดรายการใหม่
    }

    if (!this.isdrop[journeyIndex]) {
      this.isdrop[journeyIndex] = [];
    }

    this.isdrop[journeyIndex][mmIndex] = !this.isdrop[journeyIndex][mmIndex];

    // อัพเดต currentOpen ตามสถานะการเปิด/ปิด
    if (this.isdrop[journeyIndex][mmIndex]) {
      this.currentOpen = { journeyIndex, mmIndex };
    } else {
      this.currentOpen = null;
    }
  }


  journey_quote() {
    fetch('http://35.187.248.255:214/api/testss/quote_review/' + this.q_id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.dt_q = data;
        this.date_j = data[0]['movement_quote'][0]['date_start'];
        this.time_j = data[0]['movement_quote'][0]['time_start'];
      });
  }

  segmentChanged(event: any) {
    const selectedValue = event.detail.value;
    document.querySelectorAll('ion-segment-button').forEach((button) => {
      button.classList.toggle('selected', button.getAttribute('value') === selectedValue);
    });
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

  onTimeChange(event: any) {
    this.time = event.detail.value
    // console.log(this.time);
  }

  close() {
    this.closePopover();
    this.time_c = this.formatTime(this.time);
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
}
