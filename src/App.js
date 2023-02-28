import './App.css';
import React, {useState} from 'react';
import {
    SplitScreen,
    RegularList,
    NumberedList,
    Modal,
    CurrentUserLoader,
    UserInfo,
    UserLoader,
    ResourceLoader,
    ProductInfo,
    UnControlledForm,
    ControlledForm,
    ControlledModal,
    UnControlledOnBoardingFlow,
    ControlledOnBoardingFlow
} from './components';
import {SmallPersonListItem} from "./people/SmallPersonListItem";
import {LargePersonListItem} from "./people/LargePersonListItem";
import {SmallProductListItem} from "./product/SmallProductListItem";
import {LargeProductListItem} from "./product/LargeProductListItem";
import {printProps} from './printProps';
import {withUser} from './withUser';
import { UserInfoForm } from './UserInfoForm';

const UserInfoLoader = withUser(UserInfo, '234');
const UserInfoWrapped = printProps(UserInfo);


const StepOne = ({ goToNext }) => (
    <>
        <h1>Step 1!</h1>
        <button onClick={() => goToNext({ name: 'John Doe' })}>Next</button>
    </>
);
const StepTwo = ({ goToNext }) => (
    <>
        <h1>Step 2!</h1>
        <button onClick={() => goToNext({ age: 100 })}>Next</button>
    </>
);
const StepThree = ({ goToNext }) => (
    <>
        <h1>Step 3!</h1>
        <button onClick={() => goToNext({ hairColor: 'brown' })}>Next</button>
    </>
);

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
    const [onBoardingData, setOnBoardingData] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = stepData => {
        setCurrentIndex(currentIndex + 1);
        setOnBoardingData({...onBoardingData, ...stepData});
    }

    const [shouldShowModal, setShouldShowModal] = useState(false);
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
          <CurrentUserLoader>
              <UserInfo/>
          </CurrentUserLoader>

          <UserLoader userId={"234"}>
              <UserInfo />
          </UserLoader>
          <ResourceLoader resourceUrl={"/users/345"} resourceName={"user"}>
                <UserInfo/>
          </ResourceLoader>
          <ResourceLoader resourceUrl={"/products/1234"} resourceName={"product"}>
              <ProductInfo/>
          </ResourceLoader>
          <UnControlledForm/>
          <ControlledForm/>
          <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => setShouldShowModal(false)} hideText={"Hide Modal"}>
            <h1>Hello!</h1>
          </ControlledModal>
          <button onClick={() => setShouldShowModal(!shouldShowModal)}>{
              shouldShowModal ? "Hide" : "Show"
          }</button>

          <UnControlledOnBoardingFlow onFinish={() => alert("Finished!")}>
              <StepOne/>
              <StepTwo/>
              <StepThree/>
          </UnControlledOnBoardingFlow>

          <ControlledOnBoardingFlow
              currentIndex={currentIndex}
              onNext={onNext}
              onFinish={() => alert("Finished!")}>
                <StepOne/>
                <StepTwo/>
                <StepThree/>
          </ControlledOnBoardingFlow>
          <UserInfoWrapped name={"John Doe"} age={100} hairColor={"brown"}/>
          <UserInfoLoader name={"John Doe"} age={100} hairColor={"brown"}/>
          <UserInfoForm/>
      </>
    );
}

export default App;
