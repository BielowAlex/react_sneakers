import {createSlice} from "@reduxjs/toolkit";

interface IState {
    isAuth?: boolean,
    email: string,
    token: string,
    id: string
}

const initialState: IState = {
    isAuth:false,
    email: '',
    token: '',
    id: ''
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        login:(state,action)=>{
          state.isAuth = true;
          state.email = action.payload.email;
          state.id = action.payload.uid;
          state.token = action.payload.accessToken;
            console.log(state.email)
        },

    }
});

const {reducer: userReducer,actions:{login}} = userSlice;

const userActions = {
    login
}

export {
    userReducer,
    userActions
}