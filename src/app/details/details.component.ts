import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import { HTTPService} from '../http.service';
import {ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
datos:any;
type:any = this.route.snapshot.params.type;
page=0;
ruta:any = this.location.path();
  constructor(private service:  HTTPService,private location:Location,private route: ActivatedRoute) {
    
   }
   


  ngOnInit() {


this.service.getDetalles(this.type,this.route.snapshot.params.guid).subscribe(
  data=> {
   this.datos=data.results
   
 
  })
  }

}
