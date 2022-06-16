import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  user = new User();
  usersDb = new Array<User>();
  email = new FormControl(this.user.email, [Validators.required, Validators.email]);
  secretKey = "CriptografarSenha";
  registerForm: any;

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userService.list().subscribe(users => {
      this.usersDb = users;
    });

    this.registerForm = this.formBuilder.group({
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
    if (this.registerForm.controls.email.status == "VALID" && this.registerForm.controls.password.status == "VALID") {
      // CryptoJS.AES.decrypt(this.teste, this.secretKey.trim()).toString(CryptoJS.enc.Utf8)
      this.user.password = CryptoJS.AES.encrypt(this.user.password, this.secretKey.trim()).toString();

      this.userService.store(this.user).subscribe(users => {
        window.location.href = window.location.href.replace('register', 'login');
      });
    }
  }
}
