import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter-in-api',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-filter-in-api.component.html',
  styleUrl: './search-filter-in-api.component.scss',
})
export class SearchFilterInApiComponent implements OnInit {
  API_BASE_URL: string = 'https://jsonplaceholder.typicode.com/todos/';

  storeData: any[] = [];

  inputValue: string = '';

  userData:any[];

  constructor(private http: HttpClient) {
    this.userData=[...this.storeData]
  }

  ngOnInit(): void {
    this.getApiData();
  }

  getApiData(): void {
    this.http.get(this.API_BASE_URL).subscribe((response: any) => {
      this.storeData = response.slice(0, 15);
      this.userData=[...this.storeData]
    });
  }

  searchData() {
    if (this.inputValue.trim() !== '') {
      this.storeData = this.userData.filter((item: any) => {
        return item.title.toLowerCase().includes(this.inputValue.toLowerCase());
      });
    } else {
      this.storeData = [...this.userData];
    }
  }

  markTest(title: string) {
    if (!this.inputValue.trim()) return title;
    const regex = new RegExp(this.inputValue, 'gi');
    return title.replace(
      regex,
      '<mark class="text-black bg-warning">$&</mark>'
    );
  }
  
}
