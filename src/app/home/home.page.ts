import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

interface q {
  quote_id: string;
  sale: string;
  name: string;
  date_journey: string;
  time_journey: string;
  pick_up: string;
  destination: string;
  price: string;
  pix: string;
  progress_data: string;
  callback_date: null | string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  quo: q[] = [];
  
  constructor() {}

  ngOnInit() {
    const quote = [
      {
        "quote_id": "1005063",
        "sale": "train",
        "name": "Moss",
        "date_journey": "2025-01-01",
        "time_journey": "12:00:00",
        "pick_up": "Bamaga",
        "destination": "Injinoo",
        "price": "0.00",
        "pix": "9",
        "progress_data": "0",
        "callback_date": null
      },
      {
        "quote_id": "1006629",
        "sale": "somkid",
        "name": "Thecoachcompany",
        "date_journey": "2024-12-25",
        "time_journey": "04:32:00",
        "pick_up": "40 Eastbourne Terrace, Westminster, London, W2 6LA, United Kingdom",
        "destination": "166 College Road, Harrow, HA1 1BH, United Kingdom",
        "price": "0.00",
        "pix": "2",
        "progress_data": "2",
        "callback_date": null
      },
      {
        "quote_id": "1006604",
        "sale": "somkid",
        "name": "Thecoachcompany",
        "date_journey": "2024-12-31",
        "time_journey": "04:09:00",
        "pick_up": "40 Eastbourne Terrace, Westminster, London, W2 6LA, United Kingdom",
        "destination": "London Bridge, Great Ocean Rd, Victoria 3270, Australia",
        "price": "0.00",
        "pix": "16",
        "progress_data": "5",
        "callback_date": null
      },
      {
        "quote_id": "1006602",
        "sale": "somkid",
        "name": "Thecoachcompany",
        "date_journey": "2024-12-31",
        "time_journey": "04:09:00",
        "pick_up": "40 Eastbourne Terrace, Westminster, London, W2 6LA, United Kingdom",
        "destination": "London Bridge, Great Ocean Rd, Victoria 3270, Australia",
        "price": "0.00",
        "pix": "16",
        "progress_data": "0",
        "callback_date": null
      },
      {
        "quote_id": "1006599",
        "sale": "somkid",
        "name": "Thecoachcompany",
        "date_journey": "2024-12-31",
        "time_journey": "04:09:00",
        "pick_up": "40 Eastbourne Terrace, Westminster, London, W2 6LA, United Kingdom",
        "destination": "London Bridge, Great Ocean Rd, Victoria 3270, Australia",
        "price": "0.00",
        "pix": "16",
        "progress_data": "0",
        "callback_date": null
      }
    ]
    this.quo = (quote);
    console.log(this.quo);

  }




}




