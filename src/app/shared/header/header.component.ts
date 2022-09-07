import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { TitleService } from 'src/app/service/title.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string='';
  constructor(private titleService:TitleService,
    private loginService:LoginService,
    private route:Router) { }

  ngOnInit(): void {
    this.titleService.adapt.subscribe((x)=>{
      this.title=x;
    })
  }
  deconnexion(){
    this.loginService.deco();
    this.route.navigate( ['start'])
  }

}
