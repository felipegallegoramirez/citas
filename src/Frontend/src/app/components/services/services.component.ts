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

  servicios:Array<Service>=[]

  ngOnInit(): void {
    this.serviceService.getServices().subscribe(res=>{
      this.servicios=res as Service[]
    })

  }

}
