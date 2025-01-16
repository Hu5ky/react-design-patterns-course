interface Person {
    name: string;
    age: number;
}

export const SmallPersonListItem: React.FC<Person> = ({ name, age }) => {
    return (
        <p>Name: {name}, Age: {age} years</p>
    );
}