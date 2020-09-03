import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';
export const addIngredient =(name)=>{
return{
    type:actionTypes.ADD_INGREDIENT,
    ingredientName:name
}
}

export const removeIngredient =(name)=>{
    return{
        type:actionTypes.REMOVE_INGREDIENT,
        ingredientName:name
    }
    }

export const setIngredients =(ingredients)=>{
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients,
        
    }
}

export const fetchIngredientsFailed = ()=>{
    return {
        type:actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const initIngredients = ()=>{
    return dispacth =>{
        axios.get('https://burger-f7deb.firebaseio.com/ingredients.json')
        .then(response =>{
   dispacth(setIngredients(response.data))
        })
        .catch(error=>{
    dispacth(fetchIngredientsFailed())
        }) 
    };
}