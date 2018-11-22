// import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import initialState from "./initialState";
import reducer from "../redux/reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["drawer", "toastMessage"]
};
const persistedReducer = persistReducer(persistConfig, reducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
