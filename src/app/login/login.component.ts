import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldControl } from '@angular/material';

@Component({
  selector: 'app-login',
  template: `
    <mat-toolbar color="primary">
      <span>Login</span>
      <span class="flex-spacer"></span>
      <button mat-button mat-dialog-close>&times;</button>
    </mat-toolbar>
    <form #formLogin="ngForm" novalidate (ngSubmit)="onSubmit()">
      <mat-dialog-content >
        <p> 
          <mat-form-field >
            <input matInput placeholder="Username" [(ngModel)]="user.username" type="text" name="username" #username="ngModel" required >
            <mat-error *ngIf="username.errors?.required">username is required</mat-error>
          </mat-form-field>  
        </p>      
        <p>
          <mat-form-field>
            <input matInput placeholder="Password" [(ngModel)]="user.password" type="password" name="password" #password="ngModel" required >
            <mat-error *ngIf="password.errors?.required">password is required</mat-error>
          </mat-form-field>
        </p>
        <p>      
          <mat-checkbox matInput [(ngModel)]="user.remember" name="remember" >Remember me </mat-checkbox>
        </p>
      </mat-dialog-content>
      <mat-dialog-actions>
        <span class="flex-spacer"></span>
        <button mat-button mat-dialog-close>Cancel </button>
        <button [disabled]="formLogin.form.invalid"  class="background-primary text-floral-white" type="submit" mat-button>Login</button>
      </mat-dialog-actions>
    </form>
   
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};

  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("User: ", this.user);
    this.dialogRef.close();
  }
}
