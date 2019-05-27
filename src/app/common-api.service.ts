import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiService {
  private url: any;

  constructor(private http: HttpClient) {
    this.url = 'http://180.149.241.208:3000/api/';
   }

  getCarousel() {
    const filter = 'categories?filter={"include":"images"}';
    this.http.get( this.url + filter ).subscribe((data) => {
      return data;
    });
  }
}
