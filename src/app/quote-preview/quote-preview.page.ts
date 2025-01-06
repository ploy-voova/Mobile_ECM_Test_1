import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { baseUrl } from 'BaseUrl';

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

  dt_q : any;


  constructor(private router: ActivatedRoute, private popoverController: PopoverController) {

  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.q_id = params.get('quoteId');
    });

    this.journey_quote();


  }

  isdrop: boolean[][] = [];

  toggleDrop(journeyIndex: number, mmIndex: number) {
    if (!this.isdrop[journeyIndex]) {
      this.isdrop[journeyIndex] = [];  // สร้าง array สำหรับ journey นั้นถ้ายังไม่มี
    }
    this.isdrop[journeyIndex][mmIndex] = !this.isdrop[journeyIndex][mmIndex];
  }

  journey_quote(){
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

  // journey_quote() {
  //   console.log("quote=" + this.q_id);
  //   fetch(baseUrl + '/api/ploy/journey_quote/' + this.q_id, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.journey = data;
  //       // this.journeyCount = this.journey.length
  //       this.movementsByJourney = {};

  //       data.forEach((element: any) => {
  //         fetch(baseUrl + '/api/ploy/quote_detail/' + element.j_id, {
  //           method: 'GET',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         })
  //           .then((res) => res.json())
  //           .then((data2) => {
  //             if (!this.movementsByJourney[element.j_id]) {
  //               this.movementsByJourney[element.j_id] = [];
  //             }
  //             this.movementsByJourney[element.j_id].push(...data2);
  //             // console.log(this.movementsByJourney);
  //             this.key = Object.entries(this.movementsByJourney);
  //             if (data2[0].mm_order == 1) {
  //               this.date_j = data2[0].date_start;
  //               this.time_j = data2[0].time_start;
  //             }
  //             // console.log(this.date_j);
  //             // console.log(this.time_j);
  //             // console.log(data2);

  //           });
  //       });
  //     });
  // }
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

  formatDate(isoString: string): string {
    const date = new Date(isoString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }

  // segmentChanged(event: any) {
  //   console.log('Selected Value:', event.detail.value);
  // }

  // journey_quote() {
  //   console.log("quote=" + this.q_id);
  //   fetch('http://35.187.248.255:214/api/ploy/journey_quote/' + this.q_id, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.journey = data;
  //       data.forEach((element: any) => {
  //         fetch('http://35.187.248.255:214/api/ploy/quote_detail/' + element.j_id, {
  //           method: 'GET',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         })
  //         .then((res) => res.json())
  //         .then((data2) => {
  //           if (!this.movement) {
  //             this.movement = []; 
  //           }
  //           this.movement.push(...data2);
  //         })
  //       });
  //     })
  // }
}
