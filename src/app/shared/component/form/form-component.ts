import {Directive, Input, OnInit} from '@angular/core';
import {PoBreadcrumb, PoNotificationService} from '@po-ui/ng-components';
import {FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {finalize, first} from 'rxjs/operators';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class FormComponent<T> implements OnInit {

    @Input() title;
    @Input() breadcrumb: PoBreadcrumb;

    @Input() cancel: string;
    @Input() saveService: (item: T, id?: any) => Observable<T>;
    @Input() save: string | ((item?: T) => string);

    form: FormGroup;

    loading = false;

    protected constructor(
        protected router: Router,
        protected activatedRoute: ActivatedRoute,
        protected notificationService: PoNotificationService,
    ) {
    }

    ngOnInit(): void {
        this.buildForm();
    }

    abstract buildForm(): void;

    enterSubmit(item: () => T): void {
        this.handleSave(item());
    }

    handleCancel(): void {
        if (this.cancel) {
            this.router.navigateByUrl(this.cancel);
        }
    }

    handleSave(item: T): void {
        this.handleSubmit(item, this.save);
    }

    private handleSubmit(item: T, redirect: string | ((item: any) => string)): void {
        this.loading = true;
        this.form.markAllAsTouched();

        if (this.form.pending) {
            this.form.statusChanges
                .pipe(first())
                .subscribe(() => this.handleSubmit(item, redirect));
        } else if (this.form.valid) {
            this.saveService(item, this.activatedRoute.snapshot.paramMap.get('id'))
                .pipe(finalize(() => this.loading = false))
                .subscribe((result: T) => {
                    this.router.navigateByUrl(redirect instanceof Function ? redirect(result) : redirect);
                    this.form.reset();
                });
        } else {
            this.notificationService.warning('Formulário com dados inválidos, por favor, verifique antes de continuar.');
            this.loading = false;
        }
    }
}
