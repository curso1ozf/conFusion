import { Component, OnInit } from '@angular/core';
import { feedBackClass,  contactType } from '../shared/feedback';

import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
  <div class="container"
    fxLayout="column"
    fxLayoutGap="10px">

    <div fxFlex>
      <div>
          <h3>Contact Us</h3>
          <hr>
      </div>
    </div>

    <div fxFlex>
      <h3>Location Information</h3> 
      <div fxLayout="column" fxLayout.gt-sm="row">
        <div fxFlex="50" fxFlexOffset="20px">
          <h4>Our Address</h4>
          <address>
            121, Clear Water Bay Road<br>
            Clear Water Bay, Kowloon<br>
            HONG KONG<br>
            <i class="fa fa-phone"></i>: +852 1234 5678<br>
            <i class="fa fa-fax"></i>: +852 8765 4321<br>
            <i class="fa fa-envelope"></i>: 
                  <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
          <p></p>
          <div>
            <a mat-raised-button href="tel:+85212345678"><i class="fa fa-phone"></i> Call</a>
            <a mat-raised-button><i class="fa fa-skype"></i> Skype</a>
            <a mat-raised-button href="mailto:confusion@food.net"><i class="fa fa-envelope-o"></i> Email</a>
          </div>
          </div>
        <div fxFlex="40">
          <h4>Map of our Location</h4>
        </div>
      </div>
    </div>
    <div fxFlex="50" fxFlexOffset="20px" class="form-size">
      <h3>Leave your feedback </h3>
        <form novalidate [formGroup]="feedbackForm" class="form-size" (submit)="onSubmit()">
          <mat-dialog-content>
            <p class="center-alignment">
              <mat-form-field class="half-width">
                <input matInput formControlName="firstname" placeholder="First Name" type="text" required>
              </mat-form-field>
              <mat-form-field class="half-width">
                <input matInput formControlName="lastname" placeholder="Last Name" type="text" required>
              </mat-form-field>
            </p>
            <p class="center-alignment">
              <mat-form-field class="half-width">
                <input matInput formControlName="telnum" placeholder="Telephone Number" type="tel" required>
              </mat-form-field>
              <mat-form-field class="half-width">
                <input matInput formControlName="email" placeholder="Email" type="email" required>
              </mat-form-field>
            </p>
            <p class="center-alignment">
                <mat-slide-toggle formControlName="agree">May we contact you?</mat-slide-toggle>
                <mat-form-field class="half-width">
                  <mat-select formControlName="contacttype" placeholder="How">
                    <mat-option *ngFor="let ctype of contactTypeList" [value]="ctype">
                      {{ ctype }}
                    </mat-option>
                  </mat-select >
                </mat-form-field>
            </p>
            <p class="center-alignment">
              <mat-form-field class="full-width">
                <textarea matInput formControlName="message" placeholder="Your message" rows=5>
                </textarea>
              </mat-form-field>
            </p>
        </mat-dialog-content>
        <mat-dialog-actions>
          <button mat-button type="submit" class="background-primary text-floral-white">Send</button>
        </mat-dialog-actions>
        </form> 
      
    </div>
  </div>
  `,
  styles: [`
    .form-size {
      width:75%
    }

    .full-width {
      width:100%
    }

    .half-width {
      width:45%
    }

    .center-alignment {
      display:flex;
      justify-content: space-between;
      -ms-flex-align: center;
      -webkit-align-items: center;
      -webkit-box-align: center;
      align-items: center;
      margin:20px;
    }
  `]
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: feedBackClass;
  contactTypeList = contactType;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: new FormControl(),
      lastname: '',
      telnum:'',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
  }

  onSubmit(){
    this.feedback=this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
    
  }
}
