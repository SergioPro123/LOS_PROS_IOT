import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email:string="";
  password:string = "";
  cpassword:string="";
  name:string="";

  constructor(
    public auth:AuthService,
    public router:Router,
    public alertController: AlertController,
    ){}

  ngOnInit() {
  }
  OnRegister(){
    if(this.password != this.cpassword){
      this.showAlert("Error!","Contraseña no coincide");
      return console.error("Contraseña no coindice")
    }else{
      this.auth.register(this.email,this.password,this.name).then(res=>{
        this.showAlert("Success!","Bienvenid@ "+this.name);
        this.router.navigate(['./home']);
      }).catch(err=> this.showAlert("Error:",err))
    }
  }
  closeControl(){
    this.router.navigate(['./login']);
  }
  async showAlert(header:string, message:string){
    const alert = await this.alertController.create({
      header,
      message,
      buttons:['Ok']
    });
    await alert.present();
  }
}
