import { User } from '../UserInterface';
import { Product } from '../ProductInterface';

export interface ListProps {
    itemComponent: React.ComponentType<any>;
    // itemComponent: React.ComponentType<{ person: Person }>;
    propName: string;
    items: User[] | Product[];
}

export default ListProps