import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()
export class AuthinterceptorService implements HttpInterceptor {

    intercept(req, next) {
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1ZDhlYzRiMmMxOTRhNDExODg5Yjk2MzEifQ.Wg9SvJLZG7WXNGkFlmoBPZmaDjr40OIbNqSIKWFWyac')
        })
        return next.handle(authRequest)
    }
}