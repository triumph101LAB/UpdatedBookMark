
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { ExecutionContextHost } from "@nestjs/core/helpers/execution-context-host";

export const GetUser = createParamDecorator(
 (data: unknown, ctx:ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
 }


);