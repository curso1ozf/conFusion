import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { DishClass } from "../shared/dish";
import { CommentClass } from "../shared/comment";

import { Location } from "@angular/common";
import { ActivatedRoute, Params } from "@angular/router";

import { DishService } from "../services/dish.service";

import { switchMap } from 'rxjs/operators';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-dishdetail',
  template: `
    <div [hidden]="dish || errMess">
      <mat-spinner></mat-spinner>
      <h4>Loading . . . Please wait</h4>
    </div>
    <div *ngIf="errMess">
      <h2>Error</h2>
      <h4>{{errMess}}</h4>
    </div>
    <div  class="container" fxLayout="row wrap" fxLayout.sm="column" fxLayout.xs="column" fxLayoutGap="10px" fxLayoutAlign.gt-md="space-around center">
      <div fxFlex *ngIf="dish">
        <mat-card>
          <mat-card-title> {{ dish.name | uppercase}} </mat-card-title>
          <img mat-card-image src="{{ BaseURL + dish.image }}" height="400px">
          <mat-card-content> {{ dish.description }} </mat-card-content>
          <mat-card-actions>
            <button mat-button [routerLink] = "['/dishdetail',prev]">
              <span class="fa fa-chevron-left fa-lg"></span>
            </button>
            <button mat-button (click)="goBack()">BACK</button>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
            <span class="flex spacer"></span>
            <button mat-button [routerLink] = "['/dishdetail',next]">
              <span class="fa fa-chevron-right fa-lg"></span>
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
      <div fxFlex *ngIf="dish">
        <div>
          <h2>Comments</h2>
        </div>
        <div>
          <mat-list cols="1" rowHeight="40px">
            <mat-list-item *ngFor="let comment of dish.comments">
              <h4 matLine>{{comment.comment}}</h4>
              <p matLine class="demo-2"> {{comment.rating}} Stars </p>
              <p matLine class="demo-2"> -- {{comment.author}} {{comment.date | date}} </p>
            </mat-list-item>
            <mat-list-item *ngIf="newCommentForm.valid">
              <h4 matLine>{{newCommentForm.value.comment}}</h4>
              <p matLine class="demo-2"> {{newCommentForm.value.rating}} Stars </p>
              <p matLine class="demo-2"> -- {{newCommentForm.value.author}} </p>
            </mat-list-item>
          </mat-list>
        <div>
      </div>
      <div>
        <form novalidate [formGroup]="newCommentForm" class="form-size" (submit)="onSubmit()">
          <mat-dialog-content>
            <p class="center-alignment">
              <mat-form-field class="full-width">
                <input matInput formControlName="author" placeholder="Name" type="text" >
                <mat-error *ngIf="formErrors.author">{{formErrors.author}}</mat-error>
              </mat-form-field>
            </p>
            <p class="center-alignment">
              <mat-slider formControlName="rating" thumbLabel tickInterval="1" max="5" step="1" min="1" value="5"></mat-slider>
            </p>
            <p class="center-alignment">
              <mat-form-field class="full-width">
                <textarea matInput formControlName="comment" placeholder="Your comment" rows=5>
                </textarea>
                <mat-error *ngIf="formErrors.comment">{{formErrors.comment}}</mat-error>
              </mat-form-field>
            </p>
          </mat-dialog-content>
          <mat-dialog-actions>
            <button [disabled]="newCommentForm.invalid" mat-button type="submit" class="background-primary text-floral-white">Send</button>
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
export class DishdetailComponent implements OnInit {

  @ViewChild('commentform') newCommentFormDirective;

  newCommentForm: FormGroup;
  newComment: CommentClass;

  formErrors = {
    'author': '',
    'comment': ''
  };

  validationMessages = {
    'author': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 2 characters long.',
      'maxlength': 'Name cannot be more than 25 characters long.'
    },
    'comment':{
      'required': 'Your comment is required.'
    }
  };
  

  dishIds: number[];
  prev:number;
  next:number;
  dish: DishClass;
  errMes: string;
  constructor( 
    private dishservice: DishService,
    private location: Location,
    private route: ActivatedRoute,
    private newCommentFormBuilder: FormBuilder,
    @Inject('BaseURL') private BaseURL
  ) {
      this.createForm();
   }

  ngOnInit() {
    this.dishservice.getDishIds()
    .subscribe(dishIds => this.dishIds = dishIds,
      errmess => this.errMes = <any>errmess);
    this.route.params.pipe(switchMap((params: Params) =>  this.dishservice
      .getDish(+params['id'])))
      .subscribe(dish => {
        this.dish=dish;
        this.setNextPrev(dish.id);
      });
  }

  createForm(){
    this.newCommentForm = this.newCommentFormBuilder.group({
      author: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      rating: '5',
      comment: ['', [Validators.required]],
      date:''
    });
    this.newCommentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.newCommentForm) { return; }
    const form = this.newCommentForm;
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

  setNextPrev(dishId:number){
    const index=this.dishIds.indexOf(dishId);
    this.prev=this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next=this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(){
    var date = new Date();
    this.newComment = this.newCommentForm.value;
    this.newComment.date = date.toISOString();
    this.dish.comments.push(this.newComment);
    console.log(this.newComment);
    this.newCommentForm.reset({
      author: '',
      rating: '5',
      comment: '',
      date: '',
    });
    //this.newCommentForm.value.author.markAsPristine();
    //this.newCommentForm.markAsPristine();
    //this.newCommentForm.markAsUntouched();
    //this.newCommentFormDirective.resetForm();
  }
}
