import React, { Fragment, useState} from "react";
import { Route, Switch } from "react-router";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import Main from "./components/Main/Main";
import ReportsPage from "./components/ReportsPage/ReportsPage.jsx";
import Candidates from "./components/Candidates/Candidates.jsx";

import "./App.css";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  
  return (
    <Fragment>
    {!isLoggedIn ? 
      <LoginForm  onLogin={setIsLoggedIn}/> 
      :
      <Main>
        <Header />
        <Switch>
          <Route exact path="/">
            <Candidates setIsLoggedIn={setIsLoggedIn}/>
          </Route>
          <Route exact path="/reports/:id">
            <ReportsPage setIsLoggedIn={setIsLoggedIn} />
          </Route>
        </Switch>
        <Footer />
      </Main>
}
      </Fragment>
  )
}

export default App;
