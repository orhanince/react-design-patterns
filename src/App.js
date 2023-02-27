import './App.css';
import {SplitScreen, RegularList, NumberedList, Modal} from './components';
import {SmallPersonListItem} from "./people/SmallPersonListItem";
import {LargePersonListItem} from "./people/LargePersonListItem";
import {SmallProductListItem} from "./product/SmallProductListItem";
import {LargeProductListItem} from "./product/LargeProductListItem";

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

const products = [{
    name: 'Product 1',
    price: '100$',
    description: 'Description for product 1',
    rating: '4.1'
},{
    name: 'Product 2',
    price: '120$',
    description: 'Description for product 2',
    rating: '4.2'
},{
    name: 'Product 3',
    price: '120$',
    description: 'Description for product 3',
    rating: '4.3'
},{
    name: 'Product 4',
    price: '140$',
    description: 'Description for product 4',
    rating: '4.4'
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
          <RegularList
              items={products}
              resourceName={"product"}
              itemComponent={SmallProductListItem}
          />
          <NumberedList
              items={products}
              resourceName={"product"}
              itemComponent={LargeProductListItem}
          />
          <Modal showText={"Show Modal"} hideText={"Hide Modal"}>
              <LargeProductListItem product={products[0]}/>
          </Modal>
      </>
  );
}

export default App;
