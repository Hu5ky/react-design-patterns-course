import { RecursiveComponent } from "./components/RecursiveComponent";
import { DangerButton, BigSuccessButton } from "./components/composition";

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

function App() {
	return (
		<>
    <h1>Your code goes here</h1>
    <DangerButton text="Absolutely don't click here"/>
    <BigSuccessButton text="This one is safe"/>
    </>
	);
}

export default App;