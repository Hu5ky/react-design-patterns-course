import { Person } from '../people/PersonInterface';
import { Product } from '../products/ProductInterface';

export interface ListProps {
    itemComponent: React.ComponentType<any>;
    // itemComponent: React.ComponentType<{ person: Person }>;
    propName: string;
    items: Person[] | Product[];
}

export default ListProps