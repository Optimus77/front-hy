import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  constructor() { }
  tag;
  aaa = "./1.png";
  left_Click() {
    this.tag--;
  }

  right_Click() {
    this.tag++;
  }


  ngOnInit() {
    this.tag=1
  }

}
