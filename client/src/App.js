import React from 'react';
import './App.css';
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";
import Header from "./components/Header";
import StudentSignIn from "./components/StudentSignIn";
import TutorSignIn from "./components/TutorSignIn";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
            <Route path="/student/signin">
              <StudentSignIn/>
            </Route>
          

            <Route path="/tutor/register">
              <TutorSignIn/>
            </Route>

            <Route path="/search">
              <SearchPage/>
            </Route>
          
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
