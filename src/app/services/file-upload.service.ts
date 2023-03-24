import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/compat/storage'
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage) { }

  uploadImage(file: File): Observable<{ url: string, progress: number }> {
    const path = `images/${file.name}`;
    const ref = this.storage.ref(path);
    const task = this.storage.upload(path, file);

    // Thực hiện tính năng tính toán tiến trình của tác vụ
    const progress$ = task.percentageChanges();

    // Tạo observable để trả về URL khi tác vụ upload thành công
    const url$ = new Observable<{ url: string, progress: number }>(observer => {
      let url: string; // khởi tạo biến url
      task.snapshotChanges().pipe(
        finalize(() => {
          ref.getDownloadURL().subscribe(downloadUrl => {
            url = downloadUrl; // gán giá trị cho biến url
            observer.next({ url, progress: 100 });
            observer.complete();
          });
        })
      ).subscribe();
    });

    // Kết hợp progress$ và url$ thành một observable duy nhất
    return new Observable<{ url: string, progress: number }>(observer => {
      progress$.subscribe(progress => {
        if (progress !== undefined) {
          observer.next({ url: '', progress });
        }
      });
      url$.subscribe(url => observer.next(url));
    });
  }
}