import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {ISneakers} from "../../interfaces/sneakers_interface";
import {sneakersService} from "../../services";

interface IState {
    sneakersList: ISneakers[],
    sum: number,
    commission: number,
    cartList: ISneakers[],
    searchList:ISneakers[],
    favoriteList:ISneakers[]
}

const getSneakersList = createAsyncThunk<ISneakers[], void>(
    'sneakersSlice/getSneakersList',
    async () => {
        const {data} = await sneakersService.getAll();
        return data;
    }
);
const searchSneakers = createAsyncThunk<ISneakers[], string>(
    'sneakersSlice/searchSneakers',
    async  (query) => {
        const {data} = await sneakersService.getAll();
        return data.filter(value => value.name.toLowerCase().includes(query.toLowerCase()));
    }
);


const initialState: IState = {
    sneakersList: [],
    sum: 0,
    commission: 0,
    cartList: [],
    searchList:[],
    favoriteList:[]
};

const sneakersSlice = createSlice({
    name: 'sneakersSlice',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cartList.push(action.payload);
            state.sum += action.payload.price;
            state.commission = Math.floor(state.sum * 0.05);
        },
        removeProduct: (state, action) => {
            state.sum -= state.cartList[action.payload].price;
            state.cartList = state.cartList
                .filter(a=>state.cartList.indexOf(a)!==action.payload);
            state.commission = Math.floor(state.sum * 0.05);
        },
        addToFavorite:(state,action)=>{
            state.favoriteList.push(action.payload);
            // console.log(state.favoriteList);
        },
        removeFromFavorite:(state,action)=>{
            state.favoriteList = state.favoriteList
                .filter(value=>value.id!==action.payload.id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSneakersList.fulfilled, (state, action) => {
                state.sneakersList = action.payload;
            })
            .addCase(searchSneakers.fulfilled,(state,action)=>{
                state.sneakersList = action.payload;
            })
    }

});

const {reducer: sneakersReducer,actions: {addProduct,removeProduct,addToFavorite,removeFromFavorite}} = sneakersSlice;

const sneakersActions = {
    getSneakersList,
    addProduct,
    removeProduct,
    searchSneakers,
    addToFavorite,
    removeFromFavorite
}

export {
    sneakersReducer,
    sneakersActions
}