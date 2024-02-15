import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
  email:string="";
  password:string="";
 
  isLogin:boolean=true;
  errorMessage:string="";

  constructor(private router:Router,private http:HttpClient){}

  login(){
console.log(this.email);
console.log(this.password);

let details=
{
  email: this.email,
 password:this.password,

};
this.http.post("http://localhost:1999/student/login/",details).subscribe((resultData:any)=>{
console.log(resultData);
if(resultData.status){
    this.router.navigateByUrl('/home');

  }else{
    alert("Incorrect User Credential");
    console.log("error login");
   }
   });
  }

}
