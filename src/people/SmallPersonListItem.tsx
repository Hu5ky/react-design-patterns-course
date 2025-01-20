import { Person } from './PersonInterface';


/*
export const SmallPersonListItem = (props: { person: Person }) => {
- Accept param person of type Person in component props
export const SmallPersonListItem = ({ person }: { person: Person }) => {
- Accept param person of type Person and destructure it from the component props
export const SmallPersonListItem = (person: Person) => {
- Accept param of type Person, no props, bad React code 
*/
export const SmallPersonListItem = ({ person }: { person: Person }) => {
    const { name, age } = person;
    return (
        <p>Name: {name}, Age: {age} years</p>
    );
}

export default SmallPersonListItem