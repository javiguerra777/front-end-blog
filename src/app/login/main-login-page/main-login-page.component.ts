import { Component, OnInit } from '@angular/core';
import{ ActivatedRoute, Router} from '@angular/router';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-main-login-page',
  templateUrl: './main-login-page.component.html',
  styleUrls: ['./main-login-page.component.css']
})
export class MainLoginPageComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),
    });
  }
   get f(){
     return this.form.controls;
    }

    submit(){
      console.log(this.form.value);
      this.router.navigateByUrl('../../post/index');
    }
}
