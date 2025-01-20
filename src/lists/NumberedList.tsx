import ListProps from './ListPropsInterface';

export const NumberedList: React.FC<ListProps> = ({ 
    itemComponent: ItemComponent,
    propName,
    items,
}) => {
    return (
        <>
            {items.map((item: any, i: number) => (
                <>
                    <h3>{i + 1}</h3>
                    <ItemComponent key={i} {...{ [propName]: item }} />
                </>
            ))}
        </>
    );
};

export default NumberedList