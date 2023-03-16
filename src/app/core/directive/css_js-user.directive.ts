import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[css-js-user]'
})
export class CssJsUserDirective {

  constructor(private el: ElementRef) {
    const dynamicStyles = [
      '../../../assets/css/font-awesome.min.css',
      '../../../assets/css/bootstrap.css',
      '../../../assets/css/style.css',
      '../../../assets/css/magnific-popup.css',
      '../../../assets/css/owl.carousel.css',
    ];

    for (let i = 0; i < dynamicStyles.length; i++) {
      const node = document.createElement('link');
      node.href = dynamicStyles[i];
      node.rel = 'stylesheet';
      this.el.nativeElement.appendChild(node);
    }
    const dynamicScripts = [
      '../../../assets/js/jQuery_v3.1.1.min.js',
      '../../../assets/js/owl.carousel.min.js',
      '../../../assets/js/bootstrap.min.js',
      '../../../assets/js/jquery.magnific-popup.js',
      '../../../assets/js/jquery.firstVisitPopup.js',
      '../../../assets/js/custom.js',
      '../../../assets/js/jquery-ui.js',
      '../../../assets/js/custom2.js',
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
