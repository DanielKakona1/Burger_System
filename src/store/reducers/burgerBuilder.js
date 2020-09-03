import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility'

const initialState ={
    ingredients:null,
    totalPrice:4,
    error:false,
    building:false
}
const INGREDIENT_PRICES={
    salad:0.5,
    bacon:0.4,
    cheese:1.3,
    meat:0.7
};
const addIngredient =(state, action)=>{
    const updateIngredient ={[action.ingredientName]: state.ingredients[action.ingredientName]+1}   
    const updateIngredients = updateObject(state.ingredients,updateIngredient);
    const updatedState ={
        ingredients:updateIngredients,
        totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName] ,
        building:true
    }
        return updateObject( state,updatedState) ;
}
const removeIngredient =(state,action)=>{
    const updateIng ={[action.ingredientName]: state.ingredients[action.ingredientName]-1}   
    const updateIngs = updateObject(state.ingredients,updateIng);
    const updatedSt ={
        ingredients:updateIngs,
        totalPrice:state.totalPrice + INGREDIENT_PRICES[action.ingredientName] ,
        building:true
    }
        return updateObject( state,updatedSt) ;
}
const setIngredient =(state,action)=>{
    return updateObject(state,{
        ingredients:action.ingredients,
        totalPrice:4,
        error:false,
        building:false
    })
}
const fetchIngredientsFailed =(state,action)=>{
    return updateObject(state, {error:true})
}

const reducer =(state=initialState,action)=>{
switch(action.type){
    case actionTypes.ADD_INGREDIENT:return addIngredient(state,action);
    case actionTypes.REMOVE_INGREDIENT: return removeIngredient(state,action)
    case actionTypes.SET_INGREDIENTS: return setIngredient(state,action);
    case actionTypes.FETCH_INGREDIENTS_FAILED: return fetchIngredientsFailed(state,action)
    default: return state;
}
}

export default reducer;