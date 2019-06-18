import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./Reducers";

/* Persisted reducer setup*/
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["ACCOUNT_REDUCER"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  // Creating the store
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  // Creating the persistor
  const persistor = persistStore(store);
  return { store, persistor };
};
