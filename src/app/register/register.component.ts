import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
firstname:string="";
lastname:string="";
email:string="";
password:string="";

constructor(private http: HttpClient)
{

}
ngOnInit():void{

}
register(){
  let details=
  {
    "firstname":this.firstname,
    "lastname":this.lastname,
    "email":this.email,
    "password":this.password,

  };
  this.http.post("http://localhost:1999/student/create/",details).subscribe((resultData:any)=>
  {
    console.log(resultData);
alert("Student Registration Success")
  });
}
  save()
  {
this.register();
  }



}
