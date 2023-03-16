import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {

    // constructor(private accessTokenService: AccesstokenService) { }
    constructor() { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const accessToken = this.accessTokenService.getAccessToken();
        const accessToken = "this.accessTokenService.getAccessToken()";
        // console.log(accessToken);

        const apiReq = req.clone({
            url: `${environment.apiPrefixUrl}${req.url}`,
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`,
            }),
        });
        // console.log(apiReq);
        return next.handle(apiReq)
    }

    //   handleResponse(req: HttpRequest<any>, event) {
    //   }

    //   handleError(req: HttpRequest<any>, error) {}
}
