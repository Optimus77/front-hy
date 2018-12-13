import { Component, OnInit } from '@angular/core';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'ngx-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  constructor() { }
  tag;
  selectedCamera;

  cameras: any[] = [{
    title: 'Camera #1',
    source: 'assets/images/camera1.jpg',
  }, {
    title: 'Camera #2',
    source: 'assets/images/camera2.jpg',
  }, {
    title: 'Camera #3',
    source: 'assets/images/camera3.jpg',
  }, {
    title: 'Camera #4',
    source: 'assets/images/camera4.jpg',
  }];



  userMenu = [{
    title: 'Profile',
  }, {
    title: 'Log out',
  }];

  isSingleView = true;

  selectCamera(camera: any) {
    this.selectedCamera = camera;
    this.isSingleView = false;
  }

  left_Click() {
    this.tag--;
    this.selectedCamera = this.cameras[this.tag];
  }

  right_Click() {
    this.tag++;
    this.selectedCamera = this.cameras[this.tag];
  }

  ngOnInit() {
    this.tag=0;
    this.selectedCamera= this.cameras[0];
  }

}
