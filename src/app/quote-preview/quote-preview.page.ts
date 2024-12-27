import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quote-preview',
  templateUrl: './quote-preview.page.html',
  styleUrls: ['./quote-preview.page.scss'],
})
export class QuotePreviewPage implements OnInit {
  q_id: string | null = '';
  journey: any;
  movement : any;
  movementsByJourney : any;
  key : any;
  

  constructor(private router: ActivatedRoute) {

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

  journey_quote() {
    console.log("quote=" + this.q_id);
    fetch('http://35.187.248.255:214/api/ploy/journey_quote/' + this.q_id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.journey = data;
        // this.journeyCount = this.journey.length
        this.movementsByJourney = {}; 
        
        data.forEach((element: any) => {
          fetch('http://35.187.248.255:214/api/ploy/quote_detail/' + element.j_id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => res.json())
          .then((data2) => {
            if (!this.movementsByJourney[element.j_id]) {
              this.movementsByJourney[element.j_id] = [];
            }
            this.movementsByJourney[element.j_id].push(...data2); 
            // console.log(this.movementsByJourney);
            this.key = Object.entries(this.movementsByJourney);
            console.log(this.key);
            
          });
        });
      });
  }

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
