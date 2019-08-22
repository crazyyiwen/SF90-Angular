import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Injectable()

export class AuthGuard implements CanActivate{
    constructor(private authen: AuthenticationService, private router: Router){
        
    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean{
        // only if token is null will navigate to login
        if(this.authen.isAuthenticated()){
            return true;           
        }
        else{
            this.router.navigate(['/login']);
            return false;
        }
        
    }
}
