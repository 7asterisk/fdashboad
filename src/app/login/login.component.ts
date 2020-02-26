import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authState
  error
  constructor(private auth :AuthService, private router:Router) { }
  onLoginEmail(email,password){
      this.auth.loginWithEmail(email, password)
        .then(() => {this.router.navigate(['/course',{id:0}]);})
        .catch(_error => {
          this.error = _error;
          // this.router.navigate(['/']);
        });
    }

  ngOnInit() {
  }

}

