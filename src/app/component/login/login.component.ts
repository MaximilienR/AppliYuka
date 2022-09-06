import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur:boolean=false

   constructor(private route:Router,private loginService:LoginService) { }
    log(){}


  ngOnInit(): void {
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
