import React from 'react';
import HomePage from './Screens/Home - First/HomePage'
import './App.css'
import RecipeList from './Screens/RecipeList - Second/RecipeList'
import BestServices from './Screens/BestServices - Third/BestServices';
import ReadOurBlog from './Screens/ReadOurBlog - Fourth/ReadOurBlog';
import JoinOurMembership from './Screens/JoinOurMembership - Fifth/JoinOurMembership';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
      <HomePage />
      </div>
      <div>
      <RecipeList />
      </div>
      <div>
        <BestServices />
      </div>
      <div>
        <ReadOurBlog />
      </div>
      <div>
        <JoinOurMembership />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
