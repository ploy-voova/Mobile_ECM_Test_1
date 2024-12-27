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
  constructor(private router: ActivatedRoute) {

  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.q_id = params.get('quoteId');
    });

    this.journey_quote();
    
    
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
  //       this.movementsByJourney = {}; 
        
  //       data.forEach((element: any) => {
  //         fetch('http://35.187.248.255:214/api/ploy/quote_detail/' + element.j_id, {
  //           method: 'GET',
  //           headers: {
  //             'Content-Type': 'application/json',
  //           },
  //         })
  //         .then((res) => res.json())
  //         .then((data2) => {
  //           if (!this.movementsByJourney[element.j_id]) {
  //             this.movementsByJourney[element.j_id] = [];
  //           }
  //           this.movementsByJourney[element.j_id].push(...data2); 
  //           console.log(this.movementsByJourney);
  //         });
  //       });
  //     });
  // }

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
        data.forEach((element: any) => {
          fetch('http://35.187.248.255:214/api/ploy/quote_detail/' + element.j_id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res) => res.json())
          .then((data2) => {
            if (!this.movement) {
              this.movement = []; 
            }
            this.movement.push(...data2);
          })
        });
      })
  }
}
