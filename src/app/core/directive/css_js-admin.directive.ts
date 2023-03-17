import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[css-js-admin]'
})
export class CssJsAdminDirective {

  constructor(private el: ElementRef) {
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
    const dynamicScripts = [
      '../../../assets/vendor/bootstrap/js/bootstrap.js',
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
