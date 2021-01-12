import { Component, Input, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoSelectOption, PoTableAction, PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';
import { PageDatatableService } from './page-datatable.service';
import { finalize } from 'rxjs/operators';
import { DatatableColumn } from './datatable-column';
import { PoPageDynamicSearchFilters } from '@po-ui/ng-templates';

@Component({
    selector: 'app-page-datatable',
    templateUrl: './page-datatable.component.html',
    styleUrls: ['./page-datatable.component.scss'],
})
export class PageDatatableComponent implements OnInit {

    @Input() serviceApi: string;

    // page search props
    @Input() title;
    @Input() breadcrumb: PoBreadcrumb;
    @Input() pageActions: PoPageAction[];

    // table props
    @Input() columns: DatatableColumn[];
    @Input() tableActions: PoTableAction[];

    @Input() size = 10;

    filters: PoPageDynamicSearchFilters[];
    currentFilters: any = {};

    items: any[];
    loading = false;
    loadingShowMore = false;
    showMoreDisabled = false;
    selectable = false;
    tableColumnSort: PoTableColumnSort;

    currentPage: number;

    constructor(
        private pageDatatableService: PageDatatableService,
    ) {
    }

    ngOnInit(): void {
        this.buildAdvancedSearch();

        this.loadItems();
    }

    customColumns(): DatatableColumn[] {
        return this.columns
            .filter(column => column.customValue);
    }

    loadItems(): void {
        this.items = [];
        this.currentPage = 1;
        this.loading = true;
        this.updateData();
    }

    showMore(tableColumnSort: PoTableColumnSort): void {
        this.tableColumnSort = tableColumnSort;
        this.updateData();
    }

    sortBy(tableColumnSort: PoTableColumnSort): void {
        this.tableColumnSort = tableColumnSort;
        if (!this.tableColumnSort || !this.isSortDisabled(this.tableColumnSort.column.property)) {
            this.loadItems();
        }
    }

    handleQuickSearch(searchValue: string): void {
        searchValue ? this.currentFilters.search = searchValue : delete this.currentFilters.search;
        this.loadItems();
    }

    handleAdvancedSearch(advancedSearch: any[]): void {
        this.currentFilters = advancedSearch;
        this.loadItems();
    }

    handleChangeDisclaimers(disclaimers: any[]): void {
        this.currentFilters = {};
        disclaimers.forEach(disclaimer => this.currentFilters[disclaimer.property] = disclaimer.value);
        this.loadItems();
    }

    private updateData(): void {
        this.loadingShowMore = true;

        this.pageDatatableService.load(
            this.serviceApi,
            this.params(),
        )
            .pipe(finalize(() => {
                this.loading = false;
                this.loadingShowMore = false;
            }))
            .subscribe(
                result => {
                    console.log(result);
                    this.showMoreDisabled = !result.hasNext;
                    if (result.items) {
                        this.items.push(...result.items.map(item => this.flattenObject(item)));
                    } else {
                        this.items.push(...result.map(item => this.flattenObject(item)));
                    }
                },
            );
    }

    private params(): any {
        return {
            ...this.currentFilters,
            ...this.sortParams(),
            page: this.currentPage++,
            size: this.size,
        };
    }

    private sortParams(): { sort?: string } {
        if (!this.tableColumnSort || this.isSortDisabled(this.tableColumnSort.column.property)) {
            return {};
        }

        return { sort: `${this.tableColumnSort.column.property},${this.tableColumnSortType(this.tableColumnSort.type)}` };
    }

    private tableColumnSortType(type: PoTableColumnSortType): string {
        if (type === PoTableColumnSortType.Ascending) {
            return 'asc';
        } else {
            return 'desc';
        }
    }

    private isSortDisabled(property: string): boolean {
        const datatableColumn = this.columns.find(value => value.property === property);
        return datatableColumn.disableSort === true || !!datatableColumn.customValue;
    }

    private buildAdvancedSearch(): void {
        this.filters = [
            {
                property: 'search',
                label: 'Pesquisar',
                gridColumns: 6,
                gridSmColumns: 12,
            },
            {
                property: 'searchBy',
                label: 'Filtrando por',
                options: this.searchByValues(),
                optionsMulti: true,
                gridColumns: 6,
                gridSmColumns: 12,
            },
        ];
    }

    private searchByValues(): PoSelectOption[] {
        return this.columns
            .filter(column => column.disableSearch !== true)
            .map(column => ({
                value: column.searchProperty ? column.searchProperty : column.property,
                label: column.label,
            }));
    }

    private flattenObject = function (ob) {
        const toReturn = {};
        let flatObject;
        for (const i in ob) {
            if (!ob.hasOwnProperty(i)) {
                continue;
            }
            if ((typeof ob[i]) === 'object') {
                flatObject = this.flattenObject(ob[i]);
                for (const x in flatObject) {
                    if (!flatObject.hasOwnProperty(x)) {
                        continue;
                    }
                    toReturn[i + (!!isNaN(parseInt(x)) ? '.' + x : '')] = flatObject[x];
                }
            } else {
                toReturn[i] = ob[i];
            }
        }
        return toReturn;
    };
}
