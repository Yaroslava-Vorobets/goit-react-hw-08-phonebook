
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials)    
      setAuthHeader(res.data.token)
      return res.data 
     
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message) 
    }
  })

export const logIn = createAsyncThunk(
  'auth/login',
   async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials) 
        setAuthHeader(res.data.token)
      return res.data  
    } catch (error) {
       return thunkAPI.rejectWithValue(error.message) 
    }
  })

export const logOut = createAsyncThunk(
  'auth/logout',
  async(_, thunkAPI)=> {
  try {
    await axios.post('/users/logout')
    clearAuthHeader()
  } catch (error) {
     return thunkAPI.rejectWithValue(error.message) 
  }
  })

export const refreshUser = createAsyncThunk(
    'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
      if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
