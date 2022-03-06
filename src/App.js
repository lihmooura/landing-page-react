import React from 'react';
import './Assets/Global.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BestServices from './Screens/Services/BestServices';
import HomePage from './Screens/Home/HomePage';
import JoinOurMembership from './Screens/Membership/JoinOurMembership';
import ReadOurBlog from './Screens/About/ReadOurBlog';
import RecipeList from './Screens/RecipeList/RecipeList';
import Register from './Screens/RegisterPage/Register';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';

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
        <Footer />
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
