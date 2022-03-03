import React from 'react';
import Card from '../../Components/Cards-Recipe/Card';
import './RecipeList.css';

const BestRecipe = () => {

const AllRecipes = [
        {id: 1, title: 'Broccoli Salad with Bacon', 
        image:'https://cookeatpaleo.com/wp-content/uploads/2020/05/broccoli-salad-with-bacon-cook-eat-well-1.jpg'},
        {id: 2, title: 'Classic Beef Burguers', 
        image: 'https://i.pinimg.com/736x/09/dd/45/09dd45aaafdcc5a091fa952bac2a1530--burger-barn-burger-meat.jpg'},
        {id: 3, title: 'Classic Potato Salad', 
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2016/10/Easy-Potato-Salad-Recipe-1-1200.jpg'},
        {id: 4, title: 'Cherry Cobbler on The Grill', 
        image: 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/27044846/6440433.jpg'}]

    return (
        <div className='BestRecipe'>
            <div className='BestRecipe-text-header'>
            <h2>Our Best Recipes</h2>
            </div>
            <div className='BestRecipe-text'>
            <h3>Far far away, behind the word mountains, far from the countries
                <br />
            Vokalia and Consonantia, there live the blind texts.</h3>
            </div>
            <div className='BestRecipe-card'>
            {AllRecipes.map((recipe, i) => { 
                return( 
                <Card title={recipe.title} image={recipe.image} /> )})}
            </div>
        </div>
        )}

export default BestRecipe;