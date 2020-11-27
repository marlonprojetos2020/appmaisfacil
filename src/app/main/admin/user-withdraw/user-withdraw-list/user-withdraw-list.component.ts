import {Component, OnInit} from '@angular/core';
import {PoBreadcrumb, PoDialogService} from '@po-ui/ng-components';
import {ActivatedRoute} from '@angular/router';
import {UserWithdrawPage} from '../user-withdraw-page';
import {UserTransactionReason} from '../../../user-balance/model/user-transaction-reason';
import {UserTransactionType} from '../../../user-balance/model/user-transaction-type';
import {UserWithdraw} from '../user-withdraw';
import {UserWithdrawService} from '../user-withdraw.service';
import {finalize} from 'rxjs/operators';

@Component({
    selector: 'app-user-withdraw-list',
    templateUrl: './user-withdraw-list.component.html',
    styleUrls: ['./user-withdraw-list.component.scss'],
})
export class UserWithdrawListComponent implements OnInit {

    userWithdrawPage: UserWithdrawPage;
    page = 1;

    description = '';

    breadcrumb: PoBreadcrumb = {
        items: [
            {label: 'Dashboard', link: '/admin'},
            {label: 'Solicitações de saque'},
        ],
    };
    loading = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private userWithdrawService: UserWithdrawService,
        private poDialog: PoDialogService,
    ) {
    }

    ngOnInit(): void {
        this.userWithdrawPage = this.activatedRoute.snapshot.data.userWithdrawPage;
    }

    load(): void {
        this.loading = true;
        this.userWithdrawService
            .find(this.description, 'USER_WITHDRAW', this.page.toString())
            .pipe(finalize(() => this.loading = false))
            .subscribe(p => {
                this.userWithdrawPage.hasNext = p.hasNext;
                this.userWithdrawPage.items.push(...p.items);
            });
    }

    userWithdrawReason(userWithdraw: UserWithdraw): string {
        return UserTransactionReason[userWithdraw.reason];
    }

    isIn(userWithdraw: UserWithdraw): boolean {
        return userWithdraw.type === UserTransactionType.IN;
    }

    isOut(userWithdraw: UserWithdraw): boolean {
        return userWithdraw.type === UserTransactionType.OUT;
    }

    loadMore(): void {
        this.page++;
        this.load();
    }

    consolidate(userWithdraw: UserWithdraw): void {
        if (!userWithdraw.consolidated) {
            this.poDialog.confirm({
                title: 'Consolidar saque',
                message: `Tem certeza que deseja consolidar o saque #${userWithdraw.id} de ${userWithdraw.user.name}?`,
                confirm: () => {
                    userWithdraw.consolidated = true;
                    this.userWithdrawService.consolidate(userWithdraw.id)
                        .subscribe(() => userWithdraw.consolidated = true, () => userWithdraw.consolidated = false);
                },
            });
        }
    }

    refund(userWithdraw: UserWithdraw): void {
        if (!userWithdraw.refund) {
            this.poDialog.confirm({
                title: 'Extornar saque',
                message: `Tem certeza que deseja extornar o saque #${userWithdraw.id} de ${userWithdraw.user.name}?`,
                confirm: () => {
                    userWithdraw.refund = true;
                    this.userWithdrawService.refund(userWithdraw.id, 'Extornado pelo administrador')
                        .subscribe(() => {
                            userWithdraw.consolidated = true;
                            userWithdraw.refund = true;
                        }, () => userWithdraw.refund = false);
                },
            });
        }
    }
}
