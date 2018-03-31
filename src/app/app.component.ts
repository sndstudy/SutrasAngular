import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  member = {
    name:'山田太郎',
    age:30
  }

  title:string = 'タイトル';
  
  msg:string = '<s>hogehoge</s>';

  len:number = 3;

  clazz:string = 'fore';

  flag:boolean = true;

  nowDate:string = '---';

  show(e:any){
    this.nowDate = new Date().toLocaleDateString();
    console.log(e);
  }

  onClick1(){
    console.log("outer");
  }

  onClick2(e:any){
    e.stopPropagation();
    console.log("inner");
  }

  txtMsg:string = "";

  showTxt(input:string){
    
    this.txtMsg += `<li>${input}</li>`;

  }

  myName:string = "yamada";

}
