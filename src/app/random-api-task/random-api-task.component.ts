import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-api-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-api-task.component.html',
  styleUrl: './random-api-task.component.scss',
})
export class RandomApiTaskComponent implements OnInit {
  countVal: number = 5;
  storeData: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDataFromApi();
  }

  getDataFromApi(): void {
    const API_BASE_URL: any = `https://random-data-api.com/api/address/random_address?size=${this.countVal}`;
    this.http.get(API_BASE_URL).subscribe((response: any) => {
      console.log(response);
      this.storeData = response;
    });
  }

  incrementData() {
    this.countVal++;
    this.getDataFromApi();
  }

  deleteData(index: number) {
    this.storeData = this.storeData.filter((item: any) => {
      return item.id !== index;
    });
  }
}
