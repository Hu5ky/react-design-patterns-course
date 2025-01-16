// import './App.css';
import { SplitScreen } from './SplitScreen';

/*
 { name } - destructuring of name property from props
  : { name: string } - type annotation for the destructured name prop
  { name: string } - object type in TS
  ({ name } : { name: string }}) => - Param declaration for the arrow function
*/

// LeftHandComponent -> React functional component, it returns a ReactElement
// TypeScript type -> React.FC<{ name: string}>
const LeftHandComponent = ({ name }: { name: string }) => {
  return <h1 style={{backgroundColor: 'green'}}>{name}</h1>
}

//Prop annotation without destructuring 
const LeftHandComponent2 = (props: { name: string }) => {
  return <h1 style={{ backgroundColor: 'green' }}>{props.name}</h1>;
};

const RightHandComponent = ({ message } : { message: string }) => {
  return <p style={{backgroundColor: 'red'}}>{message}!</p>
}

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Jan"/>
        <RightHandComponent message='Howdy :) '/>
      </SplitScreen>
    </>
  )
}

export default App
