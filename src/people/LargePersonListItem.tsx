interface Person {
    name: string;
    age: number;
    hairColor: string;
    hobbies: Array<string>;
}

export const LargePersonListItem: React.FC<Person> = ( person ) => {
    const { name, age, hairColor, hobbies } = person;
    return (
        <>
            <h3>Name: {name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor} years</p>
            <h3>Hobbies:</h3>
            <ul>
                {hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
            </ul>
        </>
    );
}