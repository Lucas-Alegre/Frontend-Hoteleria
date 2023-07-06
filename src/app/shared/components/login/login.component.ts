import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/models/users';
import { initialUser } from 'src/app/core/state/actions/login.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit() {

  }
  constructor(private store: Store) {

  }
  private user: User = {
    first_name: "Lucas",
    last_name: "Alegre",
    email: "lucasalegre.web@gmail.com",
    password: "Quetimportaxd",
    roleId: 1
  }
  cargarUser() {
    console.log("Funciono xd")
    this.store.dispatch(initialUser(this.user))
  }
}
