import { AuthGuard } from "@nestjs/passport";
import { Injectable,ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
export class LocalGuard extends AuthGuard('local'){

    canActivate(context: ExecutionContext,

    ): boolean | Promise<boolean> | Observable<boolean> {
        console.log('Hello World');
        return super.canActivate(context); // Returns the result of the parent class's canActivate method
    }
}