
import{ createParamDecorator, ExecutionContext } from '@nestjs/common';
export const UserId = createParamDecorator(
    (data: unknown, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();

        // Adjust the property name if needed

        return request.user?.userId || request.user?._id || request.user?.id;
    }
)