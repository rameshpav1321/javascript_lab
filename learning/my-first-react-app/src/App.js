import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import Form from "./components/Form";
import RefsDemo from "./components/RefsDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ContextDemoC from "./components/ContextDemoC";
import { UserProvider } from "./components/UserContext";
function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Welcome name="this is class comp" /> */}
      {/* <Hello name="tony"> */}
      {/* <p>This is props children content</p> */}
      {/* </Hello> */}
      {/* <Hello name="pepper" /> */}
      {/* <Hello name="peter" /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <NameList /> */}
      {/* <Form /> */}
      {/* <RefsDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
      <Hero heroName="Superman" />
      <Hero heroName="Batman" /> */}

      {/* <UserProvider value="prp"> */}
      <ContextDemoC />
      {/* </UserProvider> */}
    </div>
  );
}

export default App;
