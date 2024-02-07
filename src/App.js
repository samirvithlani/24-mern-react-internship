import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Employees } from "./components/employees/Employees";
import { UseStateDemo } from "./components/UseStateDemo";
import { UserComponent } from "./components/users/UserComponent";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/netflix/NetflixHome";
import { NetflixMovies } from "./components/netflix/NetflixMovies";
import { NetflixShows } from "./components/netflix/NetflixShows";
import { Navbar } from "./components/Navbar";

function App() {
  var title = "Employee Application";
  var employee = {
    id: 1,
    name: "John",
    age: 25,
  };

  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path ="/netflix/home" element = {<NetflixHome/>}></Route>
        <Route path = "/netflix/movies" element = {<NetflixMovies/>}></Route>
        <Route path ="/netflix/shows" element ={<NetflixShows/>}></Route>
      </Routes>

      {/* <UserComponent/> */}
      {/* <UseStateDemo/> */}
      {/* <Employees title = {title} employee = {employee}/> */}
      {/* <Header/>
      <Home/>
      <Footer/>   */}
    </div>
  );
}

export default App;
