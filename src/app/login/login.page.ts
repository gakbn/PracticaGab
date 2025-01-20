import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';  
  password: string = '';  

  constructor(
    private navController: NavController,
    private toastController: ToastController // Agregar ToastController aquí
  ) { }

  ngOnInit() {
  }

  login() {
    if(this.email === 'gabriel@gmail.com' && this.password === 'dsm2025') {
      this.navController.navigateRoot('/inicio');
    } else {
      this.presentToast('bottom');
    }
  }

  async presentToast(position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message: 'Credenciales incorrectas', 
      duration: 3500, 
      position: position, 
      color: 'warning'
    });

    await toast.present(); 
  }
}
