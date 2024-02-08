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
import { ThrillerMovie } from "./components/netflix/ThrillerMovie";
import { ActionMovie } from "./components/netflix/ActionMovie";
import { NetflixShowsDetail } from "./components/netflix/NetflixShowsDetail";
import { Error404 } from "./components/Error404";

function App() {
  var title = "Employee Application";
  var employee = {
    id: 1,
    name: "John",
    age: 25,
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path ="/" element ={<Home/>}></Route>
        <Route path="/netflix/home" element={<NetflixHome />}></Route>
        <Route path="/netflix/movies" element={<NetflixMovies />}></Route>
        <Route path="/netflix/shows" element={<NetflixShows />}></Route>
        <Route path = "/netflix/movies/thriller" element = {<ThrillerMovie/>}></Route>
        <Route path ="/netflix/movies/action" element ={<ActionMovie/>}></Route>
        <Route path ="/netflix/shows/detail/:id" element = {<NetflixShowsDetail/>}></Route>
        {/* <Route path ="/*" element = {<h1>404</h1>}></Route> */}
        <Route path = "/*" element = {<Error404/>}></Route>
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
