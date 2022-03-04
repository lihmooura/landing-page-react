import React from 'react';
import HomePage from './Screens/Home - First/HomePage'
import './App.css'
import RecipeList from './Screens/RecipeList - Second/RecipeList'
import BestServices from './Screens/BestServices - Third/BestServices';
import ReadOurBlog from './Screens/ReadOurBlog - Fourth/ReadOurBlog';


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
    </div>
  );
}

export default App;
