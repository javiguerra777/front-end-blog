import { Component, OnInit } from '@angular/core';
import { User } from 'src/user';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ThisUser } from 'src/app/mockdata';

@Component({
  selector: 'app-mainprofile',
  templateUrl: './mainprofile.component.html',
  styleUrls: ['./mainprofile.component.css']
})
export class MainprofileComponent implements OnInit {
  user!: any;
  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.user = ThisUser;

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

}
