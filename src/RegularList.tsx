import { Person } from './people/PersonInterface';

interface RegularListProps {
    itemComponent: React.ComponentType<any>;
    // itemComponent: React.ComponentType<{ person: Person }>;
    propName: string;
    items: Person[];
}

export const RegularList: React.FC<RegularListProps> = ({ 
    itemComponent: ItemComponent,
    propName,
    items,
}) => {
    return (
        <>
            {items.map((item: any, i: number) => (
                /*
                    - Dynamically render a new component called ItemComponent
                    - Set component key value to iterrated array index
                    - Use spread operator to assign an object to a computed property name
                    - { ['person]: personData }
                    - { person: { name: "John Doe", age: 54 } }
                */
                <ItemComponent key={i} {...{ [propName]: item }} />
            ))}
        </>
    );
};