import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  condition!:FormGroup;
  user!:User;
  constructor(private fb:FormBuilder) { }


  ngOnInit(): void {
    this.condition=this.fb.group({
      mail:this.fb.control('',[Validators.required, Validators.pattern("^([a-z]*)\@([a-z]{2,10})\.(fr|com)$")]),
      password:this.fb.control('',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]),

    })
  }

  get mail(){
    return this.condition.get('mail')
  }
  get password(){
    return this.condition.get('password')
  }
  check(){
    if(this.condition.valid){
      this.user=this.condition.value;
     // this.user.mail=this.condition.get('mail')?.value
    }
  }

}
