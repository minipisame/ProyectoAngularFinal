import { Component, OnInit } from '@angular/core';
import { HTTPService} from '../http.service'
import {Location} from "@angular/common"
@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {
  constructor(private service:  HTTPService,private location:Location) { }
    datos :any;
    ruta:any = this.location.path();
    page=0;
    scrollDistance = 2;
    throttle = 300;
  ngOnInit() {
    this.service.getDatos(this.page).subscribe(
      data=> {
        this.page=this.page+8;
       this.datos=data.results

     
      })
    }
     onScrollDown () {
      this.service.getDatos(this.page).subscribe(
        data=> {
           this.page=this.page+8;
         this.datos=this.datos.concat(data.results);
        })
       }
      
   
  }


