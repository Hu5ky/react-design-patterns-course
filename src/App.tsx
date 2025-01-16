// import './App.css';
import { LargePersonListItem } from './people/LargePersonListItem.tsx';
import { SmallPersonListItem } from './people/SmallPersonListItem.tsx';
import { RegularList } from './RegularList.tsx';

const peopleData = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

function App() {
  return (
    <>
      <RegularList
          items={peopleData}
          resourceName="person"
          itemComponent={SmallPersonListItem}
      />
      <RegularList
          items={peopleData}
          resourceName="person"
          itemComponent={LargePersonListItem}
      />
    </>
  )
}

export default App