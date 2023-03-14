import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = ''
  password: string = ''
  constructor(private userService: UserService, private router: Router) {
    this.loadCSS()
  }

  ngOnInit(): void {
  }
  handleSubmit(email: string, password: string) {
    this.userService.login(email, password).then(isLoggin => {
      if (!isLoggin) {
        alert('Sai mật khẩu hoặc bạn không có quyền truy cập')
      } else {
        this.router.navigate(['/dashboard'])
      }
    });
  }
  loadCSS() {
    const dynamicStyles = [
      '../../../assets/vendor/fontawesome-free/css/all.min.css',
      '../../../assets/vendor/bootstrap/css/bootstrap.min.css',
      '../../../assets/css/ruang-admin.min.css',
    ];
    for (let i = 0; i < dynamicStyles.length; i++) {
      const node = document.createElement('link');
      node.href = dynamicStyles[i];
      node.rel = 'stylesheet';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
