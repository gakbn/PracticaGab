import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false  
})
export class RegistroPage implements OnInit {

  email: string = '';  
  password: string = '';  
  confirmPassword: string = ''; 

  constructor(
    private toastController: ToastController, 
    private navController: NavController
  ) { }

  ngOnInit() {}

  async register() {
    if(this.email === '' || this.password === '' || this.confirmPassword === '') {
      this.presentToast('top', 'Por favor, ingresa todos los campos.');
      return;
    }

    if(this.password !== this.confirmPassword) {
      this.presentToast('top', 'Las contraseñas no coinciden.');
      return;
    }

    this.presentToast('top', '¡Registro exitoso!');
    
    this.navController.navigateRoot('/login');
  }

  async presentToast(position: 'top' | 'bottom' | 'middle', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3500,
      position: position,
      color: 'success'
    });
    await toast.present();
  }
}
