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
  constructor(private userService: UserService, private router: Router
  ) {
    const dynamicScripts = [
      '../../../assets/vendor/bootstrap/js/bootstrap.js',
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
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
}
