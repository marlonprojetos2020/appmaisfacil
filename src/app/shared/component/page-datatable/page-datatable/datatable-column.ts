import {PoTableColumn} from '@po-ui/ng-components';
import {PoPageDynamicSearchFilters} from '@po-ui/ng-templates';

export interface DatatableColumn extends PoTableColumn {
    key?: boolean;
    badgePoColor?: string;
    customValue?: (value: any) => any[];
    poPageDynamicSearchFilters?: PoPageDynamicSearchFilters;
    searchProperty?: string;
    disableSearch?: boolean;
    disableSort?: boolean;
}
