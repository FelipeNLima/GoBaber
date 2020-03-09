import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const SagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [SagaMiddleware];

const store = createStore(persistReducers(rootReducer), middleware);
const persistor = persistStore(store);

SagaMiddleware.run(rootSaga);

export { store, persistor };
