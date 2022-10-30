import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import ReduxThunk from 'redux-thunk'


const middlewares = [ReduxThunk]

const store = createStore(
    reducer,
    compose(applyMiddleware(...middlewares))
)

export default store;