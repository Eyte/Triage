import {NavController, LoadingController} from 'ionic-angular';
import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Auth} from '../../providers/auth/auth';
import {RegisterPage} from '../register/register';
import {ForgotPage} from '../forgot/forgot';
import {TabsPage} from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;


  constructor(public nav: NavController, public authData: Auth, public formBuilder: FormBuilder, private loadingController: LoadingController) {
    this.nav = nav;
    this.authData = authData;

    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser(event){
  event.preventDefault();

  let loadingController = this.loadingController.create({
      content: 'Please wait...'
    });
    loadingController.present();

  this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then((authData: any) => {
    console.log(authData.uid);
    loadingController.dismiss();
    this.nav.push(TabsPage);
  }
  )
  .catch((error: any) => {
        if (error) {
          console.log("Error:" + error.code);
          loadingController.dismiss();
        }
      });

  }

  goToSignup(){
  this.nav.push(RegisterPage);
  }

  goToResetPassword(){
  this.nav.push(ForgotPage);
  }

}
