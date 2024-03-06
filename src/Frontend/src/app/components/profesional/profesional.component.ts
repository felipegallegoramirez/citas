import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.component.html',
  styleUrls: ['./profesional.component.css']
})
export class ProfesionalComponent implements OnInit {

  constructor(private userService:UserService) { }

  profesionals:Array<User>=[]
  selected:string=""

  ngOnInit(): void {
    let x= localStorage.getItem("service_id")||""
    this.userService.getUserService(x).subscribe(res=>{
      console.log(x)
      this.profesionals=res as User[]
      this.cargar()
    })
  }

  select(x:number){
    this.selected=this.profesionals[x]._id||""
    let old=document.getElementsByClassName("select")[0]
    if(old){
      old.classList.remove("select");
    }
    let n = document.getElementsByClassName("card_profesional")[x+1]
    n.classList.add("select")
  }
  default(){
    this.selected="any"
    let old=document.getElementsByClassName("select")[0]
    if(old){
      old.classList.remove("select");
    }
    let n = document.getElementsByClassName("card_profesional")[0]
    n.classList.add("select")
  }


  next(){
    if(this.selected!=""&& this.selected){
      let x= this.profesionals.find(x=>x._id==this.selected)
      this.preview.profresional=x?.name||""
      localStorage.setItem("Profresional_id",this.selected)
      localStorage.setItem("preview",JSON.stringify(this.preview))
      window.location.replace("http://localhost:4200/#/Time");
    }else{
      alert("Seleccione un servicio")
    }
  }

  preview:{
    semana:string,
    dia:string,
    mes:string,
    hora:string
    service:Array<{
      title:string,
      price:string
    }>,
    profresional:string,
    total:string
  }={
    semana:"Sin seleccionar",
    dia:"",
    mes:"",
    profresional:"",
    hora:"Sin seleccionar",
    service:[],
    total:"0",
  }

  cargar(){
    let x = localStorage.getItem("preview")
    if(x){
      this.preview=JSON.parse(x);
    }else{
      localStorage.setItem("preview",JSON.stringify(this.preview))
    }
  }

}
