import { Component } from '@angular/core';
import { CommonApiService } from './common-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public app = 0;
  public cc: any;
  constructor(public commonApiService: CommonApiService) {
    this.app = 1;
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.commonApiService.getCarousel()
    .subscribe((data) => this.cc = data);
    console.log(this.cc);
    ;
  }

}
