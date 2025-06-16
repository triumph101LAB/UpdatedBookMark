import { ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Observable } from "rxjs";


export class JwtAuthGuard extends AuthGuard('jwt'){

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        console.log('JwtAuthGuard canActivate called');
       return super.canActivate(context); 
    }
}