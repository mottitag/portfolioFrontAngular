import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private authService:AuthenticationService, private route:Router) {
    this.form = this.formBuilder.group(
      {
        username:['',[Validators.required, Validators.minLength(4)]],
        password:['',[Validators.required, Validators.minLength(8)]]
      }
    )
  }

  get Username(){
    return this.form.get('username');
  }

  get Password(){
    return this.form.get('password');
  }

  onSubmit(event:Event){
    event.preventDefault;
    this.authService.login(this.form.value).subscribe(data => {
      this.route.navigate(['/portfolio']);
    })
  }
}
