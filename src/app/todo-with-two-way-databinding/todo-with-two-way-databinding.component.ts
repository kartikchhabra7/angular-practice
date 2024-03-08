import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-with-two-way-databinding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-with-two-way-databinding.component.html',
  styleUrl: './todo-with-two-way-databinding.component.scss',
})
export class TodoWithTwoWayDatabindingComponent {
  firstName: string = '';
  lastName: string = '';
  profile: string = '';
  email: string = '';
  password: any = '';
  confirmPassword: any = '';
  userData: any[] = [];

  addUserData() {
    if (
      this.areAllInputsFilled()
    ) {
      this.alertPopUp('Please fill in all fields');
      return;
    }
    const existedData = this.userData.find(
      (val: any) => val.userEmail === this.email
    );
    const hasPasswordMatch = this.password === this.confirmPassword;
    const createUserId = new Date().getTime();
    const addedDate = new Date();

    if (!hasPasswordMatch) {
      this.alertPopUp('Password and confirm Password are not matched');
      return;
    }
    if (existedData) {
      this.alertPopUp('This Email is already existed in this data');
    } else {
      this.userData.push({
        firstName: this.firstName,
        lastName: this.lastName,
        profile: this.profile,
        userId: createUserId,
        userEmail: this.email,
        userPassword: this.password,
        userConfirmPassword: this.confirmPassword,
        addedDate,
      });
      this.clearInputFields();
    }
    console.log(this.userData);
  }

  deleteData(i: number) {
    this.userData.splice(i, 1);
  }

  deleteAllData() {
    const isConfirmed: any = this.alertPopUp(
      'Are you sure you want to delete all data ?'
    );
    if (isConfirmed) {
      this.userData = [];
    }
  }

  private clearInputFields() {
    this.firstName = '';
    this.lastName = '';
    this.profile = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  private alertPopUp(notification: string) {
    window.alert(notification);
    return;
  }
 
  private areAllInputsFilled():boolean{
    return !(
      this.firstName &&
      this.lastName &&
      this.profile &&
      this.email &&
      this.password &&
      this.confirmPassword
    )
  }
}
