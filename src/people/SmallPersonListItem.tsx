interface Person {
    name: string;
    age: number;
    hairColor: string;
    hobbies: string[];
}

export const SmallPersonListItem = ({ person }: { person: Person }) => {
    return (
        <p>Name: {person.name}, Age: {person.age} years</p>
    );
}

export default SmallPersonListItem