
import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { User } from 'src/app/models/user';


import { BookingService } from 'src/app/services/booking.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  data:Array<{
    i:number,
    dia:number,
    mes:number,
    dia2:string,
    dia3:number,
    hora:Array<number>
  }> =[]
  mes:string=""
  hours:Array<number> =[]

  user:User=new User()
  user_id:string=""

  selectedDay:number=-1

  selected:{
    day:number,
    month:number,
    hour:number
  }={
    day:-1,
    month:-1,
    hour:-1
  }

  constructor(private userService: UserService,private bookingService:BookingService) {}

  ngOnInit(): void {
    var fecha = new Date();
    var hora = fecha.getHours();

    var tempdaytext=fecha.getDay();
    var tempdaynumber=fecha.getDate();
    var tempmonth=fecha.getMonth();
    var tempdiference=this.diference()
    var temphour=[]
    if(hora<5){
      hora=5
    }

    for(var i=hora+1;i<=22;i++){
      temphour.push(i)
    }

    this.hours=temphour
    this.mes=this.month(tempmonth)


    for(var i=0;i<=15;i++){
      this.data.push({
        i:i,
        dia:tempdaynumber,
        mes:tempmonth,
        dia2:this.day(tempdaytext),
        dia3:tempdaytext,
        hora:temphour
      })

      tempdiference-=1
      if(tempdiference<0){
        tempdaynumber=1
        tempmonth+=1
        tempdiference=30
      }else{
        tempdaynumber+=1
      }

      tempdaytext+=1
      if(tempdaytext>6){
        tempdaytext=0
      }
      temphour=[]
      temphour=[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
    }
    let id=localStorage.getItem("Profresional_id")||""
    this.userService.getUser(id).subscribe(res=>{
      this.user=res as User
    })
  }

   diference(): number{
      var fecha = new Date();
      var añoActual = fecha.getFullYear();
      var mesActual = fecha.getMonth();
      var diasEnMesActual = new Date(añoActual, mesActual + 1, 0).getDate();
      var diaActual = fecha.getDate();
      var diasRestantes = diasEnMesActual - diaActual;
    return diasRestantes
  }

  day(x:number):string{
    switch (x) {
      case 0:
        return  'Dom';
        break;
      case 1:
        return  'Lun';
        break;
      case 2:
        return  'Mar';
        break;
      case 3:
        return  'Mié';
        break;
      case 4:
        return  'Jue';
        break;
      case 5:
        return 'Vie';
        break;
      case 6:
        return  'Sáb';
        break;
      default:
        return  'XXX';
    }
  }

  month(x:number):string{
    switch (x) {
      case 0:
        return 'Enero';
      case 1:
        return 'Febrero';
      case 2:
        return 'Marzo';
      case 3:
        return 'Abril';
      case 4:
        return 'Mayo';
      case 5:
        return 'Junio';
      case 6:
        return 'Julio';
      case 7:
        return 'Agosto';
      case 8:
        return 'Septiembre';
      case 9:
        return 'Octubre';
      case 10:
        return 'Noviembre';
      case 11:
        return 'Diciembre';
      default:
        return 'XXX';
    }
  }

  change(x:number){
    let y=this.data[x]
    this.selectedDay=x
    this.hours=[]
    this.hours=y.hora
    this.mes=this.month(y.mes)
    for(let i =0;i<this.user.bloq[this.data[x].dia3].day.length;i++){
        let index= this.hours.indexOf(this.user.bloq[this.data[x].dia3].day[i])
        if(index!=-1){
          this.hours.splice(index,1)
        }
    }

    this.bookingService.getBookingDay(y.dia,y.mes).subscribe(res=>{
      let data= res as Array<number>
      for(let i =0;i<data.length;i++){
        let index= this.hours.indexOf(data[i])
        if(index!=-1){
          this.hours.splice(index,1)
        }
    }
    })
    let old=document.getElementsByClassName("select_day")[0]
    if(old){
      old.classList.remove("select_day");
    }
    let n = document.getElementsByClassName("days__day")[y.i]
    n.classList.add("select_day")
  }

  select(x:number){
    this.selected={
      day:this.data[this.selectedDay].dia,
      month:this.data[this.selectedDay].mes,
      hour:this.data[this.selectedDay].hora[x],
    }

    let old=document.getElementsByClassName("select_hour")[0]
    if(old){
      old.classList.remove("select_hour");
    }
    let n = document.getElementsByClassName("hours_card")[x]
    n.classList.add("select_hour")
  }

  next(){
    var id=localStorage.getItem("id")||""
    var profresional=localStorage.getItem("Profresional_id")||""
    var service=localStorage.getItem("service_id")||""
    if(this.selected.day!=-1){
      var booking= new Booking("",profresional,service,id,this.selected.day,this.selected.month,this.selected.hour)

      //! Vulnerabilidad, hay que reconfirmar que este disponible
      

      console.log(booking)
  
      this.bookingService.postBooking(booking).subscribe(res=>{
        console.log(res as Booking)
      })
    }

  }

}
