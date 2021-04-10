import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { ICartState } from './modules/cart/types';
import createSagaMiddleware from 'redux-saga';
import RootReducer from './modules/RootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
    cart: ICartState;   
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const store = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(...middlewares),
    ),
)

sagaMiddleware.run(rootSaga)

export default store;