import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-filter.component.html',
  styleUrl: './search-filter.component.scss',
})
export class SearchFilterComponent {
  inputVal: string = '';
  originalData: any[] = [
    { id: 1, name: 'john' },
    { id: 2, name: 'john' },
    { id: 3, name: 'doe' },
    { id: 4, name: 'mark' },
    { id: 5, name: 'jones' },
  ];
  userData: any[];

  constructor() {
    this.userData = [...this.originalData];
  }

  isDataFound(): boolean {
    return this.userData.length > 0;
  }
  searchData() {
    this.userData = [...this.originalData];

    if (this.inputVal.trim() !== '') {
      this.userData = this.userData.filter((item: any) =>
        item.name.toLowerCase().includes(this.inputVal.toLowerCase())
      );
    }
  }
  markText(name: string): string {
    if (!this.inputVal.trim()) return name;
    const regex = new RegExp(this.inputVal, 'gi');
    return name.replace(
      regex,
      '<mark class="highlight text-black bg-warning">$&</mark>'
    );
  }
}
