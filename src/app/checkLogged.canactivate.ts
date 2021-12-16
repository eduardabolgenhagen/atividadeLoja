import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()
class CheckLogged implements CanActivate {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot

    ): boolean | Observable<boolean> | Promise<boolean> {
        console.log('Dentro')

        let user = localStorage.getItem('user');

        if (user) {
            return true;
        } else {
            this.router.navigate(['/'])
            return false;
        }
        return true;
    }
}

export default CheckLogged;