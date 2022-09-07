import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur:boolean=false
  condition!:FormGroup

   constructor(private route:Router,private loginService:LoginService,private fb:FormBuilder) { }
    log(){}


  ngOnInit(): void {

  this.condition=this.fb.group({
    mail:this.fb.control('',[Validators.required])
  })
  }
  get mail(){
    return this.condition.get('mail')
  }
  password(val:any){
    if(val.target.value=="sudo"){
      this.erreur=false;
      this.loginService.longin();
      this.route.navigate(['/scan'])
    }else{
      this.erreur=true
    }
  }

}
