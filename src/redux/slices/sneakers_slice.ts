import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ISneakers} from "../../interfaces/sneakers_interface";
import {sneakersService} from "../../services";

interface IState {
    sneakersList:ISneakers[],
    sum:number,
    commission:number,
    cartList:ISneakers[]
}

const getSneakersList = createAsyncThunk<ISneakers[],void>(
    'sneakersSlice/getSneakersList',
    async ()=>{
        const {data} =await sneakersService.getAll();
        return data;
    }
);

const initialState:IState = {
    sneakersList:[],
    sum:0,
    commission:0,
    cartList:[]
};

const sneakersSlice = createSlice({
    name:'sneakersSlice',
    initialState,
    reducers:{

    },
    extraReducers:{

    }

});

const {reducer:sneakersReducer} = sneakersSlice;

const sneakersActions = {

}

export {
    sneakersReducer,
    sneakersActions
}