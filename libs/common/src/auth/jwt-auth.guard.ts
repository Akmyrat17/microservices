import { CanActivate, ExecutionContext, ForbiddenException, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { AUTH_SERVICE } from "./services";
import { ClientProxy } from "@nestjs/microservices";
import { catchError, Observable, tap } from "rxjs";
65876204
@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        @Inject(AUTH_SERVICE) private readonly authClient: ClientProxy
    ) { }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const authentication = this.getAuthentication(context)
        if (!authentication) throw new UnauthorizedException('Not authenticated')
        return this.authClient.send('validate_user', {
            Authentication: authentication
        }).pipe(
            tap((res) => {
                this.addUser(res, context)
            }),
            catchError(() => {
                throw new UnauthorizedException('Not authenticated')
            })
        );
    }

    private addUser(user: any, context: ExecutionContext) {
        if (context.getType() === 'rpc') {
            context.switchToRpc().getData().user = user
        } else if (context.getType() === 'http') {
            context.switchToHttp().getRequest().user = user
        }
    }

    private getAuthentication(context: ExecutionContext) {
        if (context.getType() === 'rpc') {
            return context.switchToRpc().getData().Authentication
        } else if (context.getType() === 'http') {
            return context.switchToHttp().getRequest().cookies?.Authentication
        }
    }
}