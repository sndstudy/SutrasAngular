import { Component, OnInit } from '@angular/core';
import { ImportComponent } from '../import/import.component';

@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.component.html',
  styleUrls: ['./chapter4.component.css']
})
export class Chapter4Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string = "HOGEhoge";

  banner:any = ImportComponent;

}
