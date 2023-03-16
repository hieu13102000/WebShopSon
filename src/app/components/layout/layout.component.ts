import { Component, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor() {

  }

  ngOnInit(): void {
    this.loadCSS();
  }
  loadCSS() {
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
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  ngOnDestroy() {
    console.log("11");

  }
}
