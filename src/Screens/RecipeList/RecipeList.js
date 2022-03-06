import React from 'react';
import Card from '../../Components/Cards-Recipe/Card';
import './RecipeList.css';

const RecipeList = () => {

const AllRecipes = [
        {id: 1, title: 'Broccoli Salad with Bacon', 
        image:'https://cookeatpaleo.com/wp-content/uploads/2020/05/broccoli-salad-with-bacon-cook-eat-well-1.jpg'},
        {id: 2, title: 'Classic Beef Burguers', 
        image: 'https://i.pinimg.com/736x/09/dd/45/09dd45aaafdcc5a091fa952bac2a1530--burger-barn-burger-meat.jpg'},
        {id: 3, title: 'Classic Potato Salad', 
        image: 'https://www.inspiredtaste.net/wp-content/uploads/2016/10/Easy-Potato-Salad-Recipe-1-1200.jpg'},
        {id: 4, title: 'Cherry Cobbler on The Grill', 
        image: 'https://2.bp.blogspot.com/-MMA4FfuTyJE/Wr0ZDpWvHaI/AAAAAAAAxu4/wjjkLPw83Ck-_4Jfo1xaH_EWJz1DGEmvACEwYBhgL/s1600/Bourbon%2BCherry%2BCobbler%2BSmoked%2BIce%2BCream%2BDSC_0125.jpg'}]

    return (
        <div className='RecipeList'>
            <div className='recipe-text'>
       
                <h2 className='x-large-text bold'>Our Best Recipes</h2>
    
   
                <h3 className='small-text text-details'>Far far away, behind the word mountains, far from the countries
                    <br />
                Vokalia and Consonantia, there live the blind texts.</h3>
    
            </div>
            <div className='card-list'>
            {AllRecipes.map((recipe, i) => { 
                return( 
                <Card title={recipe.title} image={recipe.image} /> )
                }
            )
        }
            </div>
        </div>
        )}

export default RecipeList;