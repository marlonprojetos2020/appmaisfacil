import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingBarService {

    private showLoading = new BehaviorSubject<boolean>(false);

    constructor() {
    }

    public getShowLoading(): Observable<boolean> {
        return this.showLoading.asObservable();
    }

    public start(): void {
        this.showLoading.next(true);
    }

    public stop(): void {
        this.showLoading.next(false);
    }
}
