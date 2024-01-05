import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import {persistReducer} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
const rootReducer=combineReducers({user:userReducer})
const persistConfig={
    key:'root',
    storage,
    version:1,
}
let persistedReducer=persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer:persistedReducer,
  middleware:(getDefualtMiddleware)=>getDefualtMiddleware({
    serializableCheck:false,
  }),
})

export const persist=persistStore(store)