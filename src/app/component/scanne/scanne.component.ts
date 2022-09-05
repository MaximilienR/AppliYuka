import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-scanne',
  templateUrl: './scanne.component.html',
  styleUrls: ['./scanne.component.css']
})
export class ScanneComponent implements OnInit {

  condition!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.condition=this.fb.group({
      product:this.fb.control('',Validators.required)
    })
  }
  get product(){
    return this.condition.get('product')
  }

}
