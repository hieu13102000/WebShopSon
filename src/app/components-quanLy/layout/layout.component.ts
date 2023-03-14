import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor() {
    this.loadCSS();
    this.loadScripts();
  }

  ngOnInit(): void {
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

  loadScripts() {
    const dynamicScripts = [
      '../../../assets/vendor/jquery/jquery.min.js',
      '../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '../../../assets/vendor/jquery-easing/jquery.easing.min.js',
      '../../../assets/js/ruang-admin.min.js',
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
}
