// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/siderbar';
import HelloMessage from './HelloMessage';
import House from './House';
import HelloWorldClassComponent,{HelloWorldClassComponent2} from './HelloWorldClassComponent';
import ConstructorClassComponent from './ConstructorClassComponent';
import Destructuring,{DestructuringFunctional} from './Destructuring';
import ClickEventFuncationalComponent from './ClickEventFuncationalComponent';

import Empolyee from './Empolyee';
import BindingExample from './BindingExample';
import ReactLifeCycleMounting from './ReactLifeCycleMounting';
import Updating1 from './Updating1';
import UnMounting from './UnMounting';


// let name = "Irfan Rajput";
let names = ['Irfan Rajput', 'Taha Ansari']; // Array of student names
// function App() {
//   return (
//     <>
//       <Header/>
//       <Footer/>

//       <HelloMessage names={names} age="26">
//         <p>childern element 1</p>
//       </HelloMessage>
      
//       <HelloMessage name="Taha Ansari" age="23">
//         <p>childern element 2</p>
//       </HelloMessage>

//       <Sidebar/>

//       <House/>
//     </>
//   );
// }
// const App = () => <h1>This is Arrow Function</h1> //if you want to to print single line you can use thi syntax

// this is Arrow function with multipl lines

// let stu_name  = 'Irfan Rajput'
const App = (props) => {
  return (
    <>
    {/* <h1>{props.name}</h1>
    <h1>This is Arrow Function with multipl lines</h1>
    <p>lhdjskafhsjkad jashdfjksahf jkashfdjksahdfjksahfjk</p>
    <HelloWorldClassComponent name={stu_name} age="25">
      <p>This is childern component example</p>
    </HelloWorldClassComponent>
    <HelloWorldClassComponent name="Taha Ansari" age="24">
      <ol>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ol>
    </HelloWorldClassComponent> */}
    {/* <HelloWorldClassComponent name="Syed Huzaifa" age={23}/>
    <HelloWorldClassComponent2/>
    <ConstructorClassComponent name="Irfan rajput"/>
    <Empolyee name="faraz khan"/>
    <Destructuring name="Taha Ansari" age={22}/>
    <DestructuringFunctional name="Irfan Rajput" age={25}/>


    <ClickEventFuncationalComponent name="Kashif Shaikh"/>
    <BindingExample/> */}
    {/* <ReactLifeCycleMounting city="Hyderabad"/>
    <Updating1/> */}
    <UnMounting/>
    </>
  );
}

export default App;
