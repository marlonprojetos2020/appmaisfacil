import { Component, Input, OnInit } from '@angular/core';
import { PoPageAction, PoSelectOption, PoTableAction, PoTableColumnSort, PoTableColumnSortType } from '@po-ui/ng-components';
import { PoPageDynamicSearchFilters } from '@po-ui/ng-templates';
import { DatatableColumn } from './datatable-column';
import { finalize } from 'rxjs/operators';
import { PageDatatableService } from './page-datatable.service';

@Component({
    selector: 'app-page-datable',
    templateUrl: './page-datable.component.html',
})
export class PageDatatableComponent implements OnInit {

    @Input() serviceApi: string;

    // page search props
    @Input() title;
    @Input() pageActions: PoPageAction[];

    // table props
    @Input() columns: DatatableColumn[];
    @Input() tableActions: PoTableAction[];

    @Input() size = 10;

    filters: PoPageDynamicSearchFilters[];
    currentFilters: any = {};

    // items: any[];
    loading = false;
    loadingShowMore = false;
    showMoreDisabled = false;
    selectable = false;
    tableColumnSort: PoTableColumnSort;

    currentPage: number;

    items = [
        {
            status: 'Pendente',
            titulo: 'Imposto de Renda',
            tipo: 'Imposto',
            vencimento: '28/10/2020',
            valor: 'R$ 200,00',
        },
        {
            status: 'Pendente',
            titulo: 'Imposto de Renda',
            tipo: 'Imposto',
            vencimento: '28/10/2020',
            valor: 'R$ 200,00',
        },
        {
            status: 'Pendente',
            titulo: 'Imposto de Renda',
            tipo: 'Imposto',
            vencimento: '28/10/2020',
            valor: 'R$ 200,00',
        },
    ];

    constructor(private pageDatatableService: PageDatatableService) {}


    ngOnInit(): void {
        this.buildAdvancedSearch();
        this.loadItems();
    }

    loadItems(): void {
        this.items = [];
        this.currentPage = 1;
        this.loading = true;
        this.updateData();
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
                    this.showMoreDisabled = !result.hasNext;
                    this.items.push(...result.items);
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

    // BUSCA AVANÇADA
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

    // HANDLER PARA PESQUISA
    handleQuickSearch(searchValue: string): void {
        searchValue ? this.currentFilters.search = searchValue : delete this.currentFilters.search;
        this.loadItems();
    }

    // HANDLER PARA PESQUISA AVANÇADA
    handleAdvancedSearch(advancedSearch: any[]): void {
        this.currentFilters = advancedSearch;
        this.loadItems();
    }

    // HANDLER DE MUDANÇA NOS DISCLAIMERS
    handleChangeDisclaimers(disclaimers: any[]): void {
        this.currentFilters = {};
        disclaimers.forEach(disclaimer => this.currentFilters[disclaimer.property] = disclaimer.value);
        this.loadItems();
    }

    // EVENTO DISPARADO QUANDO CAREGA MAIS RESULTADOS
    showMore(tableColumnSort: PoTableColumnSort): void {
        this.tableColumnSort = tableColumnSort;
        this.updateData();
    }

    // ORGANIZAR
    sortBy(tableColumnSort: PoTableColumnSort): void {
        this.tableColumnSort = tableColumnSort;
        if (!this.tableColumnSort || !this.isSortDisabled(this.tableColumnSort.column.property)) {
            this.loadItems();
        }
    }

    // 
    customColumns(): DatatableColumn[] {
        return this.columns
            .filter(column => column.customValue);
    }
}
