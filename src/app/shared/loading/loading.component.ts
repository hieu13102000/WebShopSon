import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';


@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  isLoading = false;
  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.isLoading.subscribe(isLoading => this.isLoading = isLoading)
  }
}
