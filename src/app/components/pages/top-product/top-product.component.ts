import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-product',
  templateUrl: './top-product.component.html',
  styleUrls: ['./top-product.component.css']
})
export class TopProductComponent implements OnInit {

  constructor() {  this.loadScripts();}

  ngOnInit(): void {
  }
  loadScripts() {
    const dynamicScripts = [
     '../../../assets/js/jQuery_v3.1.1.min.js',
     '../../../assets/js/owl.carousel.min.js',
     '../../../assets/js/bootstrap.min.js',
     '../../../assets/js/jquery.magnific-popup.js',
     '../../../assets/js/jquery.firstVisitPopup.js',
     '../../../assets/js/custom.js'
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
