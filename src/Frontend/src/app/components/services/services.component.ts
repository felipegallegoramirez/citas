import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private serviceService:ServiceService) { }

  services:Array<Service>=[]
  selected:string=""

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(res=>{
      this.services=res as Service[]
    })
  }

  select(x:number){
    this.selected=this.services[x]._id||""
    let old=document.getElementsByClassName("select")[0]
    if(old){
      old.classList.remove("select");
    }
    let n = document.getElementsByClassName("card_service")[x]
    n.classList.add("select")
  }

  next(){
    if(this.selected!=""&& this.selected){
      localStorage.setItem("service_id",this.selected)
      window.location.replace("http://localhost:4200/#/Profesional");
    }else{
      alert("Seleccione un servicio")
    }
  }



}
