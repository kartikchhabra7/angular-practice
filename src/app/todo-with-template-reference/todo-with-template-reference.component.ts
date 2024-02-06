import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-with-template-reference',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-with-template-reference.component.html',
  styleUrl: './todo-with-template-reference.component.scss',
})
export class TodoWithTemplateReferenceComponent {
  userData: any[] = [];

  addUserData(firstName: string, lastName: string, profile: string) {
    const createUserId = new Date().getTime();

    if (!(firstName && lastName && profile)) {
      alert('please fill in all fields.');
    } else {
      console.log({ firstName, lastName, profile, createUserId });
      this.userData.push({
        createUserId,
        firstName,
        lastName,
        profile,
      });
    }
  }
  deleteData(index: number) {
    const userData =
      this.userData[index].firstName + ' ' + this.userData[index].lastName;
    const isConfirmed = window.confirm(
      'Are you sure you want to delete ' + userData
    );
    if (isConfirmed) {
      this.userData.splice(index, 1);
    }
  }
}
