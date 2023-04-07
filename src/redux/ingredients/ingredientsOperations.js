import { createAsyncThunk } from '@reduxjs/toolkit';

import { getRecipesByIngredientAPI } from 'service/API/dishesApi';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset(token) {
    axios.defaults.headers.common.Authorization = '';
  },
};

// export const getRecipesByIngredient = createAsyncThunk(
//   'ingredients/recipes',
//   async (params, { rejectWithValue, getState }) => {
//     const state = getState();
//     const persistedAccessToken = state.auth.accessToken;
//     if (!persistedAccessToken) {
//       return rejectWithValue();
//     }
//     token.set(persistedAccessToken);
//     try {
//       const { ingredient, page, per_page } = params;
//       const data = await getRecipesByIngredientAPI(ingredient, page, per_page);
//       console.log('all recipes by ingredient', data);
//       return data;
//     } catch (error) {
//       console.log(error.message);
//       return rejectWithValue(error.response.status);
//     }
//   }
// );

export const getRecipesByIngredient = createAsyncThunk(
  'ingredients/recipes',
  async ({ ingredient, page, per_page }, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedAccessToken = state.auth.accessToken;
    if (!persistedAccessToken) {
      return rejectWithValue();
    }
    token.set(persistedAccessToken);
    try {
      const data = await getRecipesByIngredientAPI(ingredient, page, per_page);
      console.log('all recipes by ingredient', data);
      return data.ingredient;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue(error.response.status);
    }
  }
);

// export const getRecipesByQuery = createAsyncThunk(
//   'outerRecipes/recipesByQuery',
//   async ({ query, page, per_page }, { rejectWithValue, getState }) => {
//     const state = getState();
//     const persistedAccessToken = state.auth.accessToken;
//     if (!persistedAccessToken) {
//       return rejectWithValue();
//     }
//     token.set(persistedAccessToken);
//     try {
//       const data = await getRecipesByQueryAPI(query, page, per_page);
//       console.log('recipes by search query', data);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response.status);
//     }
//   }
// );
