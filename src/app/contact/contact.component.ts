import { Component, OnInit, ViewChild } from '@angular/core';
import { feedBackClass,  contactType } from '../shared/feedback';

import { FormGroup, Validators, FormBuilder, FormControl, EmailValidator } from '@angular/forms';

import { flyInOut } from '../animations/app.animations';

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
                <input matInput formControlName="firstname" placeholder="First Name" type="text" >
                <mat-error *ngIf="formErrors.firstname">{{formErrors.firstname}}</mat-error>
              </mat-form-field>
              <mat-form-field class="half-width">
                <input matInput formControlName="lastname" placeholder="Last Name" type="text" >
                <mat-error *ngIf="formErrors.lastname">{{formErrors.lastname}}</mat-error>
              </mat-form-field>
            </p>
            <p class="center-alignment">
              <mat-form-field class="half-width">
                <input matInput formControlName="telnum" placeholder="Telephone Number" type="tel" pattern="[0-9]*">
                <mat-error *ngIf="formErrors.telnum"> {{formErrors.telnum}}</mat-error>
              </mat-form-field>
              <mat-form-field class="half-width">
                <input matInput formControlName="email" placeholder="Email" type="email" email >
                <mat-error *ngIf="formErrors.email"> {{formErrors.email}}</mat-error>
              </mat-form-field>
            </p>
            <p class="center-alignment">
                <mat-slide-toggle formControlName="agree">May we contact you?</mat-slide-toggle>
                <mat-error *ngIf="feedbackForm.get('agree').hasError('required') && feedbackForm.get('agree').touched"> Contact agreement is required</mat-error>
                <mat-form-field class="half-width">
                  <mat-select formControlName="contacttype" placeholder="How">
                    <mat-option *ngFor="let ctype of contactTypeList" [value]="ctype">
                      {{ ctype }}
                    </mat-option>
                  </mat-select >
                  <mat-error *ngIf="feedbackForm.get('contacttype').hasError('required') && feedbackForm.get('contacttype').touched"> Contact type is required</mat-error>
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
  `],
  host: {
    '[@flyInOut]': 'true',
    'style':'display:block'
  },
  animations:[
    flyInOut()
  ]
})
export class ContactComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;
  
  feedbackForm: FormGroup;
  feedback: feedBackClass;
  contactTypeList = contactType;

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'First Name cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    }
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      lastname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      telnum:['', [Validators.required,Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: false,
      contacttype: ['None', Validators.required],
      message: ''
    });
    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(){
    this.feedback=this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: '' 
    });
    this.feedbackFormDirective.resetForm();
    
  }
}
