import { Injectable, NestInterceptor, ExecutionContext, CallHandler, ForbiddenException } from "@nestjs/common";
import { Observable } from "rxjs";
@Injectable()
export class ForbidTinubuInterceptor implements NestInterceptor{

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // Check the username in the Body (signup/login), or in the user

        const req = context.switchToHttp().getRequest();
        const username = req.body?.username 
        || req.user?.username;

        if (username && username.toLowerCase() === 'tinubu'){
            throw new ForbiddenException('Access Denied Mr President',);
        }
        return next.handle();
    }
}