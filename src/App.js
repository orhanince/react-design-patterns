import './App.css';
import {SplitScreen} from './components/SplitScreen';
import {RegularList} from './components/RegularList';
import {SmallPersonListItem} from "./people/SmallPersonListItem";
import {LargePersonListItem} from "./people/LargePersonListItem";

const people = [{
  name: 'Person 1',
  age: 1,
  hobbies: ['a','b','c']
},{
  name: 'Person 2',
  age: 2,
  hobbies: ['d','e','f']
},{
  name: 'Person 3',
  age: 3,
  hobbies: ['g','h','i']
}];

const LeftHandComponent = ({name}) => {
  return <h1 style={{backgroundColor: 'green'}}>{name}</h1>
};

const RightHandComponent = ({message}) => {
  return <p style={{backgroundColor: 'red'}}>{message}</p>
};

function App() {
  return (
      <>
        <SplitScreen
            leftWeight={1}
            rightWeight={3}
        >
          <LeftHandComponent name={"React!"}/>
          <RightHandComponent message={"Message!"}/>
        </SplitScreen>
        <RegularList
        items={people}
        resourceName={"person"}
        itemComponent={SmallPersonListItem}
        />
          <RegularList
              items={people}
              resourceName={"person"}
              itemComponent={LargePersonListItem}
          />
      </>
  );
}

export default App;
