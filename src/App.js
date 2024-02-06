import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Employees } from "./components/employees/Employees";
import { UseStateDemo } from "./components/UseStateDemo";


function App() {

  var title = "Employee Application";
  var employee = {
    id: 1,
    name: "John",
    age: 25
  }
 

  return (
    <div className="App">
      <UseStateDemo/>
      {/* <Employees title = {title} employee = {employee}/> */}
      {/* <Header/>
      <Home/>
      <Footer/>   */}
    </div>
    
  );
}

export default App;
