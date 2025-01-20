import ListProps from './ListPropsInterface';

export const RegularList: React.FC<ListProps> = ({ 
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