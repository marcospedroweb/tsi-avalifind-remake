import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;
  user = new User();
  email = new FormControl(this.user.email, [Validators.required, Validators.email]);
  secretKey = "CriptografarSenha";
  registerForm: any;
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  // CryptoJS.AES.decrypt(this.teste, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]
      ),
      email: this.user.email,
      password: new FormControl(
        '', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]
      ),
    });
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Você deve inserir um email' :
      this.email.hasError('email') ? 'Esse email não é valido' : '';
  }

  onSubmit(event: any) {
    event.preventDefault();
    if (this.registerForm.controls.email.status == "VALID" && this.registerForm.controls.name.status == "VALID" && this.registerForm.controls.password.status == "VALID") {
      this.user.password = CryptoJS.AES.encrypt(this.user.password, this.secretKey.trim()).toString();

      this.userService.store(this.user).subscribe(users => {
        window.location.href = window.location.href.replace('register', 'login');
      });
    }
  }
}
