import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
//import { Routes, Route} from "react-router-dom";為 React v6.0的寫法
import HomeComponent from "./components/home-components";
import NavComponent from "./components/nav-component";
import RegisterComponent from "./components/register-component";
import LoginComponent from "./components/login-component";
import ProfileComponent from "./components/profile-component";
import AuthService from "./services/auth.service";
import CourseComponent from "./components/course-component";
import PostCourseComponent from "./components/postcourse-Component";
import EnrollComponent from "./components/enroll-component";

// React 5.6.1的寫法,(與老師的一樣)
function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <div>
      <NavComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route path="/" exact>
          <HomeComponent />
          </Route>
          <Route path="/register" exact>
            <RegisterComponent />
        </Route>
        <Route path="/login" exact>
            <LoginComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/profile" exact>
          <ProfileComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/course" exact>
          <CourseComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/postCourse" exact>
          <PostCourseComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/enroll" exact>
          <EnrollComponent currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
/*

/* 下列為 React v6.0的寫法
function App() {
  return (
    <div className="App">
      <NavComponent />
      <Routes>
      <Route path="/" element={<HomeComponent  />} />
      <Route path="/register" element={<Registercomponent />} />

      </Routes>   
    </div>
  );
}
/*
export default App;

/* React新版本的寫法
function App() {
  return (
    <div className="App">
     <Nav />
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />

      </Routes>
     <Footer />
    </div>
  );
}

    <Route path="/login" element={<LoginComponent />} />








/* 原本的樣版
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
/*/
