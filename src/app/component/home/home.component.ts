import { Component, OnInit } from '@angular/core';
import { TitleService } from 'src/app/service/title.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string="Accueil";


  constructor(private titleserve:TitleService) { }

  ngOnInit(): void {
  }

}
