import {Component, OnInit} from '@angular/core';
import {LoadingBarService} from '../loading-bar.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss'],
})
export class LoadingBarComponent implements OnInit {

    showLoading$: Observable<boolean>;

    constructor(
        private loadingBarService: LoadingBarService,
    ) {
    }

    ngOnInit(): void {
        this.showLoading$ = this.loadingBarService
            .getShowLoading();
    }

}
