import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    old_price: new FormControl(''),
    color: new FormControl(''),
    made_in: new FormControl(''),
    brand: new FormControl(''),
    img: new FormControl(''),
  });
  submitted = false;

  currentProduct: product = {
    name: '',
    price: 0,
    old_price: 0,
    discount: '',
    gender: '',
    color: '',
    made_in: '',
    brand: '',
    img: '',
  };

  locate: string | undefined;
  uploadProgress$ = new Subject<{ url: string, progress: number }>();
  percentage = 0;

  constructor(
    private uploadService: FileUploadService,
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
    this.form = this.formBuilder.group(
      {
        name: ['', Validators.required],
        price: ['', [
          Validators.required,
          // Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        ]],
        old_price: ['', [
          Validators.required,
          // Validators.pattern(/^-?(0|[1-9]\d*)?$/)
        ]],
        color: ['', Validators.required],
        made_in: ['', Validators.required],
        brand: ['', Validators.required],
        img: ['https://firebasestorage.googleapis.com/v0/b/webshop-a5ab0.appspot.com/o/images%2Fadd.png?alt=media&token=2b827392-47de-4ef8-84a8-1a980c6c4870', Validators.required],
      },
    );
  }

  ngOnInit(): void {
    this.locate = this.route.snapshot.params['_id'];
    if (this.locate !== undefined) {

      this.productService.searchProduct(this.route.snapshot.params['_id'])
        .subscribe(
          data => {
            this.currentProduct = data;
            this.form.patchValue(data);
          },
          error => {
            console.log(error);
          });

    }

  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  /* `onSubmit` is a function that is used to submit the form. */
  onSubmit(): void {
    this.submitted = true;
    //  Điều kiện check nếu tất cả giá trị hợp lệ thì thêm sp
    if (this.form.invalid) {
      return;
    }
    this.locate !== undefined ? this.updateProduct() : this.createProduct()
  }

  /* `createProduct` is a function that is used to create a product. */
  createProduct() {
    const old_price = this.form.controls['old_price'].value
    const price = this.form.controls['price'].value
    this.form.controls.old_price.patchValue(this.formatNumber(old_price))
    this.form.controls.old_price.patchValue(this.formatNumber(price))
    this.productService.create(this.form.value)
      .subscribe(
        response => {
          this.submitted = true;
          // thông báo
          Swal.fire({
            icon: 'success',
            title: 'Thêm sản phẩm thành công',
            showConfirmButton: false,
            timer: 1500
          })
          // this.newProduct();
          this.router.navigate(['/productList']);
        },
        error => {
          alert("Thêm sản phẩm thất bại")
        });
  }

  /* `updateProduct` is a function that is used to update a product. */
  updateProduct() {
    this.submitted = true;
    //  Điều kiện check nếu tất cả giá trị hợp lệ thì thêm sp
    if (this.form.invalid) {
      return;
    }

    Swal.fire({
      title: 'Bạn có muốn lưu sự thay đổi?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Lưu',
      denyButtonText: `không lưu`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Đã lưu!', '', 'success')
        const old_price = this.form.controls['old_price'].value
        const price = this.form.controls['price'].value
        this.form.controls.old_price.patchValue(this.formatNumber(old_price))
        this.form.controls.old_price.patchValue(this.formatNumber(price))
        this.productService.update(this.currentProduct._id, this.form.value)
          .subscribe(
            response => {
              this.router.navigate(['/productList']);
            },
            error => {
              console.log(error);
            });
      } else if (result.isDenied) {
        Swal.fire('Lưu không thay đổi', '', 'info')
      }
    })
  }

  /* `deleteProduct()` is a function that is used to delete a product. */
  deleteProduct(): void {
    Swal.fire({
      title: 'Bạn có chắc không?',
      text: "Bạn sẽ không thể hoàn nguyên điều này!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Vâng tôi chắc!',
      cancelButtonText: 'Huỷ'

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Xoá thành công',
          showConfirmButton: false,
          timer: 1500
        })
        this.productService.delete(this.currentProduct._id)
          .subscribe(
            response => {
              this.router.navigate(['/productList']);
            },
            error => {
              console.log(error);
            });
      }
    })
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    if (file) {
      this.uploadService.uploadImage(file).subscribe(progress => {
        this.uploadProgress$.next(progress);
        if (progress.progress === 100 && progress.url) {
          console.log(`Upload completed. URL: ${progress.url}`);
          // this.urlImage = progress.url;
          this.form.patchValue({
            img: progress.url
          });
        }
        if (progress.progress < 100 || (progress.progress === 100 && progress.url)) {
          this.percentage = Math.round(progress.progress ?? 0);
          console.log(`progress.progress: ${progress.progress}`);
          if (progress.progress === 100) {
            setTimeout(() => {
              this.percentage = 0
            }, 1000);
          }
        }
      });
    }
  }

  formatNumber(value: string) {
    return parseFloat(value.replace(/,/g, ''));
  }

}
