import { Injectable } from "@angular/core";
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/services/auth.service";
import { Role } from "../models/role.models";

@Injectable({
    providedIn: "root",
})
export class RoleGuard implements CanActivate, CanActivateChild {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        let url: string = state.url;
        return this.checkUserRole(next, url);
    }
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.canActivate(next, state);
    }
    checkUserRole(route: ActivatedRouteSnapshot, url: any): boolean {
        const user = this.authService.getAuth;
        // if (user) {
        //     if (user.roles === Role.SuperAdmin) {
        //         return true;
        //     } else {
        //         const matchCode = user.code.indexOf(route.data.code);
        //         // check if route is restricted by role\
        //         if (route.data.code && matchCode === -1) {
        //             // role not authorized so redirect to home page
        //             this.router.navigate(["/error/denied"]);
        //             return false;
        //         }
        //         // authorized so return true
        //         return true;
        //     }
        // }

        // not logged in so redirect to login page with the return url
        this.router.navigate(["/account/login"], {
            queryParams: { returnUrl: url },
        });
        return false;
    }
}
