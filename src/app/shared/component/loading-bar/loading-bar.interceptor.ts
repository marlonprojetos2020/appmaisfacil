import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoadingBarService} from './loading-bar.service';
import {finalize} from 'rxjs/operators';

@Injectable()
export class LoadingBarInterceptor implements HttpInterceptor {

    constructor(
        private loadingBarService: LoadingBarService,
    ) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        this.loadingBarService.start();
        return next.handle(request)
            .pipe(finalize(() => this.loadingBarService.stop()));
    }
}
