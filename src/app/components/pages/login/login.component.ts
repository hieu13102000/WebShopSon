import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    username: '',
    email: '',
    password: '',
    published: true
  };
  submitted = false;
  email: string = ''
  password: string = ''
  @ViewChild('closebutton') closebutton: any;
  constructor(private userService: UserService, private authService: AuthService) { }
  userAuth!: Observable<User | null>
  ngOnInit(): void {
    this.userAuth = this.authService.getUserAuth()
  }

  saveUser(): void {
    const data = {
      username: this.user.username,
      email: this.user.email,
      password: this.user.password
    };

    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  handleSubmit(email: string, password: string) {
    this.userService.login(email, password).then(isLoggin => {
      if (!isLoggin) {
        alert('Sai mật khẩu')
      } else {
        this.closebutton.nativeElement.click();
        alert('Đăng nhập thành công')
      }
    });
  }
  logout() {
    this.userService.logout()
  }
}
