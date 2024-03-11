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
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { UseEffectDemo } from "./components/UseEffectDemo";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { ApiDemo3 } from "./components/api/ApiDemo3";
import { ApiDemo4 } from "./components/api/ApiDemo4";
import { UserForm } from "./components/forms/UserForm";
import { UserRegForm } from "./components/forms/UserRegForm";
import { AddUserForm } from "./components/forms/AddUserForm";
import { UpdateUser } from "./components/api/UpdateUser";
import { LoginEmployee } from "./components/LoginEmployee";
import { Sidebar } from "./components/Sidebar";
import { Navbar1 } from "./components/Navbar1";
import { ServiceProciderDashboard } from "./components/serviceprovider/ServiceProciderDashboard";
import { UserDashboard } from "./components/user/UserDashboard";
import { AddService } from "./components/serviceprovider/AddService";
import { DyanmicSidebar } from "./components/DyanmicSidebar";
import { Products } from "./components/Products";
import { BankComponent } from "./components/BankComponent";
import { FileUploadDemo } from "./components/FileUploadDemo";
import { HtmlToPdf } from "./components/HtmlToPdf";
import { PieChartDemo } from "./components/PieChartDemo";
import { ProductComponent } from "./components/api/ProductComponent";

function App() {
  var title = "Employee Application";
  var employee = {
    id: 1,
    name: "John",
    age: 25,
  };
  
  const path = window.location.pathname;
  console.log("Path: " + path);

  return (
    <body >
      <div ></div>
        <Navbar/>
        
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path ="/" element ={<LoginEmployee/>}></Route>
            <Route path = "/serviceprovider" element = {<ServiceProciderDashboard/>}></Route>
            <Route path  ="/serviceprovider/addservice" element = {<AddService/>}></Route>
            <Route path = "/userdashboard" element = {<UserDashboard/>}></Route>
            <Route path="/netflix/home" element={<NetflixHome />}></Route>
            <Route path="/netflix/movies" element={<NetflixMovies />}></Route>
            <Route path="/netflix/shows" element={<NetflixShows />}></Route>
            <Route path ="/dynamicSiderbar" element = {<DyanmicSidebar/>}></Route>
            <Route path = "/products" element = {<Products/>}></Route>
            <Route path = "/bank" element = {<BankComponent/>}></Route>
            <Route
              path="/netflix/movies/thriller"
              element={<ThrillerMovie />}
            ></Route>
            <Route
              path="/netflix/movies/action"
              element={<ActionMovie />}
            ></Route>
            <Route
              path="/netflix/shows/detail/:id"
              element={<NetflixShowsDetail />}
            ></Route>
            <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
            <Route path="/useeffectdemo" element={<UseEffectDemo />}></Route>
            <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
            <Route path="/apidemo3" element={<ApiDemo3 />}></Route>
            <Route path="/apidemo4" element={<ApiDemo4 />}></Route>
            <Route path="/userform" element={<AddUserForm />}></Route>
            <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
            <Route path="/login" element={<LoginEmployee />}></Route>
            <Route path = "/fileupload" element = {<FileUploadDemo/>}></Route>
            <Route path = "/htmltopdf" element = {<HtmlToPdf/>}></Route>
            <Route path = "/piechart" element = {<PieChartDemo/>}></Route>
            <Route path = "/prodcomp" element = {<ProductComponent/>}></Route>

            {/* <Route path ="/*" element = {<h1>404</h1>}></Route> */}
            <Route path="/*" element={<Error404 />}></Route>
          </Routes>
        
      {/* </main> */}

      {/* <UserComponent/> */}
      {/* <UseStateDemo/> */}
      {/* <Employees title = {title} employee = {employee}/> */}
      {/* <Header/>
      <Home/>
      <Footer/>   */}
    </body>
  );
}

export default App;
