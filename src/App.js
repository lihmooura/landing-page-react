import React from 'react';
import './App.css';
import BestServices from './Screens/BestServices - Third/BestServices';
import HomePage from './Screens/Home - First/HomePage';
import JoinOurMembership from './Screens/JoinOurMembership - Fifth/JoinOurMembership';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReadOurBlog from './Screens/ReadOurBlog - Fourth/ReadOurBlog';
import RecipeList from './Screens/RecipeList - Second/RecipeList';
import NavBar from './Components/NavBar/NavBar';
import Register from './Screens/RegisterPage/Register'

function App() {
  return (
    <div className="App">
  <Router>
    <NavBar />
    <Switch>
    <Route exact path="/">
        <HomePage />
        <RecipeList />
        <BestServices />
        <ReadOurBlog />
        <JoinOurMembership />
    </Route>
    <Route exact path="/register">
        <Register />
        </Route>
    </Switch>
  </Router>
     </div>
  );
}

export default App;
