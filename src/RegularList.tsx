interface RegularListProps {
    items: any;
    resourceName: string;
    itemComponent: any;
}

export const RegularList: React.FC<RegularListProps> = ({ 
    items, 
    resourceName, 
    itemComponent: ItemComponent 
}) => {
    return (
        <>
            {items.map((item: any, i: number) => (
                <ItemComponent key={i} {...{ [resourceName]: item}} />
            ))}
        </>
    );
};